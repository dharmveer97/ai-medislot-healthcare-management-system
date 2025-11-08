"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Patient",
    image: "👨‍💼",
    rating: 5,
    text: "MediSlot made it so easy to book an appointment with a cardiologist. Got a slot the same day!",
  },
  {
    name: "Priya Singh",
    role: "Working Professional",
    image: "👩‍💻",
    rating: 5,
    text: "The AI health assistant is amazing! It helped me understand my symptoms and recommended the right specialist.",
  },
  {
    name: "Amarjit Kaur",
    role: "Homemaker",
    image: "👵",
    rating: 5,
    text: "I can now book appointments for my entire family from one account. Very convenient!",
  },
  {
    name: "Dr. Harpreet Gill",
    role: "General Physician",
    image: "👨‍⚕️",
    rating: 5,
    text: "As a doctor, this platform helps me manage my schedule efficiently. My patients love the convenience.",
  },
  {
    name: "Simran Bhatia",
    role: "Mother of Two",
    image: "👩‍👧‍👦",
    rating: 5,
    text: "The reminder notifications ensure I never miss my kids' pediatrician appointments. Lifesaver!",
  },
  {
    name: "Gurpreet Sandhu",
    role: "Senior Citizen",
    image: "👴",
    rating: 5,
    text: "Digital prescriptions are so helpful. I can access all my medical records anytime.",
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">Patients & Doctors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about their MediSlot experience.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Join thousands of satisfied users
          </p>
          <a
            href="/register"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
