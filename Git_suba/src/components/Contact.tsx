'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock,
  Instagram,
  Facebook
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "6360788946",
      subInfo: "Available 24/7",
      action: "tel:6360788946",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "6360788946",
      subInfo: "Quick Response",
      action: "https://wa.me/916360788946",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "DeepDiveNetrani@gmail.com",
      subInfo: "Quick Email Response",
      action: "mailto:DeepDiveNetrani@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Best Time",
      info: "October - May",
      subInfo: "Booking starts from OCT 1st",
      action: null,
      gradient: "from-orange-400 to-pink-500"
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
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
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
            Get In
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to dive into your next adventure? Contact us to book your Netrani Island experience or ask any questions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards - Left Side (2/3 width) */}
            <div className="lg:col-span-2">
              {/* First Row - Call Us and WhatsApp */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {contactInfo.slice(0, 2).map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.div
                      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => contact.action && window.open(contact.action, '_blank')}
                      style={{ cursor: contact.action ? 'pointer' : 'default' }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-r ${contact.gradient} p-3 rounded-full`}>
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg">{contact.title}</h4>
                          {contact.title === "Call Us" ? (
                            <div className="text-cyan-300 font-medium">
                              <div>6360788946</div>
                              <div>7353714313</div>
                            </div>
                          ) : (
                            <p className="text-cyan-300 font-medium">{contact.info}</p>
                          )}
                          <p className="text-blue-200 text-sm">{contact.subInfo}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Second Row - Location and Best Time */}
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.slice(2).map((contact, index) => (
                  <motion.div
                    key={index + 2}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.div
                      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => contact.action && window.open(contact.action, '_blank')}
                      style={{ cursor: contact.action ? 'pointer' : 'default' }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-r ${contact.gradient} p-3 rounded-full`}>
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg">{contact.title}</h4>
                          {contact.title === "Call Us" ? (
                            <div className="text-cyan-300 font-medium">
                              <div>6360788946</div>
                              <div>7353714313</div>
                            </div>
                          ) : (
                            <p className="text-cyan-300 font-medium">{contact.info}</p>
                          )}
                          <p className="text-blue-200 text-sm">{contact.subInfo}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Our Services Section - Right Side (1/3 width) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Our Other Services</h3>
                <p className="text-cyan-300 font-medium mb-4 text-sm">
                  Deep Dive Netrani Offers Complete Package For Tourists.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-blue-100 text-sm">Rooms & Lodging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-blue-100 text-sm">Homestay Accommodation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-blue-100 text-sm">Cab Services</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Review Section */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold text-xl mb-3">Love Your Diving Experience?</h4>
              <p className="text-blue-200 mb-4">Help other ocean explorers discover the magic of Netrani Island!</p>
              <motion.a
                href="#" // Replace with your actual Google review link once GMB is set up
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>⭐</span>
                <span>Leave a Google Review</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="text-center">
            <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              {[
                { icon: Instagram, url: "#", color: "from-pink-500 to-purple-500" },
                { icon: Facebook, url: "#", color: "from-blue-500 to-blue-600" },
                { icon: Mail, url: "mailto:DeepDiveNetrani@gmail.com", color: "from-red-500 to-red-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${social.color} p-3 rounded-full hover:scale-110 transition-transform duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-blue-200">
            © 2025 Netrani Scuba Adventures. All rights reserved.
          </p>
          <p className="text-blue-300 text-sm mt-2">
            Experience the magic of underwater world at Karnataka&apos;s premier diving destination.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
