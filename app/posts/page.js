"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AddPost from "../components/AddPost";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>
                <div className="mb-4 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                </div>
                <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
          <AddPost onAdd={handleAddPost} />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <h2 className="mb-2 text-xl font-semibold text-gray-900 line-clamp-2">{post.title}</h2>
                <p className="mb-4 text-gray-600 line-clamp-3">{post.body}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Post #{post.id}</span>
                  <span className="text-sm text-blue-600">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
