import { useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

const mockCertificates = [
  {
    id: 1,
    title: "Google Data Analytics Professional Certificate (v2)",
  },
  {
    id: 2,
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
  },
  {
    id: 3,
    title: "Desenvolvimento Java com Cloud AWS",
  },
];

export default function Certifications() {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certifications" className="py-16 px-4 md:px-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {t("certificates.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-2 leading-tight">{cert.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
                {t("certificates.issued_on") || "Emitido em:"} {t(`certificates.items.${cert.id}.issueDate`) || ""}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={() => openModal(cert)}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center"
                >
                  {t("certificates.view_details") || "Ver detalhes"}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="absolute inset-0" onClick={closeModal}></div>
          
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 animate-fade-in-up">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedCert.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">
                {t("certificates.issued_on") || "Emitido em:"} <span className="text-gray-700 dark:text-gray-300">{t(`certificates.items.${selectedCert.id}.issueDate`) || ""}</span>
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  {t("certificates.modal.concepts") || "Conceitos Abordados"}
                </h4>
                <ul className="space-y-3">
                  {(t(`certificates.items.${selectedCert.id}.concepts`) ?? []).map((concept, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}