import { useLanguage } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full px-3 py-4 mt-auto">
      <p className="text-black dark:text-white text-sm text-center">
        &copy; {new Date().getFullYear()} Gustavo Chaves. {t("footer.copyright")}
      </p>
    </footer>
  );
}
