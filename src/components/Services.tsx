"use client";
import React from "react";
import Image from "next/image";
import "@/styles/services.scss";
import { motion } from "framer-motion";

const Services = () => {
  let sliderVariants = {
    initial: { x: -400 },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        staggerChildren:.6
      },
    },
  };
  return (
    <motion.div
      className="services"
      variants={sliderVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer" variants={sliderVariants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="ideaContainer" variants={sliderVariants}>
        <div className="title">
          <div className="imgContainer">
            <Image src={"/people.webp"} alt="titleImg" fill={true} />
          </div>
          <div>
            <b>Unique</b>
            <div>Ideas</div>
          </div>
        </div>
        <div className="title">
          <div>
            <b>For Your</b>
            <div>Business</div>
          </div>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={sliderVariants}>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ad
            doloribus corporis consequuntur commodi necessitatibus laborum magni
            nesciunt accusamus velit,
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ad
            doloribus corporis consequuntur commodi necessitatibus laborum magni
            nesciunt accusamus velit,
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ad
            doloribus corporis consequuntur commodi necessitatibus laborum magni
            nesciunt accusamus velit,
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ad
            doloribus corporis consequuntur commodi necessitatibus laborum magni
            nesciunt accusamus velit,
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
