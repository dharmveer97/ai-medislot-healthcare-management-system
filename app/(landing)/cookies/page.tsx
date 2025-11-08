"use client";

import Link from "next/link";
import { Footer } from "@/components/landing/footer";

export default function CookiesPage() {
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

      <div className="container px-4 mx-auto py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: November 2025</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Are Cookies</h2>
          <p className="text-muted-foreground">Cookies are small pieces of text sent to your browser by a website you visit.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Cookies</h2>
          <p className="text-muted-foreground">We use cookies to improve user experience, remember your preferences, and analyze website traffic.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground">You can control and/or delete cookies as you wish through your browser settings.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
