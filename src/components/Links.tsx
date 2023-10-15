import React from "react";
import { motion } from "framer-motion";

const Links = () => {
  let links = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  let variants = {
    open: {
      transition: {
        staggerChildren: .1,
      },
    },
    close: {
      transition: {
        staggerChildren: .04,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {links &&
        links.map((link) => (
          <motion.a
            href={`#${link}`}
            key={link}
            variants={itemVariants}
            whileHover={{scale:1.2,originX:0}}
          >
            {link}
          </motion.a>
        ))}
    </motion.div>
  );
};

export default Links;
