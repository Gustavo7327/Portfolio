import { useLanguage } from "../i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center ml-3">
      <button
        type="button"
        aria-label={t("switch.label")}
        className="text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition"
        onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
      >
        {locale === "pt" ? "EN" : "PT"}
      </button>
    </div>
  );
}
