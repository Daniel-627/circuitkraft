"use client";

import Link from "next/link";
import logo1 from "@/public/logo1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/lib/api";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FaXTwitter, FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [categories, setCategories] = useState<{ title: string; slug: string }[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function getCategories() {
      const fetchedCategories = await fetchCategories(3);
      setCategories(fetchedCategories);
    }
    getCategories();
  }, []);

  const todayDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-900">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <Image
              src={logo1}
              alt="CircuitKraft Logo"
              width={40}
              height={40}
              quality={100}
              placeholder="blur"
              className="rounded"
            />
            <h1 className="text-xl font-bold dark:text-white ml-2">
              CircuitKraft
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/categories/${category.slug}`}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons & Search */}
        <div className="flex items-center space-x-6">
          {/* Search Icon (Visible on all screens) */}
          <button aria-label="Search" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <FaSearch />
          </button>

          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaXTwitter />
          </Link>

          <Link
            href="/cart"
            className="relative text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>

          <span className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">
            {todayDate}
          </span>

          {/* Toggle Menu Button */}
          <button
            className="text-2xl md:hidden text-black dark:text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaX /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-4">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/categories/${category.slug}`}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500"
                onClick={toggleMenu}
              >
                {category.title}
              </Link>
            </li>
          ))}
          {/* Icons in Toggle Menu */}
          <div className="flex items-center justify-between pt-4">
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black dark:text-white hover:text-blue-500"
            >
              <FaXTwitter />
            </Link>

            <Link
              href="/cart"
              className="relative text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <FaShoppingCart />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </Link>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {todayDate}
          </span>
        </ul>
      )}
    </nav>
  );
};

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;

export default Navbar;


