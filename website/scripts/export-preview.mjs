/**
 * Turns `dist/` into a self-contained preview that works from any sub-path
 * (e.g. a claude.ai Artifact): every root-absolute URL becomes relative and
 * directory routes point at their index.html.
 *
 *   npm run build && node scripts/export-preview.mjs [outDir]
 *
 * The root index.html is emitted without <!doctype>/<html>/<head>/<body>
 * (the Artifact host wraps the main page in its own skeleton); lang/dir are
 * restored by a tiny inline script. Other pages stay complete documents.
 */
import { cpSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";

const src = "dist";
const out = process.argv[2] ?? "preview";
rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(out);
const fileSet = new Set(files.map((f) => "/" + relative(out, f)));

/** Map a site URL ("/pricing#x", "/_astro/a.css") to a path relative to `fromFile`. */
function rel(url, fromFile) {
  const m = url.match(/^([^?#]*)([?#].*)?$/);
  let path = m[1];
  const tail = m[2] ?? "";
  if (!fileSet.has(path)) {
    const asDir = path.replace(/\/?$/, "/") + "index.html";
    if (fileSet.has(asDir)) path = asDir;
  }
  let r = relative(dirname("/" + relative(out, fromFile)), path) || "index.html";
  if (!r.startsWith(".")) r = "./" + r;
  return r + tail;
}

for (const f of files) {
  const ext = extname(f);
  if (ext !== ".html" && ext !== ".css" && ext !== ".js") continue;
  let s = readFileSync(f, "utf8");
  if (ext === ".html") {
    s = s.replace(/(\s(?:href|src)=)(["'])(\/(?!\/)[^"']*)\2/g, (_, a, q, u) => `${a}${q}${rel(u, f)}${q}`);
  }
  s = s.replace(/url\((["']?)(\/(?!\/)[^)"']*)\1\)/g, (_, q, u) => `url(${q}${rel(u, f)}${q})`);
  if (ext === ".js") s = s.replace(/(["'])(\/assets\/[^"']+)\1/g, (_, q, u) => `${q}${rel(u, f)}${q}`);

  if (relative(out, f) === "index.html") {
    const lang = s.match(/<html[^>]*\slang="([^"]+)"/)?.[1] ?? "ar";
    const dir = s.match(/<html[^>]*\sdir="([^"]+)"/)?.[1] ?? "rtl";
    s = s
      .replace(/<!doctype html>/i, "")
      .replace(/<html[^>]*>/i, "")
      .replace(/<\/html>/i, "")
      .replace(/<head>/i, `<script>document.documentElement.lang="${lang}";document.documentElement.dir="${dir}";</script>`)
      .replace(/<\/head>/i, "")
      .replace(/<body[^>]*>/i, "")
      .replace(/<\/body>/i, "")
      .replace(/<title>[^<]*<\/title>/i, "<title>Zayoni Website v2</title>");
    s = s.replace(/^\s+/, "");
    // The title must sit within the first 8KB.
    const t = s.match(/<title>.*?<\/title>/)[0];
    s = t + "\n" + s.replace(t, "");
  }
  writeFileSync(f, s);
}
console.log(`preview written to ${out}/ (${files.length} files)`);
