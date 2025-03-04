"use client";

import { useEffect, useState } from "react";
import { fetchAllCategories } from "@/lib/api";
import { Category } from "@/types/blog";
import Link from "next/link";

function getRandomCategories(categories: Category[], count: number): Category[] {
  const shuffled = [...categories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function CategoriesWidget() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allCategories = await fetchAllCategories();
        const randomCategories = getRandomCategories(allCategories, 3);
        setCategories(randomCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="text-gray-600 dark:text-gray-300">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Random Categories</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {categories.map((category) => (
          <li key={category._id}>
            <Link href={`/categories/${category.slug}`}>
              <div
                className="relative h-20 bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 dark:bg-[#192428]"
                style={{
                  backgroundImage: `url(${category.image?.asset?.url || "/default-image.jpg"})`,
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                  <h3 className="text-lg font-semibold text-white dark:text-green-500">{category.title}</h3>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
