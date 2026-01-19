"use client";
import { useState } from "react";
import guestPostsData from "@/data/adminGuestPost";

export default function GuestPostsPage() {
  const [posts, setPosts] = useState(guestPostsData);

  const updateStatus = (id, status) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, status } : post
    ));
  };

  return (
    <div className="p-4 md:p-6 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-6">Guest Posts</h1>

      <table className="min-w-full text-sm border rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-[var(--meltBorwn)] text-left">
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map(post => (
            <tr
              key={post.id}
              className="border-t hover:bg-[var(--primary)] transition"
            >
              <td className="p-3 font-medium">{post.title}</td>
              <td className="p-3">{post.author}</td>

              <td className="p-3 capitalize">
                <span
                  className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${post.status === "pending" && "bg-yellow-100 text-yellow-700"}
                    ${post.status === "approved" && "bg-blue-100 text-blue-700"}
                    ${post.status === "published" && "bg-green-100 text-green-700"}
                    ${post.status === "rejected" && "bg-red-100 text-red-700"}
                  `}
                >
                  {post.status}
                </span>
              </td>

              <td className="p-3">
                <div className="flex flex-wrap gap-2">
                  {post.status === "pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(post.id, "approved")}
                        className="px-3 py-1 text-xs rounded bg-green-500 text-white hover:bg-green-600 transition"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => updateStatus(post.id, "rejected")}
                        className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600 transition"
                      >
                        Reject
                      </button>
                    </>
                  )}

                  {post.status === "approved" && (
                    <button
                      onClick={() => updateStatus(post.id, "published")}
                      className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                    >
                      Publish
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
