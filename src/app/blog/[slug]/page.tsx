// app/blog/[slug]/page.tsx
import Link from "next/link";
import Comments from "@/components/Comments";
import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

// this builds all the params for ALL blog posts when the website is deployed
export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default function BlogPost({ params }: BlogPostParams) {
  const posts = getPosts();
  const currentIndex = posts.findIndex((post) => post.slug === params.slug);
  const prevPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-6xl pb-6">{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.body.html }}
        className="prose dark:prose-invert blog-post-content"
      ></div>

      {/* Next Post and Previous Post Buttons Side by Side */}
      <div className="flex justify-between w-full mt-4">
        {/* Previous Post Button */}
        {prevPost && (
          <Link href={`/blog/${prevPost.slug}`}>
            <div className="text-blue-500 hover:underline text-4xl">
              ← Previous Post
            </div>
          </Link>
        )}
        {/* Next Post Button */}
        {nextPost && (
          <Link href={`/blog/${nextPost.slug}`}>
            <div className="text-blue-500 hover:underline text-4xl">
              Next Post →
            </div>
          </Link>
        )}
      </div>

      {/* Comments Section */}
      {/* @ts-ignore */}
      <Comments postSlug={params.slug} />
    </div>
  );
}
