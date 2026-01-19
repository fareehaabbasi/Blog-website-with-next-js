"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "@/Animation/animation";

export default function WriteForUsPage() {

  const handleSubmit = (e) => {
  e.preventDefault();

  const post = {
    id: Date.now(),
    title,
    content,
    author: name,
    category,
    type: "guest",
  };

  const existing = JSON.parse(localStorage.getItem("guestPosts")) || [];
  localStorage.setItem("guestPosts", JSON.stringify([post, ...existing]));

  alert("Post submitted successfully!");
};

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{ color: "var(--headingColor)", fontFamily: "var(--font-heading)" }}
          >
            Write For Us
          </h1>

          <p className="text-lg text-[var(--navFColor)] leading-relaxed mb-6">
            We welcome passionate writers, bloggers, and marketers to contribute
            high-quality guest posts to our blog.
          </p>

          <p className="text-sm text-[var(--navFColor)]">
            📩 Submit valuable, original, and well-researched content only.
          </p>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/assets/images/write-for-us/hero-img.jpg"
            alt="Write for us"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>

      {/* GUIDELINES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--headingColor)" }}>
          Guest Posting Guidelines
        </h2>

        <ul className="space-y-3 text-[var(--navFColor)] list-disc pl-6">
          <li>Article must be 100% original and plagiarism-free</li>
          <li>Minimum word count: <strong>800+</strong></li>
          <li>Well-structured with headings & paragraphs</li>
          <li>No promotional or spammy content</li>
          <li>Images must be copyright-free</li>
        </ul>
      </motion.section>

      {/* ALLOWED CATEGORIES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-3xl p-10 mb-20"
        style={{ backgroundColor: "var(--meltBorwn)" }}
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--headingColor)" }}>
          Allowed Categories
        </h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Technology","SEO","AI","Health","Fitness","Lifestyle",
            "Travel","Education","Photography","Food",
          ].map((cat) => (
            <motion.span
              key={cat}
              whileHover={{ scale: 1.08 }}
              className="px-5 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--headingColor)",
              }}
            >
              {cat}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* BACKLINK POLICY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--headingColor)" }}>
          Backlink Policy
        </h2>

        <ul className="space-y-3 text-[var(--navFColor)] list-disc pl-6">
          <li>Maximum 1–2 backlinks allowed</li>
          <li>Links must be relevant & high quality</li>
          <li>Do-Follow or No-Follow based on quality</li>
          <li>Spam or illegal links strictly prohibited</li>
        </ul>
      </motion.section>

      {/* PRICING */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-3xl p-10 mb-20"
        style={{ backgroundColor: "var(--purpleColor)" }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--headingColor)" }}>
          Guest Post Pricing
        </h2>

        <ul className="space-y-2 text-[var(--navFColor)] list-disc pl-6">
          <li>Basic Guest Post: <strong>Free</strong></li>
          <li>Do-Follow Guest Post: <strong>Paid</strong></li>
          <li>Homepage Feature: <strong>Premium</strong></li>
        </ul>
      </motion.section>

      {/* SUBMISSION FORM */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "var(--headingColor)" }}
        >
          Submit Your Guest Post
        </h2>

        <form
          className="max-w-4xl mx-auto grid gap-6 p-10 rounded-3xl"
          style={{ backgroundColor: "var(--meltBorwn)" }}
        >
          <input className="p-4 rounded-xl" placeholder="Your Name" />
          <input className="p-4 rounded-xl" placeholder="Email Address" />
          <input className="p-4 rounded-xl" placeholder="Website URL" />
          <input className="p-4 rounded-xl" placeholder="Article Title" />
          <select className="p-4 rounded-xl">
            <option>Select Category</option>
            <option>Technology</option>
            <option>SEO</option>
            <option>AI</option>
          </select>
          <textarea rows="6" className="p-4 rounded-xl resize-none" />
          <button
            className="mt-4 px-8 py-3 rounded-full font-semibold transition hover:scale-105"
            style={{ backgroundColor: "var(--eBoxColor)", color: "#fff" }}
          >
            Submit Article
          </button>
        </form>
      </motion.section>

    </div>
  );
}
