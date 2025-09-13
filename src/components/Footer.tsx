'use client'
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="text-gray-400 py-12 bg-[radial-gradient(ellipse_300%_100%_at_bottom_left,#2F4285,#6A6D77_100%)]">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-20 ">
        
        <motion.div 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:0.8}}
        
        className="flex flex-col items-center sm:items-start mb-6 sm:mb-0 px-10">
          <motion.img 
           
          src="./grudhralogo.png" alt="Grudhra Solutions Logo" className="mb-4 w-32 h-32 rounded-full" />
          <h2
           
           className="dark:text-gray-100 text-black text-6xl mb-4 text-center sm:text-left heading-2">Grudhra <br /> Solutions </h2>
        </motion.div>
        
        <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0 px-10">
          <motion.h3
            whileInView={{ opacity:1, y:0 }}
            initial={{ opacity:0, y:100 }}
            transition={{ duration:0.8 }}
            className="text-2xl heading-2 text-gray-300 dark:text-gray-300 font-bold "
          >
            Contact Information <br /> <br />
          </motion.h3>
          <motion.div
            whileInView={{ opacity:1, y:0 }}
            initial={{ opacity:0, y:100 }}
            transition={{ duration:0.8 }}
            className="text-gray-300 dark:text-gray-300 "
          >
            <p>Address: 10 1st Cross, Post, Annapoorneshwari Layout, Yeswanthpur, Doddabidirakallu,Bengaluru, Karnataka 560073</p> <br />
            <p>Phone: +91-9731123140</p> <br />
            <p>Email: <a href="" className="hover:text-red-400">sales@grudhrasolutions.com</a></p> <br />
          </motion.div>
        </div>
        
        <div className="flex flex-col gap-8 text-2xl justify-center items-center sm:items-start">
          <motion.div
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:0.8}}
           className="flex flex-row gap-5 px-3 heading-2">
            <a href="/about" className="text-gray-300  hover:text-red-400">About</a>
            <a href="" className="text-gray-300  hover:text-red-400">Enquiry</a>
            <a href="" className="text-gray-300  hover:text-red-400">Careers</a>
          </motion.div>
          <motion.div
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:1}}
           className="flex flex-row gap-8 p-2 text-4xl">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-gray-300 dark:text-gray-300 hover:text-blue-500" />
            </a>
            <a href="https://x.com/GrudhraSolution?t=sVOHqKtfUKdgH57YGu2N9w&s=09" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className="text-gray-300 dark:text-gray-300 hover:text-blue-500" />
            </a>
            <a href="https://www.youtube.com/@grudhrasolutionspvtltd" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-gray-300 dark:text-gray-300 hover:text-red-600" />
            </a>
            <a href="https://www.instagram.com/grudhrasolutions_pvt_ltd/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-300 dark:text-gray-300 hover:text-pink-500" />
            </a>
          </motion.div>
          <p className="px-2 text-2xl max-sm:text-xl text-center sm:text-left mt-10 text-gray-300">Copyright ©️ 2024 | with 💖 from 
            <a href="/" className="px-1 text-bold bg-gradient-to-r  bg-clip-text text-transparent from-gray-200 to-pink-400">
              Team Grudhra
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



















