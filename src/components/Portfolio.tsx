"use client";
import React, { useRef } from "react";
import "@/styles/portfolio.scss";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const Section = ({
  item,
}: {
  item: {
    id: number;
    desc: string;
    img: string;
    title: string;
  };
}) => {
  let oneRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: oneRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("x changed to", latest);
  });
  let y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <motion.section className="folio">
      <div className="imgContainer" ref={oneRef}>
        <Image src={item.img} fill={true} alt={"folioImg"} />
      </div>
      <motion.div className="detail" style={{ y }} transition={{ duration: 2 }}>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <button>See Demo</button>
        {/* <motion.div
          className="line"
          // style={{
          //   scaleX: scrollYProgress,
          // }}
        >
          <h1>hello</h1>
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
};
let items = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae nemo quis est enim obcaecati.",
    img: "https://images.pexels.com/photos/13703414/pexels-photo-13703414.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "React Project",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae nemo quis est enim obcaecati.",
    img: "https://images.pexels.com/photos/13127343/pexels-photo-13127343.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Vue Project",
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae nemo quis est enim obcaecati.",
    img: "https://images.pexels.com/photos/7726425/pexels-photo-7726425.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Nextjs Project",
  },
  {
    id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae nemo quis est enim obcaecati.",
    img: "https://images.pexels.com/photos/3218718/pexels-photo-3218718.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    title: "Angular Project",
  },
];

const Portfolio = () => {
  let containRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: containRef,
    offset: ["end end", "start start"],
  });

  return (
    <motion.div className="portfolio" ref={containRef}>
      <div className="progress">
        <h1>
          <code>Featured Works</code>
        </h1>
        <motion.div
          className="line"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
      </div>

      {items.map((item) => (
        <Section item={item} />
      ))}
    </motion.div>
  );
};

export default Portfolio;
