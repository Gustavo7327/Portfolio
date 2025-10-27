import Switch from "./Switch";
import "./../scripts/MenuMobile";

export default function Navbar() {
  return (
    <header className="flex items-center justify-center sticky top-0 bg-white dark:bg-gray-800 w-full shadow-md z-10">
      <div className="flex justify-between items-center p-4 h-20 w-full max-w-[850px] ">
        <img src="/logo.svg" alt="Logo" className="size-36" />
        <button
          id="menu-mobile"
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
                href="#sobre"
                className="hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#certificados"
                className="hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                Certificados
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <nav
          id="menu-mobile-links"
          className="fixed top-20 right-0 w-40  transform translate-y-[200vh] transition-transform duration-300 border-2 border-gray-500 rounded-md mr-5 bg-gray-50 dark:bg-[#1e2939]"
        >
          <ul className="flex flex-col items-center gap-6 py-8">
            <li className="link">
              <a
                href="#sobre"
                className="text-gray-900 dark:text-white text-xl hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                Sobre
              </a>
            </li>
            <li className="link">
              <a
                href="#projetos"
                className="text-gray-900 dark:text-white text-xl hover:text-green-700 dark:hover:text-[#008000] transition-colors"
              >
                Projetos
              </a>
            </li>
            <li className="link">
              <a
                href="#certificados"
                className="text-gray-900 dark:text-white text-xl hover:text-green-700 dark:hover:text-[#008000]  transition-colors"
              >
                Certificados
              </a>
            </li>
            <li className="link">
              <a
                href="#contato"
                className="text-gray-900 dark:text-white text-xl hover:text-green-700 dark:hover:text-[#008000]  transition-colors"
              >
                Contato
              </a>
            </li>
            <li className="link md:hidden">
              <div className="px-2">
                <Switch />
              </div>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Switch />
        </div>
      </div>
    </header>
  );
}
