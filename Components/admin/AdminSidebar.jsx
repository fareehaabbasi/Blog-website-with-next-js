"use client";
import Link from "next/link";

export default function AdminSidebar({ close }) {
  return (
    <aside className="h-full min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>

      <ul className="space-y-3">
        <li><Link href="/admin" onClick={close}>Dashboard</Link></li>
        <li><Link href="/admin/blogs" onClick={close}>Blogs</Link></li>
        <li><Link href="/admin/category" onClick={close}>Categories</Link></li>
        <li><Link href="/admin/guest-posts" onClick={close}>Guest Posts</Link></li>
      </ul>
    </aside>
  );
}
