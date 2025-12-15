'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
                src="/images/logo.jpg"
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

          {/* Contact Buttons & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Desktop Contact Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <motion.a
                href="tel:6360788946"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
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
                <span>WhatsApp</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-blue-900/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Navigation Links */}
                <motion.a
                  href="#home"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-cyan-400 transition-colors py-2 text-lg font-medium"
                  whileHover={{ x: 10 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-cyan-400 transition-colors py-2 text-lg font-medium"
                  whileHover={{ x: 10 }}
                >
                  About
                </motion.a>
                <motion.a
                  href="#activities"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-cyan-400 transition-colors py-2 text-lg font-medium"
                  whileHover={{ x: 10 }}
                >
                  Activities
                </motion.a>
                <motion.a
                  href="#gallery"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-cyan-400 transition-colors py-2 text-lg font-medium"
                  whileHover={{ x: 10 }}
                >
                  Gallery
                </motion.a>
                <motion.a
                  href="#reviews"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-cyan-400 transition-colors py-2 text-lg font-medium"
                  whileHover={{ x: 10 }}
                >
                  Reviews
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block text-white hover:text-cyan-400 transition-colors py-2 text-lg font-medium"
                  whileHover={{ x: 10 }}
                >
                  Contact
                </motion.a>

                {/* Mobile Contact Buttons */}
                <div className="pt-4 space-y-3">
                  <motion.a
                    href="tel:6360788946"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call: 6360788946</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/916360788946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Now</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
