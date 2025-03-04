"use client";

import Link from "next/link";
import logo1 from "@/public/logo1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/lib/api";
import { FaShoppingCart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThemeToggle from "@/components/ThemeToggle"; // Assuming your ThemeToggle component is located here
import { useTheme } from "next-themes";

const Navbar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const { theme } = useTheme();

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

  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-8">
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
            <h1 className="text-xl font-bold dark:text-white">CircuitKraft</h1>
          </Link>

          <ul className="flex space-x-4">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/categories/${category}`}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black dark:text-white hover:text-blue-500"
          >
            <FaXTwitter />
          </Link>

          <Link href="/cart" className="relative text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>

          <span className="text-sm text-gray-500 dark:text-gray-400">{todayDate}</span>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
