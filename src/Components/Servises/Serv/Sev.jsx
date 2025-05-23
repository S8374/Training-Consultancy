import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WhyChooseUs from "./Serv1";
import { UseServices } from "../../../Hooks/useServices";
import ScrollToTop from "../../Scroll/ScrollTop";
import { UseAuth } from "../../../Hooks/useAuth";
import { useTheme } from "../../ThemProvider/ThemProvider";
import { FaArrowRight, FaCheckCircle, FaStar, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Serv() {
  const { id } = useParams();
  const { darkMode } = useTheme();
  const { data: services, isLoading, isError, error } = UseServices();
  const { user } = UseAuth();

  // Fallback image if the service does not have an image
  const defaultImage =
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  // Handle loading state with a modern loader
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaRocket className="text-blue-500 animate-pulse" size={20} />
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 max-w-md mx-auto text-center bg-red-100 dark:bg-red-900/30 rounded-xl shadow-lg">
          <div className="text-red-500 dark:text-red-300 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-2">
            Error Loading Services
          </h2>
          <p className="text-red-600 dark:text-red-200">
            {error.message ||
              "Failed to load services. Please try again later."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // If `id` exists, find the specific service
  if (id) {
    const service = services?.find((service) => service._id === id);

    if (!service) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center p-8 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-6xl mb-4 text-gray-400">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Service Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The service you're looking for doesn't exist or may have been
              removed.
            </p>
            <a
              href="/services"
              className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              Browse All Services <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className={darkMode ? "dark" : ""}>
        <ScrollToTop />
        <Helmet>
          <title>{service.title} | Our Premium Services</title>
          <meta
            name="description"
            content={service.description || "Premium service details"}
          />
        </Helmet>

        {/* Hero Section */}
        <header className="relative">
          <div
            className="w-full bg-center bg-cover h-[80vh] relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${
                service.img || defaultImage
              }')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                    <span className="ml-2 text-white text-sm font-medium">
                      Premium Service
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {service.shortDescription ||
                      service.description.substring(0, 150) + "..."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Service Details Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={service.img || defaultImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    Premium Service
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    About Our {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full">
                      <FaCheckCircle className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Trusted by 1000+ clients worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features/Facilities Section */}
        {service.facility && (
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What We Offer
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                  Our comprehensive {service.title} service includes these
                  premium features
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.facility.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
                      <div className="text-blue-600 dark:text-blue-400 text-xl">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {facility.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )} 

        <WhyChooseUs />
      </div>
    );
  }

  // Default view when visiting `/services` (without `id`)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Helmet>
        <title>Our Premium Services | Excellence Delivered</title>
        <meta
          name="description"
          content="Explore our comprehensive range of premium services designed to elevate your business."
        />
      </Helmet>

      {/* Hero Section */}
      <header className="relative">
        <div
          className="w-full bg-center bg-cover h-[80vh]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="container mx-auto px-6 h-full flex flex-col justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-blue-400">Premium</span> Services
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Discover our comprehensive suite of professional services
                designed to drive your business forward.
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore All Services
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Service Portfolio
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              We offer a wide range of professional services to meet your
              business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img || defaultImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-3">
                      <FaCheckCircle className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.details
                      ? service.details.substring(0, 120) + "..."
                      : "No description available"}
                  </p>
                
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-100">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}
