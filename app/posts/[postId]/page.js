import Link from "next/link";

async function getPost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 120 } }
  );
  return response.json();
}

async function getComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    { next: { revalidate: 120 } }
  );
  return response.json();
}

export default async function PostDetails({ params }) {
  const post = await getPost(params.postId);
  const comments = await getComments(params.postId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Back button */}
        <Link
          href="/posts"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Posts
        </Link>

        {/* Post content */}
        <article className="mb-12 animate-fade-in rounded-lg border bg-white p-8 shadow-sm">
          <div className="mb-6">
            <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
              Post #{post.id}
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold capitalize text-gray-900">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600">{post.body}</p>
        </article>

        {/* Comments section */}
        <section className="animate-fade-in">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Comments ({comments.length})
          </h2>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    {comment.email.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {comment.name}
                    </h3>
                    <p className="text-sm text-gray-600">{comment.email}</p>
                  </div>
                </div>
                <p className="text-gray-600">{comment.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
