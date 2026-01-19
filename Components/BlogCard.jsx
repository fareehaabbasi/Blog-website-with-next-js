"use client";
import React from "react";
import Link from "next/link";
import { motion, anticipate } from "framer-motion";
import { fadeUp } from "@/Animation/animation";

export default function BlogCard({ blog }) {

  return (
    <Link href={`/blogs/${blog.slug}`} className="block h-full">
      <motion.div
       variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
        className="
          bg-[var(--meltBorwn)]
          rounded-2xl
          overflow-hidden
          shadow-md
          hover:shadow-xl
          transition
          duration-300
          transform
          hover:-translate-y-1
          flex
          flex-col
          h-full
        "
      >
        {/* Image (FIXED HEIGHT) */}
        <div className="h-44 w-full overflow-hidden">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Category */}
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--eBoxColor)] mb-1">
            {blog.category}
          </span>

          {/* Title (FIXED LINES) */}
          <h3 className="text-base font-bold text-[var(--headingColor)] line-clamp-2">
            {blog.title}
          </h3>

          {/* Description (FIXED LINES) */}
          <p className="text-sm mt-2 text-[var(--navFColor)] line-clamp-3">
            {blog.description}
          </p>

          {/* Footer pushed to bottom */}
          <div className="mt-auto pt-4 flex items-center justify-between">
            <span className="text-xs text-[var(--eBoxColor)]">
              {blog.date}
            </span>

            <span className="text-sm font-medium text-[var(--eBoxColor)] hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
