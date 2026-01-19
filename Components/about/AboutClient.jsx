"use client";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "@/Animation/animation";

const AboutClient = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

            {/* HERO SECTION */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                >
                    <h1
                        className="text-4xl md:text-5xl font-extrabold mb-6"
                        style={{
                            fontFamily: "var(--font-heading)",
                            color: "var(--headingColor)",
                        }}
                    >
                        About Our Blog
                    </h1>

                    <p className="text-lg text-[var(--navFColor)] leading-relaxed mb-6">
                        We are a modern blogging platform sharing stories, ideas, and
                        knowledge across lifestyle, technology, health, travel, and
                        education.
                    </p>

                    <p className="text-[var(--navFColor)] leading-relaxed">
                        Our focus is simple — create meaningful content that helps readers
                        learn, grow, and stay inspired in a fast-changing digital world.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl overflow-hidden shadow-lg"
                >
                    <Image
                        src="/assets/images/about-images/1st-image.jpg"
                        alt="About our blog"
                        width={600}
                        height={450}
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </motion.div>

            {/* WHO WE ARE */}
            <motion.div
                className="grid md:grid-cols-2 gap-12 items-center mb-20"
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div variants={fadeLeft} whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }} className="rounded-3xl overflow-hidden shadow-md">
                    <Image
                        src="/assets/images/about-images/about-writing.jpg"
                        alt="Writing blog content"
                        width={600}
                        height={300}
                        className="w-full h-[450px] bg-center bg-cover"
                    />
                </motion.div>

                <div>
                    <h2
                        className="text-3xl font-bold mb-4"
                        style={{ color: "var(--headingColor)" }}
                    >
                        Who We Are
                    </h2>

                    <p className="text-[var(--navFColor)] leading-relaxed mb-4">
                        Our blog is built for readers who love quality content — from helpful
                        guides and tutorials to thoughtful lifestyle articles.
                    </p>

                    <p className="text-[var(--navFColor)] leading-relaxed">
                        We believe good writing should be clear, honest, and valuable. Every
                        article published here is written with care and purpose.
                    </p>
                </div>
            </motion.div>

            {/* AUTHOR SECTION */}
            <motion.div
                className="rounded-3xl p-10 md:p-14 mb-20"
                style={{ backgroundColor: "var(--meltBorwn)" }}
                initial={{ opacity: 0, scale: 0.10 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="grid md:grid-cols-3 gap-10 items-center">
                    <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="md:col-span-1 flex justify-center">
                        <Image
                            src="/assets/images/about-images/author.jpg"
                            alt="Author"
                            width={160}
                            height={160}
                            className="rounded-full shadow-md"
                        />
                    </motion.div>

                    <div className="md:col-span-2 text-center md:text-left">
                        <h3
                            className="text-2xl font-bold mb-2"
                            style={{ color: "var(--headingColor)" }}
                        >
                            About the Author
                        </h3>

                        <p className="text-[var(--navFColor)] leading-relaxed">
                            Hi, I’m the creator behind this blog. I’m passionate about writing,
                            learning new technologies, and sharing experiences that help
                            others grow personally and professionally.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* MISSION */}
            <motion.div
                className="rounded-3xl p-12 text-center"
                style={{ backgroundColor: "var(--purpleColor)" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2
                    className="text-3xl font-bold mb-4"
                    style={{ color: "var(--headingColor)" }}
                >
                    Our Mission
                </h2>

                <p className="max-w-3xl mx-auto text-lg text-[var(--navFColor)] leading-relaxed">
                    To create a trusted space where readers can explore ideas, gain
                    knowledge, and stay inspired through authentic and well-researched
                    blog content.
                </p>
            </motion.div>

            {/* WHAT WE WRITE ABOUT */}
            <div className="mt-24">
                <h2
                    className="text-3xl font-bold text-center mb-10"
                    style={{ color: "var(--headingColor)" }}
                >
                    What We Write About
                </h2>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >
                    {[
                        "Lifestyle",
                        "Technology",
                        "Health",
                        "Travel",
                        "Education",
                        "Photography",
                        "AI",
                        "SEO",
                    ].map((item) => (
                        <motion.div
                            key={item}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.06, y: -6 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-2xl p-6 text-center shadow-sm"
                            style={{ backgroundColor: "var(--meltBorwn)" }}
                        >
                            <h4 className="font-semibold text-lg text-[var(--headingColor)]">
                                {item}
                            </h4>
                            <p className="text-sm mt-2 text-[var(--navFColor)]">
                                Insightful articles & practical guides.
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>


            {/* CALL TO ACTION */}
            <motion.div
                className="mt-24 rounded-3xl p-14 text-center"
                style={{ backgroundColor: "var(--purpleColor)" }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                viewport={{ once: true }}
            >
                <h2
                    className="text-3xl font-bold mb-4"
                    style={{ color: "var(--headingColor)" }}
                >
                    Stay Connected With Us
                </h2>

                <p className="max-w-2xl mx-auto text-lg text-[var(--navFColor)] mb-8">
                    Join our community and never miss an update. Explore stories, guides, and
                    inspiration crafted just for you.
                </p>

                <Link href="/blogs">
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full font-semibold transition"
                        style={{ backgroundColor: "var(--eBoxColor)", color: "#fff" }}
                    >
                        Explore Blogs
                    </motion.button>
                </Link>
            </motion.div>

        </div >
    )
}

export default AboutClient
