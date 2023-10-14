"use client";
import "@/styles/test.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open,setOpen]=useState(false)
  let variants={
    visible:{opacity:1,x:200,transition:{staggerChildren:.3}},
    hidden:{opacity:0}
  }
  let items = ["item1","item2","item3","item4"]
  return (
    <div className="test">
      <motion.ul variants={variants} initial="hidden" animate="visible">
        {items.map((item) => (
          <motion.li variants={variants}>{item}</motion.li>
        ))}
      </motion.ul>
      <button onClick={() => setOpen((a) => !a)}>Click to see animate</button>
    </div>
  );
};

export default Test;

//initial:{},animate:{},transition:{},whileHover = {{}},
