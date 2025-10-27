import { useEffect, useState } from "react";
import { toggleTheme } from "../scripts/Theme";

export default function Switch() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    function onStorage(e) {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark");
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function handleToggle() {
    const newTheme = toggleTheme();
    setIsDark(newTheme === "dark");
  }

  return (
    <button
      type="button"
      aria-pressed={isDark}
      title="Alternar tema"
      onClick={handleToggle}
      className="relative flex items-center w-14 h-8 p-1 rounded-full transition-colors duration-200
                       bg-yellow-200 dark:bg-slate-700 focus:outline-none"
    >
      <span className="absolute left-1 text-yellow-500">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M6.76 4.84l-1.8-1.79L3.17 4.84 4.98 6.63 6.76 4.84zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.04 1.05l1.79-1.8-1.79-1.79-1.79 1.79 1.79 1.8zM17.24 19.16l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM20 11v2h3v-2h-3zM12 6a6 6 0 100 12 6 6 0 000-12zM6.76 19.16l-1.79 1.79 1.79 1.79 1.79-1.79-1.79-1.79z" />
        </svg>
      </span>

      <span className="absolute right-1 text-indigo-200">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </span>

      <span
        className={`relative inline-block w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-200 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
