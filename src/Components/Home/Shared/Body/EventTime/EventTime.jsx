import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../../ThemProvider/ThemProvider";
import { motion, useAnimation } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function EventTime() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const { darkMode } = useTheme();

  const counters = [
    { value: 12, label: "Years of Business", icon: "🏢" },
    { value: 1000, label: "Worldwide Clients", icon: "🌎" },
    { value: 2210, label: "Mortgage Brokers", icon: "💼" },
    { value: 19, label: "Finance Help Centers", icon: "🏦" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const animate = () => {
          start += increment;
          if (start < value) {
            setCount(Math.ceil(start));
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };
        animate();
      }
    }, [isVisible, value]);

    return <span>{count}+</span>;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl px-6 mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center gap-12 lg:flex-row lg:items-start"
        >
          {/* Left Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 space-y-8"
          >
            <motion.h6 
              variants={itemVariants}
              className="text-sm font-semibold tracking-wider text-indigo-500 uppercase dark:text-indigo-400"
            >
              Helping Businesses Grow
            </motion.h6>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold leading-tight md:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400"
            >
              Trusted Financial Solutions <br className="hidden lg:block" /> For Over Four Decades
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We provide innovative financial strategies tailored to your unique needs. 
              Our expertise spans multiple industries, helping clients achieve their 
              financial goals with confidence and clarity.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <NavLink
                to="/"
                className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Discover Our Services
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
            </motion.div>
          </motion.div>

          {/* Counters */}
          <motion.div 
            variants={containerVariants}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-6"
          >
            {counters.map((counter, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`rounded-xl p-8 text-center shadow-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 hover:border-indigo-500 hover:shadow-indigo-500/20"
                    : "bg-white border border-gray-100 hover:border-indigo-300 hover:shadow-indigo-100"
                } hover:shadow-lg`}
              >
                <div className="text-4xl mb-3">{counter.icon}</div>
                <div className="text-xl lg:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  <Counter value={counter.value} />
                </div>
                <p className={`text-sm font-medium uppercase tracking-wider ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  {counter.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}