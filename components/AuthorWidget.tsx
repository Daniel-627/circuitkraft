// components/AuthorCard.tsx
"use client";

import { useEffect, useState } from "react";
import { fetchRandomAuthor } from "@/lib/api";

interface Author {
  _id: string;
  name: string;
  image?: { asset: { url: string } };
  bio?: string;
}

export default function AuthorWidget() {
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const getRandomAuthor = async () => {
      try {
        const fetchedAuthor = await fetchRandomAuthor();
        setAuthor(fetchedAuthor);
      } catch (error) {
        console.error("Error fetching random author:", error);
      }
    };

    getRandomAuthor();
  }, []);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-sm">
      {author.image && (
        <img
          src={author.image.asset.url}
          alt={author.name}
          className="w-32 h-32 object-cover rounded-full mx-auto"
        />
      )}
      <h2 className="text-xl font-semibold mt-4 text-center">{author.name}</h2>
      {author.bio && (
        <p className="text-gray-600 mt-2 text-center">{author.bio}</p>
      )}
    </div>
  );
}
