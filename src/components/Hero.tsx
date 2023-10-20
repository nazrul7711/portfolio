"use client";
import "@/styles/hero.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { CgScrollV } from "react-icons/cg";

const Hero = () => {
  let heroVariant = {
    initial: { opacity: 0, x: -500 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 1,
      },
    },
    slide: {
      opacity: 0,
      x: 0,
      y: 15,
      transition: {
        repeat: Infinity,
        duration: 2,
      },
    },
  };
  let sliderVariant = {
    init: { x: 0 },
    final: {
      x: -3500,
      transition: { duration: 20, repeat: Infinity, repeatType: "mirror" },
    },
  };

  return (
    <div className="hero">
      <motion.div
        className="wrapper"
        variants={heroVariant}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={heroVariant}>HARVEY TYLER</motion.h2>
        <motion.div className="text" variants={heroVariant}>
          <h1>Web Developer and UI Designer</h1>
        </motion.div>
        <motion.div className="buttons" variants={heroVariant}>
          <button>See My Latest Works</button>
          <button>Contact Me</button>
        </motion.div>
        <motion.div className="scroll" variants={heroVariant} animate="slide">
          <Image src={"/scroll.png"} fill={true} alt={"scroll"} />
        </motion.div>
        <motion.div
          className="slidingQuote"
          variants={sliderVariant}
          initial="init"
          animate="final"
        >
          Writer Content Creator Influencer
        </motion.div>
      </motion.div>

      <div className="imgContainer">
        <Image
          src={"/hero.png"}
          fill={true}
          objectFit="contain"
          alt="portfolioImage"
        />
      </div>
    </div>
  );
};

export default Hero;
