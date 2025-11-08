"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Footer } from "@/components/landing/footer";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["Book appointments", "Access medical records", "AI Health Assistant", "Email notifications"],
  },
  {
    name: "Premium",
    price: "₹99",
    period: "per month",
    features: ["Everything in Free", "Priority booking", "WhatsApp notifications", "Family health tracking", "No platform fees"],
    highlighted: true,
  },
];

export default function PricingPage() {
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

      <div className="container px-4 mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105"
                  : "bg-card border border-border"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}> /{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
