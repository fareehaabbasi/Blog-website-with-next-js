"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PostThoughtSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-20 mt-16">
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "anticipate" }}
        viewport={{ once: true }}
        className="bg-[var(--purpleColor)] rounded-3xl p-12 text-center shadow-lg"
      >
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: "var(--headingColor)" }}
        >
          Share Your Thought
        </h2>
        <p className="text-[var(--navFColor)] mb-6">
          We would love to hear your ideas and insights. Post your thought now!
        </p>

        <Link href="/write-for-us">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold bg-[var(--eBoxColor)] text-white transition"
          >
            Post Your Thought
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default PostThoughtSection;
