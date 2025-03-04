// app/trial/[slug]/page.tsx
import SocialMediaSideBar from "@/components/SocialMediaSideBar";
import { fetchPostBySlug } from "@/lib/api";
import { Post } from "@/types/blog";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { useTheme } from "next-themes";
import AllWidgets from "@/components/AllWidgets";

interface pageProps {
  params: {
    slug: string;
  };
}

export default async function page({ params }: pageProps) {
  const { slug } = params;

  // Fetch the post using the slug
  const post: Post | null = await fetchPostBySlug(slug);

  // If no post is found, return 404
  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-9'>
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">{post.title}</h1>
          
          {/* Published Date */}
          <p className="text-gray-600 dark:text-gray-400">Published on: {new Date(post.publishedAt).toDateString()}</p>
          
          {/* Main Image */}
          {post.mainImage && (
            <img
              src={post.mainImage}
              alt={post.title}
              className="my-4 w-full h-[550px] object-cover rounded-lg"
            />
          )}

          {/* Body Content */}
          <div className="flex flex-row">
            <div className="hidden lg:block">
              <SocialMediaSideBar />
            </div>
            <div className="mt-6 prose max-w-none text-black dark:text-white">
              <PortableText value={post.body} />
            </div>
          </div>
        </div>
        <div className='hidden lg:block lg:col-span-3'>
          <AllWidgets />
        </div>
      </div>
    </div>
  );
}

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;