"use client"
import React from 'react'
import BlogCard from "../BlogCard";
import blogs from "../../data/blog";
import { motion } from 'framer-motion';

const LatestBlog = () => {
    const latestBlogs = blogs.slice(0, 4);
  return (
    <div>
      <motion.section
      initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }} 
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
      className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--navFColor)] mb-6">
            Latest Blogs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </motion.section>
    </div>
  )
}

export default LatestBlog
