import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const categories = [
    "Web Development",
    "SEO",
    "AI",
    "Health",
    "Lifestyle",
    "Photography",
    "Education",
    "Fitness",
  ];

  return (
    <footer className='bg-[var(--navFColor)] py-8'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10'>

        {/* About Blog */}
        <div>
          <h2 className='text-lg font-bold mb-4 text-white'>
            About This Blog
          </h2>
          <p className='text-gray-300 text-sm leading-relaxed md:text-base max-w-sm'>
            Sharing insightful articles on Web Development, AI, SEO, and more. Learn tips, tutorials, and guides to boost your knowledge and skills.
          </p>
          <ul className='flex space-x-4 mt-6'>
            <li>
              <a href="#" className='flex items-center gap-2 text-gray-300 hover:text-white'>
                <FaFacebookF className='text-blue-600 w-5 h-5' /> Facebook
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2 text-gray-300 hover:text-white'>
                <FaInstagram className='text-pink-500 w-5 h-5' /> Instagram
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2 text-gray-300 hover:text-white'>
                <FaLinkedinIn className='text-blue-500 w-5 h-5' /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h2 className='text-lg font-bold mb-4 text-white'>
            Popular Categories
          </h2>
          <ul className='grid grid-cols-2 gap-y-3'>
            {categories.map((cat) => (
              <li key={cat} className='text-sm'>
                <a
                  href={`/category/${cat.toLowerCase().replace(" ", "-")}`}
                  className='hover:underline hover:text-white text-gray-400 uppercase block'
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className='text-lg font-bold mb-4 text-white'>
            Contact
          </h2>
          <ul className='text-gray-300 space-y-4'>
            <li className='text-sm flex items-center gap-3'>
              <IoLocationOutline className='font-bold text-lg'/> Karachi, Pakistan
            </li>
            <li className='text-sm flex items-center gap-3'>
              <FiPhone className='font-bold text-lg'/> +92 300 1234567
            </li>
            <li className='text-sm flex items-center gap-3'>
              <MdOutlineEmail className='font-bold text-lg'/> info@myblog.com
            </li>
          </ul>
        </div>

      </div>

      <div className='border-t border-gray-700 text-gray-500 text-center mt-6 pt-4'>
        <p>© 2025 MyBlog. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
