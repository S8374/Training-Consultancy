import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { FaBars, FaHome, FaInfoCircle, FaCogs, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import "./Font.css";
import { UseAuth } from "../../../../Hooks/useAuth";
import { toast } from "react-toastify";

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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, loading, logOut } = UseAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        closeProfile();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handelLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  return (
    <Navbar
      shouldHideOnScroll
      className="bg-gray-100 font2 uppercase border-b shadow-md px-4 sm:px-8"
    >
      <NavbarBrand className="flex items-center space-x-0">
        <Logo />
        <NavLink to={"/"} className="font-bold font2 uppercase text-gray-800">
          ConsultPro
        </NavLink>
      </NavbarBrand>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden lg:flex items-center space-x-8 justify-center">
        <NavbarItem>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-800"}`
            }
          >
            <FaHome className="inline mr-2 font1" /> Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"aboutUs"}
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-800"}`
            }
          >
            <FaInfoCircle className="inline mr-2" /> About Us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"services"}
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-800"}`
            }
          >
            <FaCogs className="inline mr-2" /> Services
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-800"}`
            }
          >
            <FaPhone className="inline mr-2" /> Contact
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      {/* Right-side Content */}
      <NavbarContent justify="end" className="hidden lg:flex">
        {loading ? (
          <div className="text-gray-800">Loading...</div>
        ) : user ? (
          <div className="dropdown dropdown-end relative profile-dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={toggleProfile}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={user.photoURL || "https://via.placeholder.com/40"}
                />
              </div>
            </div>
            {isProfileOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handelLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <NavbarItem>
            <NavLink to={"/login"}>
              <Button className="bg-blue-500 text-white">Login</Button>
            </NavLink>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* Mobile Hamburger Menu */}
      <NavbarContent justify="end" className="flex lg:hidden">
        <p
          className="text-gray-800"
          auto
          size="sm"
          onClick={toggleMenu}
          icon={<FaBars className="w-6 h-6" />}
        >
          <CiMenuFries className="text-xl text-black" />
        </p>
        {loading ? (
          <div className="text-gray-800">Loading...</div>
        ) : user ? (
          <div className="dropdown dropdown-end relative profile-dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={toggleProfile}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={user.photoURL || "https://via.placeholder.com/40"}
                />
              </div>
            </div>
            {isProfileOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handelLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <NavbarItem>
            <NavLink to={"/login"}>
              <Button className="bg-blue-500 text-white">Login</Button>
            </NavLink>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden bg-gray-100 p-4 shadow-lg absolute top-full left-0 right-0 transition-all ease-in-out duration-300 transform translate-y-0 opacity-100"
        >
          <NavbarItem>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `block text-sm font-medium py-2 ${isActive ? "text-blue-600" : "text-gray-800"}`
              }
            >
              <FaHome className="inline mr-2" /> Home
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to={"aboutUs"}
              className={({ isActive }) =>
                `block text-sm font-medium py-2 ${isActive ? "text-blue-600" : "text-gray-800"}`
              }
            >
              <FaInfoCircle className="inline mr-2" /> About Us
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to={"services"}
              className={({ isActive }) =>
                `block text-sm font-medium py-2 ${isActive ? "text-blue-600" : "text-gray-800"}`
              }
            >
              <FaCogs className="inline mr-2" /> Services
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `block text-sm font-medium py-2 ${isActive ? "text-blue-600" : "text-gray-800"}`
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
