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
      <section>parallax</section>
      <section>services</section>
      <section>parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section>contact</section>
      <Test />
    </div>
  );
}
