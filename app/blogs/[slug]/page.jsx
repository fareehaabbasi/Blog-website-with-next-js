import blogsDets from "@/data/blogsDets";
import Image from "next/image";
import Link from "next/link"; // ✅ Link import kiya
import { FaFacebook, FaTwitter, FaLinkedin, FaArrowLeft } from "react-icons/fa"; // Arrow icon add

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const blog = blogsDets.find(b => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.img],
    },
  };
};

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogsDets.find(b => b.slug === slug);

  if (!blog) {
    return (
      <p className="text-center py-20 text-xl">
        Blog not found
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/blogs" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--purpleColor)] text-white font-semibold hover:bg-[var(--eBoxColor)] hover:text-white transition">
          <FaArrowLeft /> Back to Blogs
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-3 text-center">{blog.title}</h1>
      <div className="w-[500px] h-1 bg-[var(--eBoxColor)] mt-3 mx-auto rounded-full mb-5"></div>

      <p className="text-sm text-gray-500 mb-3">
        Published on {blog.date}
      </p>

      <Image
        src={blog.img}
        alt={blog.title}
        width={800}
        height={450}
        className="rounded-xl mb-8"
      />

      {/* Author */}
      <div className="flex items-center gap-4 mb-8 bg-[var(--meltBorwn)] p-4 rounded-lg shadow-md">
        <div>
          <p className="font-semibold">{blog.author.name}</p>
          <p className="text-sm text-gray-500">{blog.author.bio}</p>
        </div>
      </div>

      {/* Content */}
      <div
        className="prose max-w-none mb-10 shadow-lg p-6 rounded-lg"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Tags */}
      <div className="flex gap-3 flex-wrap mb-10 text-center justify-center">
        {blog.tags.map(tag => (
          <span
            key={tag}
            className="px-4 py-1 rounded-full bg-gray-200"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Social */}
      <div className="flex gap-4 text-xl justify-center">
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
}
