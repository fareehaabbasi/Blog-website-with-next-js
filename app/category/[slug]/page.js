"use client";
import React from "react";
import { useParams } from "next/navigation";
import BlogCard from "@/Components/BlogCard";
import blogs from "@/data/blog";

const CategoryPage = () => {
  const { slug } = useParams();

  const categoryBlogs = blogs.filter(
    blog => blog.categorySlug.toLowerCase() === slug.toLowerCase()
  );

  const categoryName = categoryBlogs[0]?.category || slug;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <h1 className="text-4xl font-extrabold text-[var(--headingColor)] mb-8 text-center md:text-left">
        {categoryName} Blogs
      </h1>

      {categoryBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="text-[var(--headingColor)] text-lg text-center mt-10">
          No blogs found in this category.
        </p>
      )}
    </div>
  );
};

export default CategoryPage;
