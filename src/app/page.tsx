"use client";
import Test from "@/components/test";
import "@/styles/page.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Parallelx from "@/components/Parallelx";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="page">
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
    </div>
  );
}
