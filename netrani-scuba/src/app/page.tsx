'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import Activities from '@/components/Activities';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Gallery />
      <Reviews />
      <Contact />
      
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {/* Sliding Popup Tooltip */}
        <motion.div
          className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white rounded-lg shadow-xl border border-gray-100 p-3 min-w-[180px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out transform translate-x-5 scale-95 opacity-0"
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
              H
            </div>
            <div>
              <div className="text-xs font-semibold text-green-700">Contact Us</div>
              <div className="text-xs text-green-600 font-medium">6360788946</div>
              <div className="text-xs text-gray-500">Available on WhatsApp</div>
            </div>
          </div>
          {/* Arrow pointing to button */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
        </motion.div>
        
        <motion.a
          href="https://wa.me/916360788946"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-8 h-8 text-white relative z-10" />
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </motion.div>
    </div>
  );
}
