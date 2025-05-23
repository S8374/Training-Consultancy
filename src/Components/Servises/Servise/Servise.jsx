import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { UseServices } from "../../../Hooks/useServices";
import ApplyModal from "../apply/applyModal";
import { UseAuth } from "../../../Hooks/useAuth";
import { FaCheckCircle, FaArrowRight, FaSpinner, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTheme } from "../../ThemProvider/ThemProvider";
import useApply from "../../../Hooks/useApply";

export default function Services() {
   
  const { data: services = [], isLoading, isError, error } = UseServices();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
const [Applied] = useApply();
  const { user } = UseAuth();
  const { darkMode } = useTheme();

  const cardsPerPage = 6;
  const totalPages = Math.ceil(services.length / cardsPerPage);
  const [appliedServices, setAppliedServices] = useState([]);

  useEffect(() => {
    if (Applied && user) {
      setAppliedServices(
        Applied.filter((item) => item.email === user?.email).map((item) => item.applyIDcard)
      );
    } else {
      setAppliedServices([]);
    }
  }, [Applied, user]);

  const handleCardClick = (id) => {
    setSelectedServiceId(id);
    setIsModalOpen(true);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 dark:border-blue-400 mb-4"></div>
        <p className="text-gray-700 text-lg dark:text-gray-300">
          Loading services...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Error: {error?.message}</p>
      </div>
    );
  }

  if (!Array.isArray(services) || services.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg dark:text-gray-300">
          No services available at the moment.
        </p>
      </div>
    );
  }

  // Get current services for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentServices = services.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Hero Section */}
      <section className={`relative ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="h-96 md:h-[32rem] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 dark:opacity-30"></div>
          <div className="container px-6 py-24 mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Explore Our Visa Services
            </h1>
            <div className="w-24 h-1.5 bg-blue-500 rounded-full mb-6"></div>
            <p className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Discover our comprehensive visa solutions tailored to your travel needs with expert guidance and support.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container px-6 py-12 mx-auto -mt-32 md:-mt-48 relative z-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentServices.map((service) => (
              <div
                key={service._id}
                className={`group relative flex flex-col h-full overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={service.img}
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-blue-500 rounded-full">
                      {service.category || "Visa"}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-bold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}>
                      {service.title}
                    </h3>
                    {appliedServices.includes(service._id) && (
                      <span className="flex items-center text-sm text-green-500">
                        <FaCheckCircle className="mr-1" /> Applied
                      </span>
                    )}
                  </div>
                  
                  <p className={`mb-4 flex-grow ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {service.description.slice(0, 100)}...
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4">
                    <NavLink
                      to={`/services/${service._id}`}
                      className="flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      View details <FaArrowRight className="ml-1" />
                    </NavLink>
                    
                    <button
                      onClick={() => handleCardClick(service._id)}
                      disabled={appliedServices.includes(service._id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-w-[100px] text-center ${
                        appliedServices.includes(service._id)
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                          : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                      }`}
                    >
                      {appliedServices.includes(service._id) ? "Applied" : "Apply Now"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <FaAngleLeft className="text-xl" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium ${
                      currentPage === number
                        ? "bg-blue-500 text-white"
                        : `text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-700 ${
                            darkMode ? "dark:hover:text-white" : ""
                          }`
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <FaAngleRight className="text-xl" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ApplyModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        serviceId={selectedServiceId}
        setAppliedServices={setAppliedServices}
      />
    </div>
  );
}