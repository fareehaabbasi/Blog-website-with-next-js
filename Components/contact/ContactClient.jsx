"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "@/Animation/animation";

const ContactClient = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: "var(--headingColor)", fontFamily: "var(--font-heading)" }}
        >
          Contact Us
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-[var(--navFColor)]">
          Have a question, suggestion, or collaboration idea?  
          We’d love to hear from you.
        </p>
      </motion.section>

      {/* MAIN GRID */}
      <section className="grid md:grid-cols-2 gap-14 items-center mb-24">

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--headingColor)" }}
          >
            Let’s Start a Conversation
          </h2>

          <p className="text-[var(--navFColor)] mb-6 leading-relaxed">
            Whether you’re a reader, writer, or brand — feel free to reach out.
            We respond quickly and value meaningful connections.
          </p>

          <div className="space-y-4 text-sm">
            <p><strong>Email:</strong> hello@blogsite.com</p>
            <p><strong>Phone:</strong> +92 300 1234567</p>
            <p><strong>Location:</strong> Karachi, Pakistan</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/assets/images/contact-image/contact-hero.jpg"
            alt="Contact us"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>

      {/* FORM */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-3xl p-10 md:p-14 mb-24"
        style={{ backgroundColor: "var(--meltBorwn)" }}
      >
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "var(--headingColor)" }}
        >
          Send Us a Message
        </h2>

        <form className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <input className="p-4 rounded-xl outline-none" placeholder="Your Name" />
          <input className="p-4 rounded-xl outline-none" placeholder="Your Email" />
          <input className="md:col-span-2 p-4 rounded-xl outline-none" placeholder="Subject" />
          <textarea rows="5" className="md:col-span-2 p-4 rounded-xl outline-none resize-none" placeholder="Your Message" />

          <button
            className="md:col-span-2 mt-4 px-8 py-3 rounded-full font-semibold transition hover:scale-105"
            style={{ backgroundColor: "var(--eBoxColor)", color: "#fff" }}
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center rounded-3xl p-14"
        style={{ backgroundColor: "var(--purpleColor)" }}
      >
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: "var(--headingColor)" }}
        >
          Want to Explore Our Content?
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-[var(--navFColor)]">
          Read insightful articles on technology, lifestyle, health, travel, and more.
        </p>

        <a
          href="/blogs"
          className="inline-block px-8 py-3 rounded-full font-semibold"
          style={{ backgroundColor: "var(--eBoxColor)", color: "#fff" }}
        >
          Explore Blogs
        </a>
      </motion.section>

    </div>
  );
};

export default ContactClient;
