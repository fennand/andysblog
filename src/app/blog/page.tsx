import { getPosts } from "@/lib/posts";
import Link from "next/link";
export default function Page() {
  const posts = getPosts();
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-6xl pb-12">My posts: </h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link className="text-4xl" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/">
        <div className="bg-white text-black text-xl px-4 py-2 mt-6 rounded-md cursor-pointer">
          Home
        </div>
      </Link>
    </div>
  );
}
