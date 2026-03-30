import { useLanguage } from "../i18n/LanguageProvider";
import TechTag from "../components/TechTag";

const techBadges = [
  {
    name: "Java",
    url: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
  },
  {
    name: "Spring",
    url: "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
  },
  {
    name: "PHP",
    url: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
  },
  {
    name: "Laravel",
    url: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
  },
  {
    name: "JavaScript",
    url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  },
  {
    name: "React",
    url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  {
    name: "React Native",
    url: "https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white",
  },
  {
    name: "MySQL",
    url: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
  },
  {
    name: "PostgreSQL",
    url: "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
  },
  {
    name: "MongoDB",
    url: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
  },
  {
    name: "Tailwind CSS",
    url: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white",
  },
  {
    name: "Git",
    url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
  },
  {
    name: "Maven",
    url: "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=maven&logoColor=white",
  },
  {
    name: "Bash",
    url: "https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white",
  },
  {
    name: "Docker",
    url: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
  },
  {
    name: "Linux",
    url: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=white",
  },
  {
    name: "Postman",
    url: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
  },
  {
    name: "Visual Studio Code",
    url: "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visualstudiocode&logoColor=white",
  },
  {
    name: "IntelliJ IDEA",
    url: "https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white",
  },
];


export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 md:px-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">{t("about.title")}</h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-justify">
          {t("about.description")}
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-3">{t("about.technologies")}</h3>
          <div className="flex flex-wrap items-center">
            {techBadges.map((tech) => (
              <TechTag key={tech.name} name={tech.name} url={tech.url} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">{t("about.experience.title")}</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Educação</h4>
              <div className="space-y-6">
                {Object.values(t("about.experience.education") || {}).map((edu, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <h5 className="text-lg font-bold mb-2">{edu.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Experiência</h4>
              <div className="space-y-6">
                {Object.values(t("about.experience.experience") || {}).map((exp, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <h5 className="text-lg font-bold mb-2">{exp.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
