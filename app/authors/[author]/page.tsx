import { fetchPostsByAuthor, fetchAuthors } from "@/lib/api";
import { Author, Post } from "@/types/blog";

interface AuthorPostsPageProps {
  params: {
    slug: string;
  };
}

export default async function AuthorPostsPage({ params }: AuthorPostsPageProps) {
  const authors = await fetchAuthors();
  const author = authors.find((a: Author) => a.slug === params.slug);
  const posts: Post[] = await fetchPostsByAuthor(params.slug);

  if (!author) {
    return <p>Author not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <img
          src={author.image}
          alt={author.name}
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{author.name}</h1>
          <p>{author.bio}</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4">Posts by {author.name}</h2>
      {posts.length === 0 ? (
        <p>No posts found for this author.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id}>
              <a href={`/blog/${post.slug}`} className="text-lg font-semibold hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
