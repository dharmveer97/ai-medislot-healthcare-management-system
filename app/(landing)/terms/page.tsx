"use client";

import Link from "next/link";
import { Footer } from "@/components/landing/footer";

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: November 2025</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground">By accessing and using MediSlot, you accept and agree to be bound by these Terms of Service.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Use of Service</h2>
          <p className="text-muted-foreground">You agree to use the service only for lawful purposes and in accordance with these Terms.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">User Responsibilities</h2>
          <p className="text-muted-foreground">You are responsible for maintaining the confidentiality of your account and for all activities under your account.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Disclaimer</h2>
          <p className="text-muted-foreground">MediSlot is a platform connecting patients with doctors. We are not responsible for the medical services provided by doctors.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
