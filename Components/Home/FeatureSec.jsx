import React from "react";
import BlogCard from "../BlogCard";
import blogs from "../../data/blog";
import { motion } from "framer-motion";

const FeatureSec = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured).slice(0, 4);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-[var(--navFColor)] mb-6">Featured Blogs</h2>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }} 
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
      >
        {featuredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} img={blog.img} />
        ))}
      </motion.div>

      <motion.div 
        initial={{opacity: 0, scale:0.5, rotateX: -30, y:80}}
        whileInView={{opacity:1,scale:1, rotateX: 0, y:0}}
        transition={{duration:0.8, delay:0.4, ease:"anticipate"}}
        viewport={{once:true}}
      className="mt-8 text-center">
        <a
          href="/blogs"
          className="inline-block bg-[var(--purpleColor)] text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[var(--eBoxColor)] hover:text-white transition duration-300"
        >
          View All Posts
        </a>
      </motion.div>
    </section>
  );
};

export default FeatureSec;
