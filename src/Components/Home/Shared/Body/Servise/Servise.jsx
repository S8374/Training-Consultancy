import { useTheme } from "../../../../ThemProvider/ThemProvider";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function Service() {
  const { darkMode } = useTheme();

  const features = [
    { title: "Premium selection", icon: <FiCheckCircle className="text-indigo-500" /> },
    { title: "Insurance coverage", icon: <FiCheckCircle className="text-indigo-500" /> },
    { title: "All legal documents", icon: <FiCheckCircle className="text-indigo-500" /> },
    { title: "Certified US dealers", icon: <FiCheckCircle className="text-indigo-500" /> },
    { title: "Payment security", icon: <FiCheckCircle className="text-indigo-500" /> },
    { title: "Fast & express shipping", icon: <FiCheckCircle className="text-indigo-500" /> }
  ];

  return (
    <section className={`w-full overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'} transition-colors duration-500`}>
      <div className="container mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between lg:gap-12 xl:gap-24">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-600 bg-indigo-100 rounded-full dark:bg-indigo-900/50 dark:text-indigo-300">
              PREMIUM SERVICES
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
              Discover Exceptional <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Eyewear Solutions</span>
            </h1>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
              We collaborate with top-rated optical specialists across North America to deliver premium eyewear tailored to your vision needs and style preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-start space-x-3 p-4 rounded-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="mt-0.5">{feature.icon}</div>
                <span className="font-medium">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-0 relative lg:w-1/2"
        >
          <div className={`absolute -z-10 w-full h-full rounded-3xl ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100'} -rotate-6 scale-105`}></div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Professional eyewear specialist"
            className="relative rounded-2xl shadow-2xl w-full max-w-2xl object-cover aspect-square lg:aspect-video lg:h-[500px]"
          />
          <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full ${darkMode ? 'bg-purple-600/20' : 'bg-indigo-100'} blur-3xl`}></div>
        </motion.div>
      </div>
    </section>
  );
}