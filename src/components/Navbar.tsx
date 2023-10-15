"use client"
import "@/styles/navbar.scss"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import {motion} from "framer-motion"
import Sidebar from "./Sidebar";

const Navbar = () => {
  let variants={
    hidden:{opacity:0,scale:.5},
    visible:{opacity:1,scale:1}
  }
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{duration:.5}}
          className="logo"
        >
          Nazrul Hassan
        </motion.div>
        <div className="socialLinks">
          <div className="link">
            <BsFacebook size={20} />
          </div>
          <div className="link">
            <BsInstagram size={20} />
          </div>
          <div className="link">
            <BsYoutube size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar