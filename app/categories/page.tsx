// app/categories/page.tsx
import { fetchAllCategories } from "@/lib/api";
import { Category } from "@/types/blog";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories: Category[] = await fetchAllCategories();
 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      {categories.length === 0 ? (
        <p>No categories available.</p>
      ) : (
        <ul className="space-y-6">
          {categories.map((category) => (
            <li key={category._id}>
              <Link href={`/categories/${category.slug}`}>
                <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
