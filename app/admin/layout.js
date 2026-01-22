"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/Components/admin/AdminSidebar";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role) router.push("/admin/login");
  }, []);

  return (
    <div className="flex min-h-screen bg-[var(--primary)]">
      
      {/* Sidebar */}
      <div
        className={`
          fixed md:static
          top-0 left-0
          z-40
          w-64
          h-screen md:h-auto
          bg-[var(--meltBorwn)]
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <AdminSidebar close={() => setOpen(false)} />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8">
        
        {/* Mobile Header */}
        <div className="md:hidden flex justify-end items-center mb-4">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="px-3 py-2 rounded bg-[var(--eBoxColor)] text-white"
          >
            ☰
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
