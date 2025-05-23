import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email us",
      description: "Speak to our friendly team",
      detail: "hello@yourcompany.com",
      bg: "bg-blue-100/80 dark:bg-blue-900/20"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit us",
      description: "Visit our office HQ",
      detail: "100 Business Avenue, Suite 200, San Francisco, CA 94107",
      bg: "bg-purple-100/80 dark:bg-purple-900/20"
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm",
      detail: "+1 (555) 123-4567",
      bg: "bg-green-100/80 dark:bg-green-900/20"
    }
  ];

  const socialLinks = [
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaInstagram />, url: "#" }
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* SEO Helmet */}
      <Helmet>
        <title>Contact Us - Premium Services & Support</title>
        <meta
          name="description"
          content="Get in touch with our team for premium services and support. We're here to help you with your projects and business needs."
        />
        <meta name="keywords" content="contact, support, services, business, help" />
        <meta name="author" content="Your Company Name" />
      </Helmet>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0  "></div>
        <img 
          className="object-cover w-full h-64 md:h-96" 
          src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100" 
          alt="Contact us background" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Let's Connect
            </motion.h1>
            <motion.p 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              We're here to help and answer any questions you might have.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-xl shadow-lg ${method.bg} dark:text-white`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{method.description}</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{method.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="lg:flex lg:items-center lg:-mx-6">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 lg:mx-6"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Send us a message</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <FiSend className="mr-2" /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0 lg:w-1/2 lg:mx-6"
          >
            <div className="flex flex-col items-center lg:items-start">
              <motion.div 
                whileHover={{ rotate: 2 }}
                className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl"
              >
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="map"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=San%20Francisco+(Your%20Business)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                  className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </motion.div>

              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, color: "#3B82F6" }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-xl"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Connect with us on social media for updates and news.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

  
    </section>
  );
}