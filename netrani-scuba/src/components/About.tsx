'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, Users, Heart } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Shield, label: 'Years Experience', value: '10+' },
    { icon: Award, label: 'Certified Divers', value: '5000+' },
    { icon: Users, label: 'Expert Instructors', value: '15+' },
    { icon: Heart, label: 'Happy Customers', value: '98%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-12 bg-gradient-to-b from-blue-900 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        
        {/* Floating Marine Life Images */}
        <motion.div
          className="absolute top-1/4 right-20 w-32 h-32 opacity-10"
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Sea turtle"
            fill
            className="object-contain rounded-full"
            sizes="128px"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-20 w-24 h-24 opacity-10"
          animate={{ 
            y: [15, -15, 15],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Tropical fish"
            fill
            className="object-contain rounded-full"
            sizes="96px"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Scuba Diving in 
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"> Murdeshwar</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Discover the underwater wonders with scuba diving in Murdeshwar, a paradise for adventure lovers. 
            Explore vibrant marine life and stunning coral reefs in the crystal-clear Arabian Sea. Perfect for 
            beginners and experts, this thrilling experience promises unforgettable memories. Dive into the 
            beauty of Murdeshwar&apos;s waters and create moments to cherish forever!
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 hover:border-cyan-400/40 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 200, 255, 0.1)"
                }}
              >
                <div className="flex justify-center mb-2">
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2 rounded-full">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-xs">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
