// app/authors/[author]/page.tsx
import { blogPosts } from '../../../data/blogs';
import { BlogPost } from '../../../types/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface AuthorPageProps {
  params: { author: string };
}

function findPostsByAuthor(authorName: string): {
  author: BlogPost['author'] | undefined;
  posts: BlogPost[];
} {
  const posts = blogPosts.filter(
    (post) => post.author.name.toLowerCase() === authorName.toLowerCase()
  );
  const author = posts.length > 0 ? posts[0].author : undefined;
  return { author, posts };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const { author, posts } = findPostsByAuthor(params.author);

  if (!author) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4 mb-8">
        <img
          src={author.profileImage || '/default-avatar.png'}
          alt={author.name}
          className="w-24 h-24 object-cover rounded-full"
        />
        <div>
          <h1 className="text-4xl font-bold">{author.name}</h1>
          <p className="text-gray-600">{author.bio}</p>
          <div className="mt-4 flex space-x-4">
            {author.socialLinks?.twitter && (
              <a
                href={author.socialLinks.twitter}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            )}
            {author.socialLinks?.linkedin && (
              <a
                href={author.socialLinks.linkedin}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            {author.socialLinks?.github && (
              <a
                href={author.socialLinks.github}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {author.socialLinks?.website && (
              <a
                href={author.socialLinks.website}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">Posts by {author.name}</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">
                {new Date(post.publishedAt).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const authors = Array.from(
    new Set(blogPosts.map((post) => post.author.name.toLowerCase()))
  );

  return authors.map((author) => ({
    author,
  }));
}
