'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reviews = [
    {
      name: "Chethan Kumar",
      rating: 5,
      text: "Amazing experience! The water was so clear and the fish were everywhere. Staff was super friendly and made sure we were comfortable. Definitely coming back!",
      location: "Bangalore"
    },
    {
      name: "Bharath M",
      rating: 5,
      text: "First time scuba diving and it was incredible! The instructor was very patient and explained everything properly. Netrani Island is beautiful, worth every penny.",
      location: "Mysore"
    },
    {
      name: "Likith Raj",
      rating: 4,
      text: "Great diving spot! Saw so many colorful fish and corals. Only thing is the boat ride was a bit long but once you're underwater, you forget everything. Highly recommend!",
      location: "Mangalore"
    },
    {
      name: "Rashmi Shetty",
      rating: 5,
      text: "Such a memorable experience with my friends! The team was professional and safety was their priority. The underwater world at Netrani is breathtaking. Must try!",
      location: "Udupi"
    },
    {
      name: "Sanajana Rao",
      rating: 4,
      text: "Lovely experience! The water was crystal clear and we saw some amazing marine life. The photographs they took came out really well. Planning to go again soon!",
      location: "Hassan"
    },
    {
      name: "Pradeep Nair",
      rating: 5,
      text: "Best scuba diving experience ever! The crew was excellent and made us feel safe throughout. Netrani Island's underwater beauty is unmatched. 10/10 would recommend!",
      location: "Kochi"
    }
  ];

  const averageRating = 4.8;
  const totalReviews = 127;

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
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  const renderAverageStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 ${
          index < fullStars
            ? 'text-yellow-400 fill-yellow-400'
            : index === fullStars && hasHalfStar
            ? 'text-yellow-400 fill-yellow-400/50'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity }}
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
            What Our
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"> Divers Say</span>
          </h2>
          
          {/* Average Rating */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex space-x-1">
                {renderAverageStars(averageRating)}
              </div>
              <span className="text-3xl font-bold text-yellow-400">{averageRating}</span>
            </div>
            <p className="text-blue-200">Based on {totalReviews}+ reviews</p>
          </div>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Real experiences from our happy divers who explored the underwater paradise of Netrani Island with us.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300 h-full"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(255, 255, 255, 0.05)"
                }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-3">
                  <Quote className="w-6 h-6 text-cyan-400 opacity-50" />
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-blue-100 leading-relaxed mb-3 italic text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                {/* Reviewer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                    <p className="text-cyan-300 text-xs">{review.location}</p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;