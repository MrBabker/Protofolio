import Background from "../components/ui/Background";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import About from "../components/ui/About";
import Skills from "../components/ui/Skills";
import Projects from "../components/ui/Projects";
import Contact from "../components/ui/Contact";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <main className="relative z-10 text-white overflow-x-hidden">
      {" "}
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
