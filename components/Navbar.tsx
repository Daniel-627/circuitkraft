'use client'

import Link from "next/link";
import logo1 from "@/public/logo1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/lib/api"; // Adjust the path to your Sanity API functions
import { TbX } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch the latest three categories from Sanity
  useEffect(() => {
    async function getCategories() {
      const fetchedCategories = await fetchCategories(3); // Fetch only the latest 3 categories
      setCategories(fetchedCategories);
    }
    getCategories();
  }, []);

  // Get today's date in a readable format
  const todayDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo, Title, and Categories */}
        <div className="flex items-center space-x-8">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo1}
              alt="CircuitKraft Logo"
              width={40}
              height={40}
              quality={100}
              placeholder="blur"
              className="rounded"
            />
            <h1 className="text-xl font-bold">CircuitKraft</h1>
          </Link>

          {/* Categories */}
          <ul className="flex space-x-4">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/categories/${category}`}
                  className="text-sm font-medium text-gray-700 hover:text-blue-500"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: X, Shopping Cart, and Date */}
        <div className="flex items-center space-x-6">
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black hover:text-blue-500"
          >
            <TbX />
          </Link>
          <Link
            href="/cart"
            className="relative text-2xl text-gray-700 hover:text-blue-500"
          >
            <FaShoppingCart />
            {/* Example badge for cart items */}
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>
          <span className="text-sm text-gray-500">{todayDate}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

