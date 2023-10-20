"use client";
import React from "react";
import Image from "next/image";
import "@/styles/services.scss";
import { motion } from "framer-motion";

const Services = () => {
  let sliderVariants = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.6,
      },
    },
  };
  return (
    <motion.div
      className="services"
      variants={sliderVariants}
      initial="initial"
      whileInView="animate"
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
          <div className="desc">
            <b>Unique</b>
            <p>Ideas</p>
          </div>
        </div>
        <div className="title">
          <div className="desc">
            <b>For Your</b>
            <p>Business</p>
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
      {/* <motion.div
        style={{ height: "3px", backgroundColor: "red", scaleX: ".6" }}
      ></motion.div> */}
    </motion.div>
  );
};

export default Services;
