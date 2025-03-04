// app/authors/page.tsx
import { fetchAllAuthors } from "@/lib/api";
import Link from "next/link";
import { Author } from "@/types/blog";

export default async function AuthorsPage() {
  // Fetch all authors from Sanity
  const authors: Author[] = await fetchAllAuthors();

  return (
    <div className="container mx-auto p-4 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Authors</h1>
      {authors.length === 0 ? (
        <p className="text-center">No authors available.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {authors.map((author) => (
            <li key={author._id} className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg text-center">
              <Link href={`/authors/${author.slug}`} className="text-blue-500 dark:text-green-500 hover:underline">
                {author.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
