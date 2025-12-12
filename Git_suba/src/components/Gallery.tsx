'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    {
      src: '/images/gallary/Image (1).jpg',
      alt: 'Scuba diving at Netrani Island',
      category: 'Diving'
    },
    {
      src: '/images/gallary/Image (2).jpg',
      alt: 'Underwater marine life at Netrani',
      category: 'Marine Life'
    },
    {
      src: '/images/gallary/Image (3).jpg',
      alt: 'Crystal clear waters of Netrani Island',
      category: 'Diving'
    },
    {
      src: '/images/gallary/Image (4).jpg',
      alt: 'Professional diving experience',
      category: 'Diving'
    },
    {
      src: '/images/gallary/Image (5).jpg',
      alt: 'Coral reef exploration',
      category: 'Coral Reef'
    },
    {
      src: '/images/gallary/Image (6).jpg',
      alt: 'Netrani Island underwater adventure',
      category: 'Marine Life'
    },
    {
      src: '/images/gallary/Image (7).jpg',
      alt: 'Deep dive Netrani experience',
      category: 'Diving'
    },
    {
      src: '/images/gallary/Image (8).jpg',
      alt: 'Vibrant underwater world',
      category: 'Marine Life'
    },
    {
      src: '/images/gallary/Image (9).jpg',
      alt: 'Netrani Island scuba adventure',
      category: 'Coral Reef'
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1 }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-teal-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
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
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mr-4">
              Underwater
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"> Gallery</span>
            </h2>
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Camera className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Dive into the breathtaking underwater world of Netrani Island. Experience the vibrant marine life, 
            pristine coral reefs, and crystal-clear waters that make this destination truly special.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-80 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {image.category}
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2">{image.alt}</h3>
                  <motion.button
                    className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Size
                  </motion.button>
                </div>
              </div>
              
              {/* 3D Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
