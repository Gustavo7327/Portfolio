
export default function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col md:flex-row items-center justify-between py-16 md:px-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">

      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Olá! Eu sou o Gustavo
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Desenvolvedor de Software
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-6 rounded-lg transition duration-300">
          Entrar em Contato
        </button>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative">
          <div className="w-56 h-56 md:w-72 md:h-72 bg-blue-500 rounded-full flex items-center justify-center">
            <img
              src="/foto.png" 
              alt="Foto de Gustavo"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}