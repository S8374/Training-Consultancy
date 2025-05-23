import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaPlay, FaEnvelope, FaPhoneAlt, FaUser, FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { SiNetflix, SiSpotify, SiAmazon, SiPaypal, SiAdobe } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import ScrollToTop from "../Scroll/ScrollTop";
import Marquee from 'react-fast-marquee';
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const cardHover = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

export default function AboutUs() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Helmet>
        <title>About Us - Our Story & Services</title>
        <meta
          name="description"
          content="Discover our company's mission, meet our team, and learn about our professional services designed to help your business succeed."
        />
        <meta name="keywords" content="About us, company, team, services, business" />
        <meta name="author" content="Your Company Name" />
      </Helmet>

      <ScrollToTop />

      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 flex items-center justify-center">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-wide">
              About <span className="text-blue-500">Us</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover who we are, what we do, and how we can help your next big idea succeed.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-500 transition-all"
            >
              Start Project
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Contact Section */}
      <ContactSection />

      {/* Team Section */}
      <TeamSection />

      {/* Request Section */}
      <RequestSection />
    </div>
  );
}

// Contact Section Component
function ContactSection() {
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

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 md:px-10"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold uppercase tracking-wide text-blue-600">
          Get in Touch
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-300 mt-2">
          We'd love to hear from you!
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={cardHover}
            className={`p-8 rounded-xl shadow-lg ${method.bg} dark:text-white transition-all duration-300`}
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
    </motion.section>
  );
}

// Team Section Component
function TeamSection() {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Jane Smith",
      position: "Head of Innovation",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Alex Johnson",
      position: "Finance Manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Emily Davis",
      position: "Marketing Specialist",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Chris Lee",
      position: "Customer Relations",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 md:px-10 bg-gray-50 dark:bg-gray-800"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold uppercase tracking-wide text-blue-600">
          Our Team
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mt-2">
          Meet the exceptional individuals driving our success
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={cardHover}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

// Request Section Component
function RequestSection() {
  const socialLinks = [
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaInstagram />, url: "#" }
  ];

  const brands = [
    { icon: <SiNetflix />, color: "text-red-500" },
    { icon: <SiSpotify />, color: "text-green-500" },
    { icon: <SiAmazon />, color: "text-yellow-500" },
    { icon: <SiPaypal />, color: "text-blue-400" },
    { icon: <SiAdobe />, color: "text-red-400" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 md:px-10 text-black dark:text-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12"
        >
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug ">
              Want to Know More? Send Us Your
              <br className="hidden md:block" /> 
              <span className="text-blue-400">Details</span>
            </h2>
            <p className="mt-6 text-lg ">
              Our team will get back to you promptly with all the information you need to make an informed decision about our services.
            </p>
            
            <div className="mt-8 flex items-center">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/" 
                aria-label="Play Video" 
                className="mr-4"
              >
                <div className="flex items-center justify-center w-14 h-14 text-white transition-all duration-300 transform rounded-full shadow-lg bg-blue-600 hover:bg-blue-700">
                  <FaPlay className="w-5 h-5 ml-1" />
                </div>
              </motion.a>
              <div>
                <div className="text-sm font-semibold ">Watch our introduction</div>
                <div className="text-xs ">2:45 min</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 p-8 bg-gray-700 border border-gray-600 rounded-xl shadow-xl"
          >
            <div className="mb-6 text-2xl font-semibold text-center text-white">Request a Call Back</div>
            <form className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 focus:outline-none transition"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaPhoneAlt className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full pl-10 pr-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 focus:outline-none transition"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 focus:outline-none transition"
                />
              </div>
              
              <textarea
                placeholder="Your Message"
                className="w-full h-32 px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 focus:outline-none transition"
              ></textarea>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              >
                <FiSend className="mr-2" /> Submit Request
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Brands */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
             <Marquee 
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="py-4"
        >
          <div className="flex items-center justify-center space-x-16 animate-marquee">
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                className={`text-4xl ${brand.color} hover:opacity-100 opacity-80 transition-opacity`}
              >
                {brand.icon}
              </motion.div>
            ))}
          </div>
          </Marquee>
        </motion.div>
      </div>
    </motion.section>
  );
}