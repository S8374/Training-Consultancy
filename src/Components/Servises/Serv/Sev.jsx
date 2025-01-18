import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WhyChooseUs from "./Serv1";
import { UseServices } from "../../../Hooks/useServices";
import ScrollToTop from "../../Scroll/ScrollTop";

export default function Serv() {
  const { id } = useParams();
  const { data: services, isLoading, isError, error } = UseServices();

  // Fallback image if the service does not have an image
  const defaultImage =
    "https://media.istockphoto.com/id/1453719077/photo/beautiful-aerial-view-of-downtown-vancouver-skyline-british-columbia-canada-at-sunset.jpg?s=612x612&w=0&k=20&c=j1OQOusYL_3UsWHFv3JqY9N_-5jW69l3Z-7TgZ49k_c=";

  // Handle loading state with a loader icon
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  // If `id` exists, find the specific service
  if (id) {
    const service = services?.find((service) => service._id === id);

    if (!service) {
      return <div className="text-center">Service not found</div>;
    }

    return (
      <div>
        <ScrollToTop/>
        <Helmet>
          <title>{service.title} | Our Services</title>
          <meta name="description" content={service.description || "Service details"} />
        </Helmet>
        <header>
          <div
            className="w-full bg-center bg-cover h-[60vh]"
            style={{
              backgroundImage: `url('${service.img || defaultImage}')`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  <span className="text-blue-400">{service.title}</span>
                </h1>
                <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Start project
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-4xl font-semibold font1 uppercase text-gray-800 lg:text-3xl dark:text-white">
              {service.title}
            </h1>

            <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
              {service.description}
            </p>

            {/* Render facilities if available */}
            {service.facility && (
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {service.facility.map((facility, index) => (
                  <div
                    key={index}
                    className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
                  >
                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                      {facility.name}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-300">
                      {facility.details}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <WhyChooseUs />
      </div>
    );
  }

  // Default view when visiting `/services` (without `id`)
  return (
    <div>
      <Helmet>
        <title>Our Services | Explore</title>
        <meta name="description" content="Explore our wide range of services tailored for you." />
      </Helmet>
      <header>
        <div
          className="w-full bg-center bg-cover h-[60vh] bg-gray-200"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1480281331/photo/young-black-female-working-on-laptop-computer-in-creative-office-in-the-evening-happy.jpg?s=612x612&w=0&k=20&c=ErKZx9jH5hVXRhXOe6ziaj9bK6Q3Jx-ZADzDk8d0jYM=')`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-white lg:text-4xl">
                <span className="text-blue-400 font2 uppercase">Our Services</span>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font2 uppercase font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Explore our services
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {services?.map((service) => (
              <div
                key={service._id}
                className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
              >
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {service.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-300">
                  {service.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
    </div>
  );
}
