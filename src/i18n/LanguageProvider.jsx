import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext({
  locale: "pt",
  setLocale: () => {},
  t: () => "",
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("pt");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved && translations[saved]) {
      setLocale(saved);
      return;
    }

    const browser =
      typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "pt";
    setLocale(translations[browser] ? browser : "pt");
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = useMemo(
    () => (path) => {
      if (!path || !locale) return "";
      const chunks = path.split(".");
      let node = translations[locale];
      for (let chunk of chunks) {
        if (!node || typeof node !== "object") return "";
        node = node[chunk];
      }
      return node || "";
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
