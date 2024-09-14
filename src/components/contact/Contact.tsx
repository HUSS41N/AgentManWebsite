"use client";
import React from "react";
import {
    FaDownload,
    FaGithub,
    FaLinkedin,
    FaSquareUpwork,
} from "react-icons/fa6";
import SocialMediaIcons from "./components/SocialMediaIcons";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="h-[70vh] w-full bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#000011] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
            <div className="p-5 md:p-10" id="contact">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl text-center font-bold"
                >
                    Coming Soon
                </motion.h1>
                {/* <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="md:text-xl text-center mt-2"
                >
                    Start Building Your Website Today—Contact Me Now
                </motion.p> */}
            </div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-10 relative  border border-light rounded-lg group cursor-pointer"
            ></motion.div>
        </div>
    );
};

export default Contact;
