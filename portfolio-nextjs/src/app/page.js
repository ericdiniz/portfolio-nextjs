import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const offset = 100;
          window.scrollTo({ top: section.offsetTop - offset, behavior: "smooth" });
        }
      }, 500);
    }
  }, [router.asPath]);

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
