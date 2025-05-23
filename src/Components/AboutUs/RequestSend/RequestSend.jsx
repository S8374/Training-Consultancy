import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaPlay, FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { SiNetflix, SiSpotify, SiAmazon, SiPaypal, SiAdobe } from 'react-icons/si';

export default function Requestsend() {
  return (
    <div className="dark:bg-gray-900 py-16">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-between lg:flex-row lg:gap-10">
          {/* Left Section */}
          <div className="mb-12 lg:max-w-lg lg:pr-8 lg:mb-0">
            <div className="max-w-xl mb-8">
              <h2 className="text-4xl font-bold leading-snug text-white sm:text-5xl">
                Want to Know More? Send Us Your
                <br className="hidden md:block" /> 
                <span className="text-blue-400">Details</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                Our team will get back to you promptly with all the information you need to make an informed decision about our services.
              </p>
            </div>
            <hr className="mb-6 border-gray-700" />
            <div className="flex items-center">
              <a href="/" aria-label="Play Video" className="mr-4">
                <div className="flex items-center justify-center w-14 h-14 text-white transition-all duration-300 transform rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 hover:scale-110">
                  <FaPlay className="w-5 h-5 ml-1" />
                </div>
              </a>
              <div>
                <div className="text-sm font-semibold text-gray-200">Watch our introduction</div>
                <div className="text-xs text-gray-400">2:45 min</div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-xl lg:w-2/5">
            <div className="mb-6 text-2xl font-semibold text-center text-white">Request a Call Back</div>
            <form className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 focus:outline-none transition"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaPhoneAlt className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 focus:outline-none transition"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 focus:outline-none transition"
                />
              </div>
              
              <textarea
                placeholder="Your Message"
                className="w-full h-32 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 focus:outline-none transition"
              ></textarea>
              
              <button
                type="submit"
                className="w-full px-4 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Brands Marquee */}
      <div className="max-w-screen-xl mx-auto mt-20">
        <Marquee 
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="py-4"
        >
          <div className="flex items-center justify-center mx-12">
            <SiNetflix className="h-10 w-20 text-gray-300 hover:text-red-500 transition" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiSpotify className="h-10 w-20 text-gray-300 hover:text-green-500 transition" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiAmazon className="h-10 w-20 text-gray-300 hover:text-yellow-500 transition" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiPaypal className="h-10 w-20 text-gray-300 hover:text-blue-400 transition" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiAdobe className="h-10 w-20 text-gray-300 hover:text-red-400 transition" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiNetflix className="h-10 w-20 text-gray-300 hover:text-red-500 transition" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiSpotify className="h-10 w-20 text-gray-300 hover:text-green-500 transition" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}