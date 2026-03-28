import { useLanguage } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full px-3 py-4 mt-auto bg-gray-50 dark:bg-gray-800 border-t-3 border-gray-200 dark:border-gray-900">
      <p className="text-black dark:text-white text-sm text-center">
        &copy; {new Date().getFullYear()} Gustavo Chaves. {t("footer.copyright")}
      </p>
    </footer>
  );
}
