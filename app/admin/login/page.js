"use client";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake auth (frontend only)
    localStorage.setItem("adminAuth", "true");
    localStorage.setItem("role", "admin"); // admin / editor

    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--primary)]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        <input className="w-full p-3 mb-4 border rounded-xl" placeholder="Email" />
        <input className="w-full p-3 mb-6 border rounded-xl" placeholder="Password" type="password" />

        <button className="w-full py-3 rounded-xl bg-[var(--eBoxColor)] text-white">
          Login
        </button>
      </form>
    </div>
  );
}
