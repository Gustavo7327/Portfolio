
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import TechTag from "../components/TechTag";

const mockProjects = [
  {
    id: 1,
    name: "Doeit",
    image: "/projects/doeit.png",
    githubLink: "https://github.com/Gustavo7327/Doeit",
    technologies: [
      { name: "PHP", url: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
      { name: "Laravel", url: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" },
      { name: "PostgreSQL", url: "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" },
      {name: "JavaScript", url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
      {name: "Git", url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
      {name: "Docker", url: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" }
    ]
  },
  {
    id: 2,
    name: "ByteTech",
    image: "/projects/bytetech.png",
    githubLink: "https://github.com/Gustavo7327/ByteTech",
    technologies: [
      { name: "PHP", url: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
      { name: "Laravel", url: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" },
      { name: "Tailwind CSS", url: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" },
      {name: "MySQL", url: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
      {name: "JavaScript", url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    ]
  },
  {
    id: 3,
    name: "cpcl-api",
    image: "/projects/cpcl-api.png",
    githubLink: "https://github.com/Gustavo7327/cpcl-api", 
    technologies: [
      { name: "Java", url: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" },
      { name: "Spring Boot", url: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" },
      {name: "Spring Security", url: "https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" },
      {name: "SQL", url: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white" },
    ]
  },
  {
    id: 4,
    name: "Piano Tutor",
    image: "/projects/piano-tutor.png",
    githubLink: "https://github.com/Gustavo7327/PianoTutor", 
    technologies: [
      { name: "C++", url: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
      { name: "Arduino", url: "https://img.shields.io/badge/Arduino-00979C?style=for-the-badge&logo=arduino&logoColor=white" },
    ]
  },
  {
    id: 5,
    name: "Vacine Já",
    image: "/projects/vacine-ja.png",
    githubLink: "https://github.com/Gustavo7327/Projeto-Vacina", 
    technologies: [
      { name: "PHP", url: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
      {name: "MySQL", url: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
      {name: "JavaScript", url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
      {name: "HTML", url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
      {name: "CSS", url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
    ]
  },
  {
    id: 6,
    name: "Website Blocker",
    image: "/projects/website-blocker.png",
    githubLink: "https://github.com/Gustavo7327/WebsiteBlocker", 
    technologies: [
      { name: "C++", url: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
      { name: "Qt", url: "https://img.shields.io/badge/Qt-41CD52?style=for-the-badge&logo=qt&logoColor=white" },
    ]
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">{t("projects.title") || "Meus Projetos"}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-48 object-cover p-2"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                <div className="mt-auto">
                  <button 
                    onClick={() => openModal(project)}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
                  >
                    {t("projects.more_details") || "Mais detalhes"}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="absolute inset-0" onClick={closeModal}></div>
          
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 animate-fade-in-up">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.name} 
              className="w-full h-64 md:h-80 object-cover"
            />
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.name}</h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify leading-relaxed">
                {t(`projects.items.${selectedProject.id}.description`) || ""}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">{t("projects.modal.technologies")}</h4>
                <div className="flex flex-wrap items-center">
                  {selectedProject.technologies.map((tech) => (
                    <TechTag key={tech.name} name={tech.name} url={tech.url} />
                  ))}
                </div>
              </div>

              {selectedProject.githubLink && (
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900 text-white font-semibold py-2.5 px-5 rounded-lg transition duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {t("projects.modal.github_link")}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}