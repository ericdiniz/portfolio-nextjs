"use client";
import "@/src/i18n";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Experiences from "@/src/components/Experiences";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Technologies from "@/src/components/Technologies";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return; // <- Previno execução no SSR

    const handleScroll = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            const offset = 200;
            window.scrollTo({
              top: section.offsetTop - offset,
              behavior: "smooth",
            });
          }
        }, 500);
      }
    };

    window.addEventListener("hashchange", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

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
