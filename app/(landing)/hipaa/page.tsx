"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { Footer } from "@/components/landing/footer";

export default function HipaaPage() {
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
        <div className="flex items-center gap-4 mb-8">
          <Shield className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">HIPAA Compliance</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: November 2025</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Commitment to Privacy</h2>
          <p className="text-muted-foreground">MediSlot is committed to protecting the privacy and security of your health information in compliance with healthcare privacy regulations.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Protection</h2>
          <p className="text-muted-foreground">We implement administrative, physical, and technical safeguards to protect your health information.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
          <p className="text-muted-foreground">You have the right to access, correct, and request deletion of your health information.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground">For questions about our privacy practices, contact us at privacy@medislot.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
