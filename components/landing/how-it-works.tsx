"use client";

import { motion } from "framer-motion";
import { Search, Calendar, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Doctor",
    description: "Search by specialty, location, or symptoms. Filter by availability, ratings, and fees.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Select available time slots and book instantly. Get confirmation in seconds.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: MessageSquare,
    title: "Get Consultation",
    description: "Visit the doctor or consult via video call. Receive digital prescriptions.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Follow Up",
    description: "Track your health, access records, and book follow-up appointments easily.",
    color: "from-orange-500 to-red-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
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
            How <span className="text-primary">MediSlot</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting healthcare has never been easier. Just 4 simple steps to better health.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-24 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-primary/20 -translate-x-1/2" />
                )}

                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Step number with icon */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </motion.div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
