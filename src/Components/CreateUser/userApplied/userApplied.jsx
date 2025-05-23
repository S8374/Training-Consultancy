import { UseAuth } from "../../../Hooks/useAuth";
import { UseServices } from "../../../Hooks/useServices";
import { toast } from "react-toastify";
import {
  FaTrash,
  FaInfoCircle,
  FaPhone,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Swal from "sweetalert2";
import useApply from "../../../Hooks/useApply";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteApplication = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_LIVE_LINK}/apply/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to delete application");
  }
  return response.json();
};

export default function UserApplied() {
  const queryClient = useQueryClient();
  const [applied, refetch, loading] = useApply();
  const { user, loading: authLoading } = UseAuth();
  const { data: services = [], isLoading: servicesLoading } = UseServices();

  const deleteMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries(["applications"]);
    },
  });

  if (loading || authLoading || servicesLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
      </div>
    );
  }

  const userAppliedData = applied?.filter((item) => item.email === user?.email);

  const handleCancel = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Confirm Cancellation",
        text: "Are you sure you want to cancel this application?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, keep it",
        reverseButtons: true,
        background: document.documentElement.classList.contains("dark")
          ? "#1f2937"
          : "#fff",
        color: document.documentElement.classList.contains("dark")
          ? "#fff"
          : "#000",
      });

      if (result.isConfirmed) {
        await deleteMutation.mutateAsync(id);
        toast.success("Application cancelled successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: document.documentElement.classList.contains("dark")
            ? "dark"
            : "light",
        });
        refetch();
      }
    } catch (error) {
      toast.error(`Failed to cancel application: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: document.documentElement.classList.contains("dark")
          ? "dark"
          : "light",
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Your Applications
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {userAppliedData?.length > 0
            ? `You have ${userAppliedData.length} active application${
                userAppliedData.length > 1 ? "s" : ""
              }`
            : "Track and manage your service applications here"}
        </p>
      </div>

      {userAppliedData && userAppliedData.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {userAppliedData.map((application) => {
            const matchedService = services.find(
              (service) => service._id === application.applyIDcard
            );

            return (
              <div
                key={application._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                        <FaUser className="mr-2 text-blue-500 dark:text-blue-400" />
                        {application.fullName}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            application.status
                          )}`}
                        >
                          {application.status}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCancel(application._id)}
                      className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                      title="Cancel Application"
                      disabled={deleteMutation.isLoading}
                    >
                      {deleteMutation.isLoading ? (
                        <span className="loading loading-spinner loading-xs"></span>
                      ) : (
                        <FaTrash className="text-lg" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaEnvelope className="mr-2 text-blue-400" />
                      <span>{application.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaPhone className="mr-2 text-blue-400" />
                      <span>{application.phone}</span>
                    </div>
                    <span>{application.Booked}</span>
                    {application.skills?.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-1 flex items-center">
                          <FaInfoCircle className="mr-2 text-blue-400" />
                          Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {application.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded"
                            >
                              {skill.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {matchedService ? (
                    <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          Service Details
                        </h4>
                      </div>

                      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                        <img
                          src={matchedService.img || matchedService.image}
                          alt={matchedService.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <h5 className="font-medium text-gray-800 dark:text-white">
                        {matchedService.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                        {matchedService.description}
                      </p>

                      <div className="mt-3">
                        <h6 className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                          Facilities:
                        </h6>
                        <ul className="space-y-2">
                          {matchedService.facility?.map((facility, idx) => (
                            <li
                              key={idx}
                              className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                            >
                              <h6 className="font-medium text-blue-600 dark:text-blue-400">
                                {facility.name}
                              </h6>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {facility.details}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg text-yellow-700 dark:text-yellow-200 flex items-center">
                      <FaInfoCircle className="mr-2" />
                      <span>Service details not available</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <FaInfoCircle className="text-3xl text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
            No Applications Found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            You haven't applied to any services yet.
          </p>
          <a
            href="/services"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Services
          </a>
        </div>
      )}
    </div>
  );
}
