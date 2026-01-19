"use client";

import blogs from "@/data/blog";
import guestPosts from "@/data/adminGuestPost";

export default function AdminDashboard() {
  const totalBlogs = blogs.length;

  const categories = [
    ...new Set(blogs.map(blog => blog.category))
  ];
  const pendingGuestPosts = guestPosts.filter(p => p.status === "pending").length;
  const publishedGuestPosts = guestPosts.filter(p => p.status === "published").length;

  return (
    <div className="p-6 space-y-8">

      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

  <div className="bg-[var(--meltBorwn)] p-4 rounded-xl">
    <p className="text-sm">Total Blogs</p>
    <p className="text-2xl font-bold">{totalBlogs}</p>
  </div>

  <div className="bg-[var(--meltBorwn)] p-4 rounded-xl">
    <p className="text-sm">Total Categories</p>
    <p className="text-2xl font-bold">{categories.length}</p>
  </div>

  <div className="bg-[var(--meltBorwn)] p-4 rounded-xl">
    <p className="text-sm">Pending Guest Posts</p>
    <p className="text-2xl font-bold">{pendingGuestPosts}</p>
  </div>

  <div className="bg-[var(--meltBorwn)] p-4 rounded-xl">
    <p className="text-sm">Published Guest Posts</p>
    <p className="text-2xl font-bold">{publishedGuestPosts}</p>
  </div>

</div>


      {/* Recent Blogs */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Recent Blogs</h2>
        <ul className="space-y-2">
          {blogs.slice(0, 5).map(blog => (
            <li
              key={blog.id}
              className="p-3 bg-white rounded-lg shadow"
            >
              {blog.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full bg-[var(--purpleColor)]"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-[var(--meltBorwn)] p-6 rounded-xl">
      <h3 className="text-sm">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
