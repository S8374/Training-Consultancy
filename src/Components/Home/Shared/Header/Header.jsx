import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaCogs, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import './Font.css';

export const Logo = () => {
return (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
};

export default function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

return (
  <Navbar shouldHideOnScroll className="bg-gray-100 font2 uppercase border-b shadow-md px-4 sm:px-8">

       <NavbarBrand className="flex items-center space-x-2">
      <Logo />
      <NavLink to={'/'} className="font-bold font2 uppercase text-gray-800">ConsultPro</NavLink>
    </NavbarBrand>
  
   

    {/* Desktop Navigation */}
    <NavbarContent className="hidden md:flex items-center space-x-8 justify-center transition-all duration-300 ease-in-out">
      <NavbarItem>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-800'}`
          }
        >
          <FaHome className="inline mr-2 font1" /> Home
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink
          to={'aboutUs'}
          className={({ isActive }) =>
            `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-800'}`
          }
        >
          <FaInfoCircle className="inline mr-2" /> About Us
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink
          to={'services'}
          className={({ isActive }) =>
            `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-800'}`
          }
        >
          <FaCogs className="inline mr-2" /> Services
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-800'}`
          }
        >
          <FaPhone className="inline mr-2" /> Contact
        </NavLink>
      </NavbarItem>
    </NavbarContent>

    {/* Desktop Login/Sign Up */}
    <NavbarContent justify="end" className="hidden md:flex">
      <NavbarItem>
        <Link href="#" className="text-sm font-medium text-gray-800">
          Login
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" size="sm" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>

    {/* Mobile Hamburger Menu */}
    <NavbarContent justify="end" className="flex md:hidden">
      <Button
        className="text-gray-800"
        auto
        size="sm"
        onClick={toggleMenu}
        icon={<FaBars className="w-6 h-6" />}
      >
        <CiMenuFries className="text-xl  text-black" />
      </Button>
    </NavbarContent>

    {/* Mobile Dropdown Menu with Animation */}
    {isMenuOpen && (
      <div
        className="md:hidden bg-gray-100 p-4 shadow-lg absolute top-full left-0 right-0 transition-all duration-500 ease-in-out transform scale-105 opacity-100"
        style={{ animation: "slideIn 0.5s ease-out" }}
      >
        <NavbarItem>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              `block text-sm font-medium py-2 ${isActive ? 'text-blue-600' : 'text-gray-800'}`
            }
          >
            <FaHome className="inline mr-2" /> Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={'aboutUs'}
            className={({ isActive }) =>
              `block text-sm font-medium py-2 ${isActive ? 'text-blue-600' : 'text-gray-800'}`
            }
          >
            <FaInfoCircle className="inline mr-2" /> About Us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={'services'}
            className={({ isActive }) =>
              `block text-sm font-medium py-2 ${isActive ? 'text-blue-600' : 'text-gray-800'}`
            }
          >
            <FaCogs className="inline mr-2" /> Services
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={'/contact'}
            className={({ isActive }) =>
              `block text-sm font-medium py-2 ${isActive ? 'text-blue-600' : 'text-gray-800'}`
            }
          >
            <FaPhone className="inline mr-2" /> Contact
          </NavLink>
        </NavbarItem>
      </div>
    )}
  </Navbar>
);
}
