import Switch from "./Switch";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageProvider";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuMobileRef = useRef(null);

  const handleBtnClick = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleDocumentClick = (e) => {
    const menuMobile = menuMobileRef.current;
    const btnMenu = e.target.closest("#menu-mobile");
    if (!btnMenu && menuMobile && !menuMobile.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="flex items-center justify-center sticky top-0 bg-white dark:bg-gray-800 w-full shadow-md z-10">
      <div className="flex justify-between items-center p-4 h-20 w-full max-w-[850px] ">
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="Logo"
          className="size-36"
          onClick={() => (window.location.href = "#hero")}
        />
        <button
          id="menu-mobile"
          onClick={handleBtnClick}
          className="md:hidden flex items-center justify-center w-10 h-10  text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="hidden md:flex">
          <ul className="flex flex-row justify-between text-lg text-gray-900 dark:text-white pr-4 space-x-12">
            <li>
              <a
                href="#about"
                className="hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                {t("navbar.projects")}
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                {t("navbar.certifications")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                {t("navbar.contact")}
              </a>
            </li>
          </ul>
        </nav>

        <nav
          ref={menuMobileRef}
          id="menu-mobile-links"
          className={`fixed top-0 right-0 w-40 z-50 h-screen transform transition-transform duration-300 border-l-2 dark:border-gray-700 border-gray-400 bg-gray-50 dark:bg-[#1e2939] ${
            isOpen ? "translate-x-0" : "translate-x-[200vw]"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-8 mt-4">
            <li className="link" onClick={handleLinkClick}>
              <a
                href="#about"
                className="text-gray-900 dark:text-white text-xl hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                {t("navbar.about")}
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a
                href="#projects"
                className="text-gray-900 dark:text-white text-xl hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                {t("navbar.projects")}
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a
                href="#certifications"
                className="text-gray-900 dark:text-white text-xl hover:text-green-700 dark:hover:text-[#008000]  transition-colors"
              >
                {t("navbar.certifications")}
              </a>
            </li>
            <li className="link" onClick={handleLinkClick}>
              <a
                href="#contact"
                className="text-gray-900 dark:text-white text-xl hover:text-green-700 dark:hover:text-[#008000]  transition-colors"
              >
                {t("navbar.contact")}
              </a>
            </li>
            <li className="link md:hidden" onClick={handleLinkClick}>
              <div className="flex gap-2 px-2">
                <Switch />
                <LanguageSwitcher />
              </div>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Switch />
          <LanguageSwitcher />
        </div>
      </div>

      <div
        className={`
          fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-500 ease-in-out
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
        onClick={handleLinkClick}
      />
    </header>
  );
}
