import { useTheme } from "../../ThemProvider/ThemProvider";
import { FaCheck, FaRocket, FaHeadset, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServiceImage() {
  const { darkMode } = useTheme();

  const features = [
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovative Solutions",
      description: "Discover cutting-edge strategies tailored to enhance your business growth and market reach."
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Expert Guidance",
      description: "Work with experienced professionals dedicated to turning your vision into reality."
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Comprehensive Support",
      description: "Enjoy ongoing assistance to ensure long-term success and continuous improvement."
    }
  ];

  return (
    <section className="mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Section */}
        <div className={`flex flex-col-reverse lg:flex-row items-center rounded-2xl overflow-hidden shadow-xl transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
          {/* Text Content */}
          <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-12 xl:p-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Our Services
              </h2>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`flex-shrink-0 p-2 rounded-full ${darkMode ? "bg-white/10" : "bg-gray-100"}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional team working"
                className="w-full h-full object-cover aspect-video lg:aspect-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.section
          className={`mt-16 py-16 rounded-2xl transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full mb-4 ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-100 text-blue-600"}`}>
              <FaCheck className="mr-2" />
              <span className="text-sm font-medium">Ready to get started?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Our Growing Community
            </h2>

            <p className={`text-lg max-w-2xl mx-auto mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Stay updated with our latest services and industry insights to take your business to the next level.
            </p>

            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-5 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Subscribe
                </button>
              </form>
              <p className={`mt-3 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
