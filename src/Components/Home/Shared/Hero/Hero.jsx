import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Parallax, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Hero.css';
import { useTheme } from '../../../ThemProvider/ThemProvider';

export default function Hero() {
    const { darkMode } = useTheme();
    
  return (
    <div className="relative w-full overflow-x-auto  font-sans overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        speed={1500} // Increased speed for smoother transition
        parallax={true}
        autoplay={{
          delay: 7000, // Increased delay for better readability
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          type: 'fraction',
        }}
        navigation={{
          prevEl: '.hero-button-prev',
          nextEl: '.hero-button-next',
        }}
        modules={[Autoplay, EffectFade, Parallax, Pagination, Navigation]}
        className="hero-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-screen">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"
              data-swiper-parallax="-100"
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Professional Business Consulting"
              className="absolute inset-0 w-full h-full object-cover object-center"
              data-swiper-parallax="-300"
            />
            <div className="container mx-auto px-6 relative z-20 h-full flex items-center justify-center text-center">
              <div className="max-w-4xl px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-blue-400 font-medium mb-4 block tracking-wider text-lg md:text-xl">
                    EXPERT CONSULTING
                  </span>
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                    data-swiper-parallax="-200"
                  >
                    Transform Your <span className="text-blue-400">Business</span> Strategy
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-lg md:text-xl text-gray-200 mb-8 mx-auto max-w-2xl">
                    We deliver innovative solutions that drive growth and maximize your business potential.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                      Get Started
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-screen">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"
              data-swiper-parallax="-100"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Financial Growth Strategies"
              className="absolute inset-0 w-full h-full object-cover object-center"
              data-swiper-parallax="-300"
            />
            <div className="container mx-auto px-6 relative z-20 h-full flex items-center justify-center text-center">
              <div className="max-w-4xl px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-pink-400 font-medium mb-4 block tracking-wider text-lg md:text-xl">
                    FINANCIAL SOLUTIONS
                  </span>
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                    data-swiper-parallax="-200"
                  >
                    Optimize Your <span className="text-pink-400">Financial</span> Future
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-lg md:text-xl text-gray-200 mb-8 mx-auto max-w-2xl">
                    Custom financial strategies to help your business scale and prosper.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                      Our Services
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-pink-900 py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                      Contact Us
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-screen">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"
              data-swiper-parallax="-100"
            />
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Strategic Consulting"
              className="absolute inset-0 w-full h-full object-cover object-center"
              data-swiper-parallax="-300"
            />
            <div className="container mx-auto px-6 relative z-20 h-full flex items-center justify-center text-center">
              <div className="max-w-4xl px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-cyan-400 font-medium mb-4 block tracking-wider text-lg md:text-xl">
                    STRATEGIC PARTNERSHIP
                  </span>
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                    data-swiper-parallax="-200"
                  >
                    <span className="text-cyan-400">Innovative</span> Solutions For Modern Business
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-lg md:text-xl text-gray-200 mb-8 mx-auto max-w-2xl">
                    We combine expertise with cutting-edge technology to deliver exceptional results.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                      View Case Studies
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-cyan-900 py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                      Free Consultation
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation with improved positioning */}
      <div className="hero-button-prev absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 text-white z-20 cursor-pointer bg-black/20 hover:bg-black/40 rounded-full p-3 md:p-4 transition-all duration-300 flex items-center justify-center">
        <FaArrowLeft className="text-xl md:text-2xl" />
      </div>
      <div className="hero-button-next absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 text-white z-20 cursor-pointer bg-black/20 hover:bg-black/40 rounded-full p-3 md:p-4 transition-all duration-300 flex items-center justify-center">
        <FaArrowRight className="text-xl md:text-2xl" />
      </div>

      {/* Custom Pagination */}
      <div className="hero-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-lg font-medium flex items-center space-x-1">
        <span className="current-slide">01</span>
        <span className="separator mx-2">/</span>
        <span className="total-slides">03</span>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="mouse-scroll animate-bounce">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}