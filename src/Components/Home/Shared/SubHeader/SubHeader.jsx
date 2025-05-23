import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow, FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Switch } from "@nextui-org/react";
import { useTheme } from "../../../ThemProvider/ThemProvider";

export default function SubHeader() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-4 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Title */}
       <NavLink to="/" className="hidden lg:block mb-4 ml-5">
  <h1 className="text-2xl font2 uppercase font-bold text-gray-800 dark:text-white text-center">
    ConsultPro
  </h1>
</NavLink>


        {/* Contact Information and Theme Toggle */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Theme Toggle - Mobile */}

          {/* Contact Info */}
          <div className="flex flex-col font1 md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            {/* Contact Us */}
            <div className="flex items-center space-x-3">
              <div className="">
                <FaPhoneAlt className="text-blue-500 dark:text-blue-400 text-2xl md:text-3xl" />
              </div>
              <div>
                <h1 className="text-sm text-gray-800 dark:text-gray-200">
                  Contact Us
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  +08337287832734
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3">
              <div className="">
                <CiLocationOn className="text-green-500 dark:text-green-400 text-2xl md:text-3xl" />
              </div>
              <div>
                <h1 className="text-sm text-gray-800 dark:text-gray-200">
                  Our Location
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Work Time */}
            <div className="flex items-center space-x-3">
              <div className="">
                <MdOutlineTimer className="text-yellow-500 dark:text-yellow-400 text-2xl md:text-3xl" />
              </div>
              <div>
                <h1 className="text-sm text-gray-800 dark:text-gray-200">
                  Work Time
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mon - Sat: 9:00 AM - 6:00 PM <br /> Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
