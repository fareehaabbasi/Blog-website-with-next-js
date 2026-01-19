"use client";
import React from "react";
import Link from "next/link";
import blogs from "@/data/blog";
import { motion } from "framer-motion";

const CategoriesPage = () => {
  // Unique categories from blogs + extra ones
  const extraCategories = ["SEO", "AI"];
  const categories = [
    ...new Set(blogs.map(blog => blog.category)),
    ...extraCategories
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 ">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "anticipate" }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-[var(--headingColor)] mb-8 text-center md:text-left">
        Explore Categories
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "anticipate" }}
        viewport={{ once: true }}
      className="text-center md:text-left text-[var(--navFColor)] mb-8">
        Click any category to explore related blogs.
      </motion.p>

      {/* Categories Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      className="flex flex-wrap gap-4 justify-center md:justify-start">
        {categories.map(cat => {
          const slug = cat.toLowerCase().replace(" ", "-");
          return (
            <Link
              key={cat}
              href={`/category/${slug}`}
              className="
                px-6 py-3
                rounded-3xl
                bg-[var(--meltBorwn)]
                text-black
                font-semibold
                text-sm
                shadow-lg
                transform
                hover:bg-[var(--eBoxColor)]
                hover:text-white
                hover:scale-105
                hover:shadow-xl
                transition
                duration-300
                cursor-pointer
              "
            >
              {cat}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CategoriesPage;
