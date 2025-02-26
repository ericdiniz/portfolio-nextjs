"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        const section = document.getElementById(id);
        if (section) {
          const offset = 100;
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          window.scrollBy(0, -offset);
        }
      }
    };

    window.addEventListener("hashchange", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  if (!isClient) return null;

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
