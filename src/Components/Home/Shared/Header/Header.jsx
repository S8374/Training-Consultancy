// src/components/Header/Header.jsx
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Switch,
} from "@nextui-org/react";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaPhone,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UseAuth } from "../../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useTheme } from "../../../ThemProvider/ThemProvider";

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
  const { user, loading, logOut } = UseAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/");
      })
      .catch((error) => toast.error(`Logout failed: ${error.message}`));
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }) =>
    `flex items-center transition-colors ${
      isActive
        ? "text-primary-600 dark:text-primary-400 font-medium"
        : "text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
    }`;

  const handleProfileAction = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      maxWidth="full"
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm px-4 sm:px-8 py-3"
      isBlurred={false}
    >
      {/* Left Side - Brand */}
      <NavbarBrand className="gap-2 ">
        <Logo />
        <NavLink
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white tracking-tight"
        >
          ConsultPro
        </NavLink>
      </NavbarBrand>

      {/* Center - Desktop Navigation */}
      <NavbarContent className="hidden lg:flex gap-8">
        <NavbarItem>
          <NavLink to="/" className={navLinkClass}>
            <FaHome className="mr-2" /> Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/aboutUs" className={navLinkClass}>
            <FaInfoCircle className="mr-2" /> About
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/services" className={navLinkClass}>
            <FaCogs className="mr-2" /> Services
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/contact" className={navLinkClass}>
            <FaPhone className="mr-2" /> Contact
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      {/* Right Side - Auth and Theme Toggle */}
      <NavbarContent justify="end">
        {/* Theme Toggle */}
        <NavbarItem className="hidden sm:flex">
          <Switch
            isSelected={darkMode}
            onChange={toggleDarkMode}
            size="sm"
            color="primary"
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <FaMoon className="text-yellow-300 text-xs" />
              ) : (
                <FaSun className="text-yellow-500 text-xs" />
              )
            }
            classNames={{
              base: "mr-2",
              wrapper: "bg-gray-300 dark:bg-gray-600",
            }}
          />
        </NavbarItem>

        {loading ? (
          <div className="text-gray-500 dark:text-gray-400">Loading...</div>
        ) : user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform hover:scale-105"
                size="sm"
                src={
                  user.photoURL ||
                  "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                }
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Actions"
              className="p-2 shadow-lg rounded-lg dark:bg-gray-800"
            >
              {(user.email === "sabbirmridha880@gmail.com" ||
                user.email === "admin@gmail.com") && (
                <>
                  <DropdownItem
                    key="dashboard"
                    className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    onClick={() => handleProfileAction("/dashboard")}
                  >
                    Dashboard
                  </DropdownItem>
                </>
              )}

              <DropdownItem
                key="applied"
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                onClick={() => handleProfileAction("/applied")}
              >
                Applied
              </DropdownItem>
              <DropdownItem
                key="logout"
                className="py-2 px-4 text-danger-500 hover:bg-danger-50 dark:hover:bg-danger-900/30 rounded"
                onClick={handleLogOut}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button
              as={NavLink}
              to="/login"
              radius="md"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md hover:shadow-lg transition-all"
            >
              Login
            </Button>
          </NavbarItem>
        )}

        {/* Mobile Menu Toggle */}
        <NavbarItem className="lg:hidden">
          <Button
            isIconOnly
            variant="light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
          >
            <CiMenuFries className="text-xl" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 z-50 mobile-menu-container">
          <div className="flex flex-col space-y-2 p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHome className="mr-3" /> Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FaInfoCircle className="mr-3" /> About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FaCogs className="mr-3" /> Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive
                    ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FaPhone className="mr-3" /> Contact
            </NavLink>

        

           
          </div>
        </div>
      )}
    </Navbar>
  );
}
