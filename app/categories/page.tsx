// app/categories/page.tsx
import { fetchCategories } from "@/lib/api";
import Link from "next/link";

export default async function CategoriesPage() {
  // Fetch categories from Sanity
  const categories = await fetchCategories();

  if (!categories || categories.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">No Categories Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category._id} href={`/categories/${category.slug}`}>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
              {category.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
