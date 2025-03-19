'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Tabulater',
    icon: FaGithub,
    color: 'hover:text-[#333333]'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aashrith-raj-tatipamula-462335272/?originalSubdomain=ca',
    icon: FaLinkedin,
    color: 'hover:text-[#0077B5]'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/c/ActofKnowledge',
    icon: FaYoutube,
    color: 'hover:text-[#FF0000]'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl text-text-secondary transition-colors ${link.color}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
} 