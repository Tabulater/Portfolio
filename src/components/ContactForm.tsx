'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLocationOn, MdPerson, MdSubject } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaWikipediaW } from 'react-icons/fa';
import { contactInfo } from '@/data/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using EmailJS or similar service would be better for production
      // For now, we'll use a mailto link as a fallback
      const mailtoLink = `mailto:tatipamula.aashrithraj@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="heading-2 mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Have a question or want to collaborate? Feel free to reach out! I'm always interested 
            in new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[rgb(var(--primary))] mb-6">
                Let's Connect
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                I'm passionate about mechatronics, robotics, and software development. 
                Whether you have a project idea, want to discuss technology, or just want to say hello, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center">
                  <MdEmail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-text-secondary">tatipamula.aashrithraj@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center">
                  <MdLocationOn className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-text-secondary">London, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <div className="relative">
                  <MdPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-card/50 border border-card/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <div className="relative">
                  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-card/50 border border-card/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <MdSubject className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-card/50 border border-card/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card/50 border border-card/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me more about your project or question..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  There was an error sending your message. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[rgb(var(--primary))] mb-8 text-center">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-4">
              {contactInfo.filter(item => item.iconType !== 'email' && item.iconType !== 'location').map((item) => {
                const getIcon = () => {
                  switch (item.iconType) {
                    case 'linkedin': return <FaLinkedin />;
                    case 'github': return <FaGithub />;
                    case 'appropedia': return <FaWikipediaW />;
                    default: return null;
                  }
                };
                
                return (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-br from-card/60 to-card/40 hover:from-card/80 hover:to-card/60 rounded-full p-4 border border-card/30 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    
                    {/* Icon with sleek styling */}
                    <div className="relative z-10 flex items-center justify-center">
                      <span className="text-xl text-primary group-hover:scale-110 transition-transform duration-300">{getIcon()}</span>
                    </div>
                    
                    {/* Hover border effect */}
                    <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-primary/30 transition-all duration-300"></div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
