"use client";
import React from "react";
import { AuroraBackground } from "../ui/Aurora-background";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaPaperPlane } from "react-icons/fa";
import { GridBackgroundDemo } from "../ui/Dotted-background";

const Hero = () => {
    return (
        <div id="home">
            <AuroraBackground>
                <div className="relative z-10 h-screen w-screen flex flex-col items-center justify-center text-center">
                    <div className="flex w-full md:w-[70vw] lg:w-[60vw] justify-center items-center flex-col gap-2 capitalize px-5">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.2, duration: 0.4 },
                            }}
                            className="text-xs uppercase tracking-wide"
                        >
                            Empower your projects with dynamic AI agents
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.6, duration: 0.4 },
                            }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold"
                        >
                            Create{" "}
                            <span className="text-white">
                                Seamless Multi-Agent Workflows
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1, duration: 0.4 },
                            }}
                            className="max-w-3xl mx-auto"
                        >
                            Build tailored AI-driven solutions by integrating
                            with leading LLM vendors. Our framework enables the
                            creation of powerful agents and collaborative
                            workflows to streamline your projects.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 1.4, duration: 0.4 },
                        }}
                        className="mt-10 relative border border-light rounded-lg group cursor-pointer"
                    >
                        <div className="bg-light flex absolute w-0 h-full rounded-lg top-0 left-0 group-hover:w-full transition-all duration-300"></div>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="relative z-10 flex items-center gap-3 group-hover:text-black duration-300 px-8 py-2"
                        >
                            Discover Agentsman
                            <FaPaperPlane />
                        </Link>
                    </motion.div>
                </div>
                <GridBackgroundDemo />
            </AuroraBackground>
        </div>
    );
};

export default Hero;
