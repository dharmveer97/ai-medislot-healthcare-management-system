"use client";

import { Hero } from "./hero";
import { Features } from "./features";
import { HowItWorks } from "./how-it-works";
import { Testimonials } from "./testimonials";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
