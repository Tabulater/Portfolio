'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer at Tech Corp",
    content: "An exceptional talent with great problem-solving skills and attention to detail.",
    image: "/testimonials/john.jpg"
  },
  {
    name: "Jane Smith",
    role: "Project Manager at Innovation Labs",
    content: "A pleasure to work with. Delivers high-quality work consistently.",
    image: "/testimonials/jane.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Technical Lead at Future Systems",
    content: "Shows great potential and initiative. A valuable team member.",
    image: "/testimonials/mike.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <h2 className="heading-2 text-center mb-12">What People Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            className="bg-primary/30 p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary/10 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold text-secondary">{testimonials[currentIndex].name}</h3>
                <p className="text-textSecondary">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <p className="text-lg text-textSecondary italic">"{testimonials[currentIndex].content}"</p>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-3 h-3 rounded-full bg-secondary/30 hover:bg-secondary transition-colors"
            />
            <button
              onClick={nextTestimonial}
              className="w-3 h-3 rounded-full bg-secondary/30 hover:bg-secondary transition-colors"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 