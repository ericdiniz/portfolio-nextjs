import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="sobre-mim">
        <About />
      </div>
      <div id="experiencias">
        <Experiences />
      </div>
      <div id="tecnologias">
        <Technologies />
      </div>
      <div id="contato">
        <Contact />
      </div>
    </>
  );
}
