"use client";
import React, { useRef } from "react";
import "@/styles/parallelx.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallelx = () => {
  let divRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end start"],
  });
  let yChanged = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  let xChanged = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <motion.div className="parallex" ref={divRef}>
      <motion.h1 style={{ y: yChanged }}>What We Do?</motion.h1>
      <div className="mountains"></div>
      <motion.div
        className="stars"
        style={{ x: xChanged, transition: { duration: 2 } }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{ y: yChanged, transition: { duration: 2 } }}
      ></motion.div>

    </motion.div>
  );
};

export default Parallelx;
