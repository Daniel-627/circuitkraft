// app/categories/page.tsx
import { fetchCategories } from "@/lib/api";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await fetchCategories();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category._id} href={`/category/${category.slug}`}>
            {/* No need for the <a> tag */}
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
              {category.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
