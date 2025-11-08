"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Filter, Star } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/landing/footer";

const doctors = [
  {
    id: 1,
    name: "Dr. Harpreet Singh",
    specialty: "Cardiologist",
    experience: 15,
    rating: 4.8,
    reviews: 234,
    fee: 800,
    location: "Model Town, Jalandhar",
    image: "👨‍⚕️",
    available: "Today",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    experience: 10,
    rating: 4.9,
    reviews: 189,
    fee: 700,
    location: "Civil Lines, Jalandhar",
    image: "👩‍⚕️",
    available: "Tomorrow",
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    specialty: "Pediatrician",
    experience: 12,
    rating: 4.7,
    reviews: 156,
    fee: 600,
    location: "Ladowali Road, Jalandhar",
    image: "👨‍⚕️",
    available: "Today",
  },
  {
    id: 4,
    name: "Dr. Simran Kaur",
    specialty: "Gynecologist",
    experience: 8,
    rating: 4.9,
    reviews: 201,
    fee: 750,
    location: "Urban Estate, Jalandhar",
    image: "👩‍⚕️",
    available: "Today",
  },
  {
    id: 5,
    name: "Dr. Amarjit Gill",
    specialty: "Orthopedic",
    experience: 20,
    rating: 4.8,
    reviews: 312,
    fee: 900,
    location: "Phagwara Road, Jalandhar",
    image: "👨‍⚕️",
    available: "This Week",
  },
  {
    id: 6,
    name: "Dr. Neha Verma",
    specialty: "Dentist",
    experience: 6,
    rating: 4.6,
    reviews: 98,
    fee: 500,
    location: "Rama Mandi, Jalandhar",
    image: "👩‍⚕️",
    available: "Tomorrow",
  },
];

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="text-2xl font-bold">
              MediSlot
            </Link>
            <div className="flex gap-4">
              <Link href="/chat" className="hover:underline">
                AI Assistant
              </Link>
              <Link href="/emergency" className="hover:underline">
                Emergency
              </Link>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search doctors, specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Jalandhar"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                />
              </div>

              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="border-b border-border bg-card">
        <div className="container px-4 mx-auto py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground whitespace-nowrap">
              <Filter className="w-4 h-4" />
              All Doctors
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors whitespace-nowrap">
              Available Today
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors whitespace-nowrap">
              Top Rated
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-muted transition-colors whitespace-nowrap">
              Near Me
            </button>
          </div>
        </div>
      </div>

      {/* Doctor cards */}
      <div className="container px-4 mx-auto py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {doctors.length} Doctors Available in Jalandhar
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{doctor.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {doctor.specialty}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-foreground">
                      {doctor.rating}
                    </span>
                    <span>({doctor.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {doctor.location}
                </div>
                <div className="text-sm text-muted-foreground">
                  {doctor.experience} years experience
                </div>
                <div className="text-lg font-semibold text-foreground">
                  ₹{doctor.fee} consultation fee
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-success font-medium">
                  Available {doctor.available}
                </span>
                <Link
                  href={`/doctors/${doctor.id}`}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
