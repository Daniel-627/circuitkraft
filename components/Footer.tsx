'use client';

import React from 'react';
import RandomCategory3 from '@/components/RandomCategory3';
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#192428] text-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="space-y-4">
          <img src="/logo1.png" alt="Logo" className="h-12" />
          <p className="text-gray-400">
            Your description goes here. Briefly describe your blog or website.
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:contact@colab.co.ke"
              className="text-blue-400 dark:text-green-400"
            >
              contact@colab.co.ke
            </a>
          </p>
          <p>
            Phone:{' '}
            <span className="text-gray-400">+254 743 667 995</span>
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black dark:text-white hover:text-blue-500 dark:hover:text-green-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black dark:text-white hover:text-red-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Second Column - Blog Posts from Random Categories */}
        <div>
          <RandomCategory3 />
        </div>

        {/* Third Column - Subscription Input */}
        <div>
          <h3 className="font-bold text-lg mb-2">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 dark:bg-green-600 hover:bg-blue-700 dark:hover:bg-green-700 text-white p-2 rounded transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Colab Studios. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
