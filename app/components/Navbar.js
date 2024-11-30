"use client";

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();


 

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-primary-600">
            Next.js Blog
          </Link>
          <div className="flex gap-4">
            <Link
              href="/"
              className={`text-sm ${
                pathname === "/"
                  ? "text-primary-600"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/posts"
              className={`text-sm ${
                pathname === "/posts"
                  ? "text-primary-600"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Posts
            </Link>
          </div>
        </div>
   
      </div>
    </nav>
  );
}