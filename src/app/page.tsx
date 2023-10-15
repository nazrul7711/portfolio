import Test from "@/components/test";
import Image from "next/image";
import "@/styles/page.scss";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="page">
      <section>
        <Navbar />
      </section>
      <section id="Homepage">parallax</section>
      <section id="Services">services</section>
      <section id="Portfolio">parallax</section>
      <section id="Contact">portfolio1</section>
      <section id="About">portfolio2</section>
      <section>portfolio3</section>
      <section>contact</section>
      <Test />
    </div>
  );
}
