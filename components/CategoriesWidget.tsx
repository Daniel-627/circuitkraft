// components/CategoriesWidget.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Category {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
}

export default function CategoriesWidget() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories"); // Replace with your actual API endpoint
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category._id}>
            {category.slug?.current ? (
              <Link href={`/categories/${category.slug.current}`}>
                <a className="text-blue-600 hover:underline">{category.title}</a>
              </Link>
            ) : (
              <span className="text-gray-500">{category.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
