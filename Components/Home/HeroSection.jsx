"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full h-[500px] relative overflow-hidden">
        <div
          className="bg-cover bg-center bg-no-repeat h-full w-full"
          style={{
            backgroundImage: "url('/assets/images/home-images/hero-ig.jpg')",
          }}
        >
          <div className="absolute inset-0 text-center px-11 bg-gray-100/10 flex flex-col items-center justify-center md:items-start md:justify-end py-11">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl text-[var(--meltBorwn)] shadow-2xl font-extrabold"
            >
              Stories That Inspire
            </motion.h1>
            <div className="w-72 h-1 bg-[var(--eBoxColor)] mt-3 mx-14 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white text-lg md:text-2xl mt-4 shadow-2xl"
            >
              Discover fresh ideas and thoughtful insights to spark your
              curiosity and keep you inspired with every read.
            </motion.p>
            <Link href="/blogs">
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--eBoxColor)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-semibold transition mt-3"
                style={{ backgroundColor: "var(--navFColor)", color: "#fff" }}
              >
                Explore Blogs
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
