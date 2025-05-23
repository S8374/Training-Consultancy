import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  FiHome, 
  FiUsers, 
  FiBox, 
  FiBell, 
  FiLogOut,
  FiMenu,
  FiX,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { UseAuth } from "../../Hooks/useAuth";
import { useTheme } from "../ThemProvider/ThemProvider";
import { Logo } from "../Home/Shared/Logo/Logo";

export default function DashboardLayout() {
  const { darkMode, toggleTheme } = useTheme();
  const { user, logOut } = UseAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", icon: <FiHome />, label: "Overview" },
    { path: "/dashboard/add_services", icon: <FiUsers />, label: "Add Services" },
    { path: "/dashboard/Applied", icon: <FiBox />, label: "Applied People" },
  ];

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/login");
      })
      .catch(error => toast.error(error.message));
  };

  // Close mobile sidebar when clicking outside or when route changes
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".mobile-sidebar");
      const menuButton = document.querySelector(".mobile-menu-button");
      
      if (mobileSidebarOpen && 
          sidebar && 
          !sidebar.contains(event.target) && 
          menuButton && 
          !menuButton.contains(event.target)) {
        setMobileSidebarOpen(false);
      }
    };
    
    if (mobileSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileSidebarOpen]);

  // Close mobile sidebar when route changes
  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  // Auto-close desktop sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
      <Helmet>
        <title>Dashboard | Control Panel</title>
      </Helmet>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-xl z-40 mobile-sidebar"
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex items-center justify-between p-4 mb-8">
                <div className="flex items-center gap-2">
                  <Logo size="md" />
                  <span className="text-xl font-bold text-gray-800 dark:text-white">ConsultPro</span>
                </div>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  <FiX />
                </button>
              </div>

              <nav className="flex-1">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.path}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center p-3 rounded-lg transition-colors ${
                          location.pathname === item.path
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="ml-3">{item.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto space-y-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full p-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <FiLogOut />
                  <span className="ml-3">Logout</span>
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ width: "280px" }}
        animate={{ width: sidebarOpen ? "280px" : "80px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`hidden lg:flex flex-col h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo/Brand */}
          <div className="flex items-center justify-between p-4 mb-8">
            {sidebarOpen ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Logo size="md" />
                <span className="text-xl font-bold text-gray-800 dark:text-white">ConsultPro</span>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center w-full"
              >
                <Logo size="sm" />
              </motion.div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebaropen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {sidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {sidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-3"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Bottom section */}
          <div className="mt-auto space-y-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <FiLogOut />
              {sidebarOpen && <span className="ml-3">Logout</span>}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-20">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden mobile-menu-button"
            >
              <FiMenu className="text-gray-600 dark:text-gray-300" />
            </button>

            <div className="flex items-center gap-4">
              <button className="p-2 relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <FiBell className="text-gray-600 dark:text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  {user?.displayName?.charAt(0) || "U"}
                </div>
                <span className="hidden md:inline text-gray-700 dark:text-gray-300">
                  {user?.displayName || "User"}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}