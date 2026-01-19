"use client";

import React from "react";
import { hover, motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-5">
      <div className="p-5 text-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
          style={{ color: "var(--headingColor)" }}
        >
          Take Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[var(--navFColor)] mb-8"
        >
          Share your thoughts, learn more about us, or get in touch today!
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Post Your Thought Button */}
          <Link href="/write-for-us">
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: "var(--navFColor)", cursor: "pointer", scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-semibold bg-[var(--eBoxColor)] text-white transition"
            >
              Post Your Thought
            </motion.button>
          </Link>

          {/* Contact Us Button */}
          <Link href="/contact">
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: "var(--eBoxColor)", cursor: "pointer", scale: 1.1 }}
              whileTap={{ scale: 0.13 }}
              className="px-6 py-3 rounded-full font-semibold bg-[var(--navFColor)] text-white transition "
            >
              Contact Us
            </motion.button>
          </Link>

          {/* About Button */}
          <Link href="/about">
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: "var(--navFColor)", cursor: "pointer", scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-semibold bg-[var(--eBoxColor)] text-white transition"
            >
              About
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
