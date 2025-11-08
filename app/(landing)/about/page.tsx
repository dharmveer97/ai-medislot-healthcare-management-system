"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Users, Target, Award } from "lucide-react";
import { Footer } from "@/components/landing/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              MediSlot
            </Link>
            <Link href="/" className="hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About MediSlot
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make quality healthcare accessible to everyone in Jalandhar and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              MediSlot was founded in 2024 with a simple yet powerful vision: to bridge the gap
              between patients and healthcare providers through technology. We recognized that
              booking doctor appointments in Jalandhar was often a frustrating experience, with
              long wait times, busy phone lines, and uncertainty about doctor availability.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Today, MediSlot connects thousands of patients with verified doctors across Jalandhar,
              making healthcare more accessible, transparent, and efficient for everyone.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To make quality healthcare accessible and convenient for every family in Punjab.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become India's most trusted healthcare appointment platform.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary mt-1" />
                <div>
                  <strong className="text-foreground">Patient First:</strong>
                  <span className="text-muted-foreground"> Every decision we make puts patient needs at the center.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-primary mt-1" />
                <div>
                  <strong className="text-foreground">Quality & Trust:</strong>
                  <span className="text-muted-foreground"> We verify every doctor and maintain the highest standards.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-primary mt-1" />
                <div>
                  <strong className="text-foreground">Innovation:</strong>
                  <span className="text-muted-foreground"> We continuously improve our platform with the latest technology.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
