import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function SubHeader() {
    return (
        <div className="bg-gray-100 py-4 border-b">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo or Title */}
                <NavLink to={'/'} className="mb-4 ml-5 md:mb-0">
                    <h1 className="text-2xl font2 uppercase  font-bold text-gray-800 text-center md:text-left">
                    ConsultPro
                    </h1>
                </NavLink>

                {/* Contact Information */}
                <div className="flex flex-col font1  md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    {/* Contact Us */}
                    <div className="flex items-center space-x-3">
                        <div className=" ">
                            <FaPhoneAlt className="text-blue-500 text-4xl" />
                        </div>
                        <div>
                            <h1 className="text-sm  text-gray-800">Contact Us</h1>
                            <p className="text-sm text-gray-600">+08337287832734</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-3">
                        <div className="">
                            <CiLocationOn className="text-green-500 text-4xl" />
                        </div>
                        <div>
                            <h1 className="text-sm  text-gray-800">Our Location</h1>
                            <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Work Time */}
                    <div className="flex items-center space-x-3">
                        <div className="">
                            <MdOutlineTimer className="text-yellow-500 text-4xl" />
                        </div>
                        <div>
                            <h1 className="text-sm  text-gray-800">Work Time</h1>
                            <p className="text-sm text-gray-600">
                                Mon - Sat: 9:00 AM - 6:00 PM <br /> Sun: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
