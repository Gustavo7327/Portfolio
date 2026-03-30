import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import { LanguageProvider } from "./i18n/LanguageProvider";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Certifications from "./sections/Certifications";

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
        <Navbar />

        <Hero />

        <About />

        <Projects />

        <Certifications />

        <Contact />

        <Footer />
      </div>
    </LanguageProvider>
  );
}
