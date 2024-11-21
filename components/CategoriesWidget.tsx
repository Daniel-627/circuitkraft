import { fetchAllCategories } from "@/lib/api";
import { Category } from "@/types/blog";
import Link from "next/link";

function getRandomCategories(categories: Category[], count: number): Category[] {
  const shuffled = categories.sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, count); // Return `count` random categories
}

export default async function CategoriesPage() {
  // Fetch categories from the API
  const categories: Category[] = await fetchAllCategories();

  // Get three random categories
  const randomCategories = getRandomCategories(categories, 3);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      {randomCategories.length === 0 ? (
        <p>No categories available.</p>
      ) : (
        <ul className="space-y-6">
          {randomCategories.map((category) => (
            <li key={category._id}>
              <Link href={`/categories/${category.slug}`}>
                <div
                  className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${category.mainImage?.asset?.url || "/default-image.jpg"})`, // Fallback to a default image if mainImage is not available
                  }}
                >
                  <h2 className="text-xl font-semibold bg-black/50 text-white p-2 rounded-md inline-block">
                    {category.title}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ISR revalidation every 60 seconds
export const revalidate = 60; // Revalidate this page every 60 seconds
