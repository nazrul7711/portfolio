import Test from "@/components/test";
import Image from "next/image";
import "@/styles/page.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Parallelx from "@/components/Parallelx";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="page">
      <section>
        <Navbar />
        <Hero/>
      </section>
      <section id="Homepage"><Parallelx/></section>
      <section id="Services"><Services/></section>
      <section id="Portfolio">parallax</section>
      <section id="Contact">portfolio1</section>
      <section id="About">portfolio2</section>
      <section>portfolio3</section>
      <section>contact</section>
      <Test />
    </div>
  );
}
