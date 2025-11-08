"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Ambulance, Heart, Activity } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/landing/footer";

const emergencyServices = [
  {
    name: "24/7 Emergency Hospital",
    type: "Hospital",
    phone: "+91 181 2222222",
    address: "GT Road, Jalandhar",
    distance: "2.3 km",
    icon: Heart,
  },
  {
    name: "Ambulance Service",
    type: "Ambulance",
    phone: "102",
    address: "Available 24/7",
    distance: "On Call",
    icon: Ambulance,
  },
  {
    name: "Urgent Care Center",
    type: "Clinic",
    phone: "+91 181 3333333",
    address: "Model Town, Jalandhar",
    distance: "3.5 km",
    icon: Activity,
  },
];

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-destructive text-destructive-foreground py-6">
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
      <div className="bg-destructive/10 py-12">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Emergency Services Directory
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick access to emergency healthcare services in Jalandhar
            </p>
          </motion.div>
        </div>
      </div>

      {/* Emergency number */}
      <div className="container px-4 mx-auto -mt-6 mb-12">
        <motion.a
          href="tel:102"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="block bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-2xl p-8 shadow-2xl transition-all hover:scale-105"
        >
          <div className="flex items-center justify-center gap-4">
            <Phone className="w-12 h-12" />
            <div className="text-left">
              <div className="text-lg opacity-90">Emergency Ambulance</div>
              <div className="text-4xl font-bold">102</div>
            </div>
          </div>
        </motion.a>
      </div>

      {/* Services */}
      <div className="container px-4 mx-auto py-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Emergency Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.type}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${service.phone}`}
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    {service.phone}
                  </a>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {service.address}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-success">
                    <Clock className="w-4 h-4" />
                    {service.distance}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
