"use client";

import { useState } from "react";
import blogs from "../data/blog";
import Link from "next/link";
import HeroSection from "@/Components/Home/HeroSection";
import FeatureSec from "@/Components/Home/FeatureSec";
import LatestBlog from "@/Components/Home/LatestBlog";
import Categories from "@/Components/Home/Categories";
import React from "react";
import { motion } from "framer-motion";
import PostThoughtSection from "@/Components/Home/PostYourThoughts";
import CTASection from "@/Components/Home/CTABtn";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const searchResults = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[var(--primary)] min-h-screen">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* SEARCH */}
          <div className="max-w-xl mx-auto mb-14 relative">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl px-5 py-3 
        bg-[var(--primary)] text-[var(--navFColor)]
        border border-[var(--eBoxColor)]
        placeholder:text-[var(--headingColor)]
        focus:outline-none focus:ring-2 focus:ring-[var(--purpleColor)]
        transition"
            />

            {search && searchResults.length > 0 && (
              <div
                className="absolute w-full mt-2 rounded-xl 
        bg-[var(--meltBorwn)] shadow-lg z-10 overflow-hidden border border-[var(--eBoxColor)]"
              >
                {searchResults.slice(0, 4).map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.slug}`}
                    className="block px-4 py-3 mb-1 text-sm
              text-[var(--navFColor)]
              rounded-lg bg-white shadow-sm
              hover:bg-[var(--purpleColor)] hover:text-white
              transition"
                  >
                    {blog.title}
                  </Link>
                ))}

                <Link
                  href={`/blogs`}
                  className="block text-center py-3 text-sm font-semibold
            text-[var(--purpleColor)]
            bg-[var(--primary)]
            hover:bg-[var(--purpleColor)]
            hover:text-white transition rounded-b-xl"
                >
                  View all results →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* FEATURED BLOGS Cards */}
        <FeatureSec />

        {/* LATEST BLOGS */}
        <LatestBlog />

        {/* CATEGORIES */}
        <Categories />
      </div>
      {/* CALL TO ACTION */}
      <div className="py-12">
        <div
          className="p-20 text-center mb-4 bg-cover bg-center "
          style={{
            backgroundImage:
              "url(/assets/images/home-images/stay-connected.jpg)",
          }}
        >
          <div className="bg-amber-50/40 p-10 rounded-3xl max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--headingColor)" }}
            >
              Stay Connected With Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-lg text-[var(--navFColor)] mb-8"
            >
              Join our community and never miss an update. Explore stories,
              guides, and inspiration crafted just for you.
            </motion.p>

            <Link href="/blogs">
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-8 py-3 rounded-full font-semibold transition"
                style={{
                  backgroundColor: "var(--eBoxColor)",
                  color: "#fff",
                }}
              >
                Explore Blogs
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <CTASection />
      <PostThoughtSection />
    </div>
  );
}
