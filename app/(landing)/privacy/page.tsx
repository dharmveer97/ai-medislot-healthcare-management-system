"use client";

import Link from "next/link";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: November 2025</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground">We collect information you provide directly to us when creating an account, booking appointments, or using our services.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground">We use your information to provide, maintain, and improve our services, and to communicate with you about appointments and updates.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
          <p className="text-muted-foreground">We implement appropriate security measures to protect your personal information.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground">If you have questions about this Privacy Policy, please contact us at privacy@medislot.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
