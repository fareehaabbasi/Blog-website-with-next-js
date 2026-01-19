"use client";
import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = [
    "Nature",
    "Travel",
    "Food",
    "Health",
    "Education",
    "Photography",
    "Fitness",
    "Lifestyle",
    "SEO",
    "AI",
  ];

  return (
    <section className="">
      {/* Section Heading */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-3xl font-extrabold text-[var(--headingColor)] mb-2">
          Categories
        </h2>
        <p className="text-sm text-[var(--navFColor)]">
          Browse posts by topics
        </p>
      </div>

      {/* Categories Pills */}
      <motion.div
      initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.2, ease:"easeOut"}}
            viewport={{once:true}}
      className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat.toLowerCase().replace(" ", "-")}`}
            className="
              px-5 py-2.5
              rounded-2xl
              bg-[var(--meltBorwn)]
              text-[var(--headingColor)]
              text-sm font-semibold
              hover:bg-[var(--eBoxColor)]
              hover:text-white
              shadow-md
              transition
              duration-300
              transform
              hover:-translate-y-1
              hover:scale-105
            "
          >
            {cat}
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

export default Categories;
