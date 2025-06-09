'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';
import Projects from '@/components/Projects';
import { useState } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import { contactInfo } from '@/data/contact';
import { MdEmail } from 'react-icons/md';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
} 
