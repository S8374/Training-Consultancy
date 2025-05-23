import { useState } from "react";
import { useTheme } from "../../../../ThemProvider/ThemProvider";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`py-20 px-5 md:px-10 lg:px-20 transition-colors duration-300 ${
      darkMode ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-gray-50 to-white"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0 relative"
          >
            <div className={`absolute -z-10 w-full h-full rounded-3xl ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100'} -rotate-6 scale-105`}></div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Customer support"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-video lg:aspect-auto lg:h-[500px]"
            />
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full ${darkMode ? 'bg-purple-600/20' : 'bg-indigo-100'} blur-3xl`}></div>
          </motion.div>

          {/* FAQ Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-600 bg-indigo-100 rounded-full dark:bg-indigo-900/50 dark:text-indigo-300 mb-4">
                NEED HELP?
              </span>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                Frequently Asked Questions
              </h2>
              <p className={`mt-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Find answers to common questions about our services and policies.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-md hover:shadow-lg`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex items-center justify-between p-6 text-left font-medium ${
                      darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                    } transition-colors duration-200`}
                  >
                    <span className="text-lg">{item.question}</span>
                    {activeIndex === index ? (
                      <FiChevronUp className="text-indigo-500 text-xl" />
                    ) : (
                      <FiChevronDown className="text-indigo-500 text-xl" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`${darkMode ? "border-t border-gray-700" : "border-t border-gray-200"}`}
                      >
                        <div className={`p-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy with a full refund for unused and undamaged items. Simply contact our support team to initiate a return.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number on our website or the carrier's site to track your package in real-time.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by destination. During checkout, you'll see the available options for your location.",
  }
];