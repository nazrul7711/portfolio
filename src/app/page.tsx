"use client";
import Test from "@/components/test";
import "@/styles/page.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Parallelx from "@/components/Parallelx";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  let ref = useRef(null);
  let isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="page" ref={ref}>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="Homepage">
        <Parallelx />
      </section>
      <section id="Services">
        <Services />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      
    </div>
  );
}
