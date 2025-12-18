'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { 
  Fish
} from 'lucide-react';

const Activities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packageFeatures = [
    {
      category: "Transportation",
      items: [
        { name: "Boat Ride", icon: "🚤", description: "Comfortable ride to diving spots" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Water Activities", 
      items: [
        { name: "Snorkeling - Unlimited", icon: "🤿", description: "Explore as much as you want" },
        { name: "Underwater Photography", icon: "📸", description: "Complimentary professional shots" }
      ],
      gradient: "from-teal-500 to-blue-500"
    },
    {
      category: "Refreshments",
      items: [
        { name: "Fruits and Snacks", icon: "🍎", description: "Fresh treats during your trip" }
      ],
      gradient: "from-green-500 to-teal-500"
    },
    {
      category: "Professional Service",
      items: [
        { name: "One to one Dive master", icon: "👨‍🏫", description: "Personal guidance & safety" },
        { name: "Scuba Equipment", icon: "⚙️", description: "All professional gear provided" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "Comfort Facilities",
      items: [
        { name: "Washroom on board", icon: "🚿", description: "Clean facilities available" },
        { name: "Changing room", icon: "👕", description: "Private changing areas" }
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "Complete Service",
      items: [
        { name: "End-to-end assistance", icon: "🤝", description: "From office to boat landing" }
      ],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0
    }
  };

  return (
    <section id="activities" className="py-12 bg-gradient-to-b from-blue-800 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Complete
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"> Package</span>
          </h2>
        </motion.div>

        {/* Hero Package Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Complete Scuba Diving Package"
                fill
                className="object-cover opacity-20"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-teal-900/50" />
            </div>

            <div className="relative z-10 p-12 text-center">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Fish className="w-10 h-10 text-white" />
              </motion.div>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Everything you need for the ultimate underwater adventure at Netrani Island. 
                From professional equipment to comfort facilities - we&apos;ve got you covered!
              </p>
              
              <p className="text-lg text-cyan-300 font-medium mt-4">
                Below are the things involved in your scuba package:
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {packageFeatures.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-full hover:border-white/20 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                {/* Category Header */}
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                </div>

                {/* Feature Items */}
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <h5 className="text-white font-medium text-sm">{item.name}</h5>
                          <p className="text-blue-200 text-xs mt-1">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
