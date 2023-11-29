import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Andy&apos;s Blog Page! The bloggiest on the internet!</h1>
      <h2>Ranking every Everton football shirt sponsor over the years</h2>
      <p>
        Everton first introduced sponsors on to the front of their shirts from
        the 1979/80 season, and have had 9 main sponsors since then. I will
        start with my least favourite and work back up to the good stuff, with a
        few examples of the shirts thrown in for good measure.
      </p>
      <Link href="/blog">
        <div className="bg-white text-black text-xl px-4 py-2 mx-5 rounded-md cursor-pointer">
          Blogs
        </div>
      </Link>
    </main>
  );
}
