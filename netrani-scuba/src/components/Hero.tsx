'use client';

import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-teal-800/60 to-cyan-900/80 z-10" />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-6xl opacity-20 z-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🐠
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-5xl opacity-20 z-10"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        >
          🐢
        </motion.div>
      </div>
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="font-[family-name:var(--font-orbitron)] tracking-wider">Deep Dive</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Netrani
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <span className="text-xl sm:text-2xl text-cyan-300 font-medium">
                Netrani Island, Murudeshwar
              </span>
            </div>

            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the underwater paradise of Karnataka&apos;s premier diving destination. 
              Crystal clear waters, vibrant marine life, and professional guidance await you.
              Everything you need for the ultimate scuba diving experience at Netrani Island for the best pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://wa.me/916360788946?text=Hi! I am interested in scuba diving at Netrani Island"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center space-x-2"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Now</span>
              </a>
              
              <a
                href="tel:6360788946"
                className="border-2 border-white/30 hover:border-cyan-400 text-white hover:text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: 6360788946</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
