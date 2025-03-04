import { fetchPostsByAuthorSlug } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

interface AuthorPageProps {
  params: {
    author: string;
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { author } = params;

  // Fetch posts by author slug
  const posts: Post[] = await fetchPostsByAuthorSlug(author);

  // Handle case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto p-4 bg-white dark:bg-[#192428] text-black dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">No Posts Found</h1>
        <p className="text-center">There are no posts by this author at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-[#192428] text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts by {author.charAt(0).toUpperCase() + author.slice(1)}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id}>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {post.description || "No description available"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Published on: {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}