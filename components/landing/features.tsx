"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Search,
  MessageSquare,
  FileText,
  Shield,
  Clock,
  MapPin,
  Star,
  Users,
  Heart,
  Smartphone,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Doctor Discovery",
    description: "Find doctors by specialty, location, availability, ratings, and more with advanced filters.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Book appointments in seconds with real-time availability. Get instant confirmation.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: MessageSquare,
    title: "AI Health Assistant",
    description: "Chat with our AI to understand symptoms and get doctor recommendations.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Receive and manage digital prescriptions. Access them anytime, anywhere.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Verified Doctors",
    description: "All doctors are verified with credentials. Your health, our priority.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support. We're here when you need us.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: MapPin,
    title: "Location-Based",
    description: "Find doctors near you with interactive maps and turn-by-turn directions.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description: "Read genuine patient reviews to make informed decisions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Family Management",
    description: "Manage appointments for your entire family from one account.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Heart,
    title: "Health Records",
    description: "Store and access all your medical records securely in one place.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Notifications",
    description: "Get reminders via SMS, email, and push notifications.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Activity,
    title: "Health Tracking",
    description: "Track vitals, medications, and health goals over time.",
    color: "from-emerald-500 to-green-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="text-primary"> Healthcare Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform designed to make healthcare accessible, convenient, and efficient.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
