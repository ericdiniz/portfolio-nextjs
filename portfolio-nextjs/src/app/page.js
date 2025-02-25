"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            const offset = 100;
            window.scrollTo({ top: section.offsetTop - offset, behavior: "smooth" });
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
