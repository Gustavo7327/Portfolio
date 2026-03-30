import { useLanguage } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="w-screen h-screen flex flex-col md:flex-row items-center justify-between py-16 md:px-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">

      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {t("hero.greeting")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          {t("hero.occupation")}
        </p>
        <a
          href="#contact"
          className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-6 rounded-lg transition duration-300"
        >
          {t("hero.contact")}
        </a>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative">
          <div className="w-56 h-56 md:w-72 md:h-72 bg-blue-500 rounded-full flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}foto.png`}
              alt="Foto de Gustavo"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}