"use client";

import { useEffect, useState } from "react";
import { fetchRandomCategories } from "@/lib/api";
import { Category } from "@/types/blog";
import Link from "next/link";

export default function RandomCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchAndSetCategories = async () => {
    try {
      const randomCategories = await fetchRandomCategories(3); // Fetch 3 random categories
      console.log("Fetched categories:", randomCategories); // Log fetched categories
      setCategories(randomCategories);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    fetchAndSetCategories();

    const interval = setInterval(() => {
      fetchAndSetCategories();
    }, 180000); // Revalidate every 3 minutes

    return () => clearInterval(interval);
  }, []);

  if (categories.length === 0) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        console.log("Category mainImage URL:", category.mainImage?.asset?.url); // Log the image URL for debugging
        return (
          <Link href={`/categories/${category.slug.current}`} key={category._id}>
            <div
              className="relative h-72 bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
              style={{
                backgroundImage: `url(${category.mainImage?.asset?.url || "/default-image.jpg"})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-4 text-white z-10">
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
