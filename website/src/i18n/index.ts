import ar, { type Dict } from "./ar";
import en from "./en";

export type Lang = "ar" | "en";
export const langs: Lang[] = ["ar", "en"];
const dicts: Record<Lang, Dict> = { ar, en };

export const t = (lang: Lang): Dict => dicts[lang];

/** Locale-aware internal link. Arabic lives at the root, English under /en. */
export const href = (lang: Lang, path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "ar" ? clean : clean === "/" ? "/en/" : `/en${clean}`;
};

/** Path of the same page in the other language. */
export const altPath = (lang: Lang, pathname: string) => {
  if (lang === "en") return pathname.replace(/^\/en(\/|$)/, "/") || "/";
  return pathname === "/" ? "/en/" : `/en${pathname}`;
};

export const fmtNumber = (lang: Lang, n: number) =>
  new Intl.NumberFormat(lang === "ar" ? "en-US" : "en-US").format(n);
