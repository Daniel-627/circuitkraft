import { fetchAllPosts } from "@/lib/api";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/blog";
import Link from "next/link";

export default async function BlogPage() {
  const posts: Post[] = await fetchAllPosts();

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-[#192428] text-black dark:text-white">
      {posts.length === 0 ? (
        <p className="text-center">No blog posts available.</p>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="group block rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow break-inside-avoid"
            >
              {/* Blog Image */}
              {post.mainImage && urlFor(post.mainImage).url() && (
                <div
                  className="w-full bg-cover bg-center aspect-[3/4]"
                  style={{
                    backgroundImage: `url(${urlFor(post.mainImage).url()})`,
                  }}
                />
              )}

              {/* Blog Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-green-500 transition-colors">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  {post.description || "No description available"}
                </p>

                {/* Metadata */}
                <div className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                  {post.latestCategories && post.latestCategories.length > 0 ? (
                    <ul className="mb-2 flex flex-wrap gap-2">
                      {post.latestCategories.map((category, index) => (
                        <li
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {category.slug?.current ? (
                            <Link
                              href={`/categories/${category.slug.current}`}
                              className="hover:underline"
                            >
                              {category.title}
                            </Link>
                          ) : (
                            <span>{category.title}</span>
                          )}
                        </li>
                      ))}

                    </ul>
                  ) : (
                    <p>Uncategorized</p>
                  )}

                  <div className="flex flex-col sm:flex-row justify-between">
                    {post.authorSlug ? (
                      <Link
                        href={`/authors/${post.authorSlug}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {post.author || "Unknown"}
                      </Link>
                    ) : (
                      <p>{post.author || "Unknown"}</p>
                    )}
                    <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;
