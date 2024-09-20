// app/authors/page.tsx
import { blogPosts } from '../../data/blogs';
import Link from 'next/link';

const uniqueAuthors = Array.from(
  new Set(blogPosts.map((post) => post.author.name.toLowerCase()))
);

export default function AuthorsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Authors</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {uniqueAuthors.map((authorName) => {
          const author = blogPosts.find((post) => post.author.name.toLowerCase() === authorName)?.author;

          if (!author) return null;

          return (
            <div key={authorName} className="border rounded-lg p-4">
              <img
                src={author.profileImage || '/default-avatar.png'}
                alt={author.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2 text-center">
                {author.name}
              </h2>
              <p className="text-gray-600 mb-4 text-center">{author.bio}</p>
              <div className="text-center">
                <Link href={`/authors/${authorName}`} className="text-blue-500 hover:underline">
                  View Posts
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
