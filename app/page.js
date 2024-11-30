import Link from "next/link";
import posts from './data/posts.json';

export default function Home() {
  // Get the latest 2 posts for the featured section
  const featuredPosts = posts.posts.slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
          Welcome to Next.js Example
        </h1>
        <p className="mb-12 text-center text-lg text-gray-600">
          A modern web application built with Next.js and Tailwind CSS
        </p>

        {/* Featured Posts */}
        <div className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Featured Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                  <p className="mb-4 text-gray-600">{post.content.substring(0, 100)}...</p>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View All Posts
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
