export default function LoadingPostDetails() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Skeleton for title */}
        <div className="mb-8 h-8 w-3/4 animate-pulse rounded-lg bg-gray-200"></div>

        {/* Skeleton for date */}
        <div className="mb-6 h-4 w-32 animate-pulse rounded bg-gray-200"></div>

        {/* Skeleton for content paragraphs */}
        <div className="space-y-4">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Loading spinner */}
        <div className="mt-8 flex justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
}