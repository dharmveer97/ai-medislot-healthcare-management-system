"use client";

import Link from "next/link";
import { Footer } from "@/components/landing/footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">MediSlot</Link>
            <Link href="/" className="hover:underline">Back to Home</Link>
          </div>
        </div>
      </header>

      <div className="container px-4 mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Health Blog</h1>
        <p className="text-xl text-muted-foreground">Coming soon! Health tips, wellness guides, and medical insights.</p>
      </div>

      <Footer />
    </div>
  );
}
