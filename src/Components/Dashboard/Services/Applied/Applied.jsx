import useApply from "../../../../Hooks/useApply";
import Swal from "sweetalert2";
import { FaCheck, FaEnvelope, FaPhone, FaUniversity, FaGraduationCap, FaGlobe, FaListUl, FaFileAlt, FaUser } from "react-icons/fa";

export default function Applied() {
  const [applied, refetch, loading] = useApply();

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Confirm Booking?",
      text: "Are you sure you want to confirm this booking?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_LIVE_LINK}/apply/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Booked: "confirmed" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire(
                "Confirmed!",
                "The booking has been confirmed.",
                "success"
              );
              refetch();
            }
          });
      }
    });
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Applications Received</h2>
      
      {applied?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applied.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaUser className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.fullName}</h3>
                    <p className="text-sm text-gray-600">{item.email}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhone className="text-gray-500 mr-3" />
                    <span className="text-gray-700">{item.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FaUniversity className="text-gray-500 mr-3" />
                    <span className="text-gray-700">{item.institute}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FaGraduationCap className="text-gray-500 mr-3" />
                    <span className="text-gray-700">GPA: {item.gpa}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FaGlobe className="text-gray-500 mr-3" />
                    <span className="text-gray-700">{item.country?.label}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FaListUl className="text-gray-500 mr-3" />
                    <span className="text-gray-700">
                      Skills: {item.skills?.map(s => s.label).join(", ")}
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <FaFileAlt className="text-gray-500 mr-3 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Cover Letter:</p>
                      <p className="text-gray-700 text-sm line-clamp-3">{item.coverLetter}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.Booked === "confirmed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {item.Booked}
                  </span>
                  
                  {item.Booked === "pending" && (
                    <button
                      onClick={() => handleConfirm(item._id)}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                    >
                      <FaCheck className="mr-2" />
                      Confirm
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <img 
            src="/empty-state.svg" 
            alt="No applications" 
            className="w-48 mx-auto mb-4"
          />
          <h3 className="text-xl font-medium text-gray-700 mb-2">No applications yet</h3>
          <p className="text-gray-500">When users apply, they'll appear here.</p>
        </div>
      )}
    </div>
  );
}