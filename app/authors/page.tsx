import { fetchAuthors } from "@/lib/api";
import Link from "next/link";

export default async function AuthorsPage() {
  const authors = await fetchAuthors();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Authors</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {authors.map((author) => (
          <Link key={author._id} href={`/author/${author.slug}`}>
            <a className="flex flex-col items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
              <img
                src={author.image}
                alt={author.name}
                className="w-20 h-20 rounded-full mb-2"
              />
              <h2 className="text-lg font-semibold">{author.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
