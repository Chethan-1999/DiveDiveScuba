'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Check if mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Auto-slide functionality for mobile
  useEffect(() => {
    if (!isMobile || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Slide every 3.5 seconds

    return () => clearInterval(interval);
  }, [isMobile, isAutoPlaying, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
        {isMobile ? (
          /* Mobile Carousel View */
          <div className="relative">
            <div 
              className="overflow-hidden rounded-3xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.645, 0.045, 0.355, 1.000]
                  }}
                  className="relative h-96 w-full"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={currentIndex <= 1}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  >
                    {images[currentIndex].category}
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-6 left-6 right-6 text-white"
                  >
                    <h3 className="text-xl font-bold mb-2 text-shadow">
                      {images[currentIndex].alt}
                    </h3>
                    <p className="text-sm text-blue-100 mb-3">
                      {currentIndex + 1} of {images.length}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-6">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4">
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </motion.button>
            </div>
          </div>
        ) : (
          /* Desktop Grid View */
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
        )}
      </div>
    </section>
  );
};

export default Gallery;
