import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UseServices } from "../../../Hooks/useServices";

export default function Services() {
  const { data: services = [], isLoading, isError, error } = UseServices(); // Default to an empty array
  const [visibleCount, setVisibleCount] = useState(3); // Default visible items count
  const [isButtonLoading, setIsButtonLoading] = useState(false); // Loader state for the button

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 dark:border-gray-700 dark:border-t-blue-500"></div>
        <p className="text-gray-700 text-lg dark:text-white ml-4">
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

  const handleSeeMore = () => {
    setIsButtonLoading(true); // Show loader when "See More" is clicked
    setTimeout(() => {
      setVisibleCount(services.length); // Show all items
      setIsButtonLoading(false); // Hide loader
    }, 1000); // Simulated delay of 1 second
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="h-[32rem] dark:bg-gray-800">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our Services
            </h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
              Explore our premium services tailored to meet your needs with
              exceptional quality and customer support.
            </p>
          </div>
        </div>

        <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, visibleCount).map((service) => (
              <NavLink
                to={`/services/${service._id}`}
                key={service._id} // Use _id as the key
                className="flex flex-col items-center p-4 border sm:p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <img
                  className="object-cover w-full rounded-xl aspect-square"
                  src={service.img}
                  alt={service.title}
                />
                <h1 className="mt-4 text-2xl font2 uppercase font-semibold text-gray-700 touch-auto dark:text-white">
                  {service.title}
                </h1>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                  {service.description.slice(0, 100)}...
                </p>
                <button className="mt-4 font1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                  See More
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-10">
        {visibleCount < services.length && (
          <button
            onClick={handleSeeMore}
            disabled={isButtonLoading}
            className={`flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ${
              isButtonLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isButtonLoading ? (
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-white h-6 w-6 mr-2"></div>
            ) : null}
            {isButtonLoading ? "Loading..." : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}
