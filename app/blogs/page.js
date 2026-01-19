"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "@/Components/BlogCard";
import staticBlogs from "@/data/blog";
import { motion } from "framer-motion";

const BlogsPage = () => {

  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const guestPosts =
      JSON.parse(localStorage.getItem("guestPosts")) || [];

    const merged = [...guestPosts, ...staticBlogs];

    setAllBlogs(merged);
    setBlogs(merged);
  }, []);

  const categories = ["All", ...new Set(blogs.map(blog => blog.category))];
 // unique categories
  const blogsPerPage = 9; // pagination size

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter blogs by category
  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-[var(--headingColor)] mb-8 text-center md:text-left">
        All Blogs
      </motion.h1>

      {/* Categories Filter */}
      <motion.div
      initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.3, ease:"easeOut"}}
            viewport={{once:true}}
      className="flex flex-wrap gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1); // reset page on category change
            }}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition duration-300
              ${selectedCategory === cat ? "bg-[var(--eBoxColor)] text-white" : "bg-[var(--meltBorwn)] text-[var(--headingColor)] hover:bg-[var(--purpleColor)] hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-4 py-2 bg-[var(--meltBorwn)] rounded-md text-[var(--headingColor)] hover:bg-[var(--purpleColor)] hover:text-white disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-[var(--headingColor)] font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-4 py-2 bg-[var(--meltBorwn)] rounded-md text-[var(--headingColor)] hover:bg-[var(--purpleColor)] hover:text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogsPage;
