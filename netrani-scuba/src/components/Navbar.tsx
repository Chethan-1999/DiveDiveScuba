'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-40 backdrop-blur-lg bg-blue-900/20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-12 h-12">
              <Image
                src="/images/Image (10).jpg"
                alt="Deep Dive Netrani Logo"
                fill
                className="object-contain rounded-full"
                sizes="48px"
              />
            </div>
            <span className="text-xl font-bold text-white">Deep Dive Netrani</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#activities" className="text-white hover:text-cyan-400 transition-colors">
              Activities
            </a>
            <a href="#gallery" className="text-white hover:text-cyan-400 transition-colors">
              Gallery
            </a>
            <a href="#reviews" className="text-white hover:text-cyan-400 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Contact Buttons */}
          <div className="flex items-center space-x-3">
            <motion.a
              href="tel:6360788946"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </motion.a>
            
            <motion.a
              href="https://wa.me/916360788946"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
