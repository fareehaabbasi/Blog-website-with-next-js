"use client";
import { useState } from "react";
import blogsData from "@/data/blog";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState(blogsData);
  const [editBlog, setEditBlog] = useState(null);

  // DELETE
  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  // SAVE EDIT
  const saveEdit = () => {
    setBlogs(
      blogs.map(blog =>
        blog.id === editBlog.id ? editBlog : blog
      )
    );
    setEditBlog(null);
  };

  return (
    <div className="p-4 md:p-6 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-6">Blogs</h1>

      <table className="min-w-full text-sm border rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-[var(--meltBorwn)] text-left">
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map(blog => (
            <tr
              key={blog.id}
              className="border-t hover:bg-[var(--primary)] transition"
            >
              <td className="p-3 font-medium">{blog.title}</td>
              <td className="p-3">{blog.category}</td>

              <td className="p-3">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setEditBlog(blog)}
                    className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT MODAL */}
      {editBlog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Edit Blog</h2>

            <label className="text-sm font-medium">Title</label>
            <input
              className="border p-2 w-full mb-3 rounded"
              value={editBlog.title}
              onChange={(e) =>
                setEditBlog({ ...editBlog, title: e.target.value })
              }
            />

            <label className="text-sm font-medium">Category</label>
            <input
              className="border p-2 w-full mb-4 rounded"
              value={editBlog.category}
              onChange={(e) =>
                setEditBlog({ ...editBlog, category: e.target.value })
              }
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditBlog(null)}
                className="px-4 py-2 border rounded hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-[var(--eBoxColor)] text-white rounded hover:opacity-90 transition"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
