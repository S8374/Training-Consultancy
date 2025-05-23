import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";
import { UseAuth } from "../../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../../ThemProvider/ThemProvider";

// Static options for dropdowns
const educationOptions = [
  { value: "ssc", label: "SSC" },
  { value: "hsc", label: "HSC" },
  { value: "honours", label: "Honours" },
  { value: "masters", label: "Masters" },
  { value: "degree", label: "Degree" },
];

const skills = [
  { value: "programming", label: "Programming" },
  { value: "design", label: "Design" },
  { value: "communication", label: "Communication" },
  { value: "management", label: "Management" },
  { value: "marketing", label: "Marketing" },
  { value: "other", label: "Other" },
];

export default function ApplyForm({
  setIsModalOpen,
  serviceId,
  setAppliedServices,
}) {
  const [countryOptions, setCountryOptions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useTheme();

  // Fetch country data
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/samayo/country-json/refs/heads/master/src/country-by-name.json"
      )
      .then((response) => {
        const options = response.data.map((country) => ({
          value: country.country,
          label: country.country,
        }));
        setCountryOptions(options);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  // Form submission handler
  const onSubmit = (data) => {
    if (!user) {
      toast.error("Please log in to apply!");
      navigate("/login", { state: { from: location } });
      return;
    }

    setIsSubmitting(true);
    
    // Log user details and form data
    console.log("User applying:", {
      user: {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      },
      formData: data,
      serviceId: serviceId
    });

    const applicationData = {
      ...data,
      email: user.email, // Ensure email matches authenticated user
      status: "applied",
      Booked:'pending',
      applyIDcard: serviceId,
      userId: user.uid // Add user ID for reference
    };

    axios
      .post(`${import.meta.env.VITE_LIVE_LINK}/apply`, applicationData)
      .then((response) => {
        if (response.data) {
          setAppliedServices((prevState) => [...prevState, serviceId]);
          setIsModalOpen(false);
          toast.success("Applied Successfully");
          
          // Log successful application
          console.log("Application successful:", {
            applicationId: response.data._id,
            timestamp: new Date().toISOString()
          });
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Error submitting form. Please try again!");
        
        // Log error details
        console.error("Application failed:", {
          error: error.response?.data,
          timestamp: new Date().toISOString()
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Custom styles for react-select to support dark mode
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderColor: darkMode ? '#4b5563' : '#d1d5db',
      color: darkMode ? 'white' : '#111827',
      boxShadow: state.isFocused ? (darkMode ? '0 0 0 1px #3b82f6' : '0 0 0 1px #2563eb') : 'none',
      '&:hover': {
        borderColor: darkMode ? '#6b7280' : '#9ca3af'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected 
        ? '#3b82f6' 
        : state.isFocused 
          ? (darkMode ? '#374151' : '#f3f4f6') 
          : (darkMode ? '#1f2937' : 'white'),
      color: state.isSelected ? 'white' : (darkMode ? 'white' : '#111827'),
      '&:active': {
        backgroundColor: darkMode ? '#4b5563' : '#e5e7eb'
      }
    }),
    input: (provided) => ({
      ...provided,
      color: darkMode ? 'white' : '#111827'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: darkMode ? 'white' : '#111827'
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: darkMode ? '#1f2937' : 'white',
      borderColor: darkMode ? '#4b5563' : '#d1d5db'
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: darkMode ? '#374151' : '#e5e7eb'
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: darkMode ? 'white' : '#111827'
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: darkMode ? '#9ca3af' : '#6b7280',
      ':hover': {
        backgroundColor: darkMode ? '#4b5563' : '#d1d5db',
        color: darkMode ? 'white' : '#111827'
      }
    })
  };

  return (
    <div className={`flex items-center justify-center p-4 ${darkMode ? 'dark' : ''}`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-4 w-full max-w-lg  rounded-lg  ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <h2 className={`text-2xl font-bold mb-6 text-center ${
          darkMode ? 'text-white' : 'text-gray-700'
        }`}>
          Application Form
        </h2>

        {/* Full Name */}
        <div>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                : 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500'
            } ${errors.fullName ? 'border-red-500' : ''}`}
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Country and Location */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={countryOptions}
                  placeholder="Select Country"
                  styles={customStyles}
                  isClearable
                />
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
            )}
          </div>
          <div className="w-1/2">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                  : 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500'
              } ${errors.location ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Enter Location"
              {...register("location", { required: "Location is required" })}
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>
        </div>

        {/* Education */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <Controller
              name="education"
              control={control}
              rules={{ required: "Education level is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={educationOptions}
                  placeholder="Current Study"
                  styles={customStyles}
                />
              )}
            />
            {errors.education && (
              <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>
            )}
          </div>
          <div className="w-1/2">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                  : 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500'
              } ${errors.institute ? 'border-red-500' : ''}`}
              type="text"
              placeholder="School/College/University"
              {...register("institute", { required: "Institute is required" })}
            />
            {errors.institute && (
              <p className="text-red-500 text-sm mt-1">{errors.institute.message}</p>
            )}
          </div>
        </div>

        {/* GPA and Phone */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                  : 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500'
              } ${errors.gpa ? 'border-red-500' : ''}`}
              type="number"
              placeholder="CGPA / GPA"
              step="0.01"
              min="0"
              max="4"
              {...register("gpa", { 
                required: "GPA is required",
                min: { value: 0, message: "GPA cannot be negative" },
                max: { value: 4, message: "GPA cannot exceed 4.0" }
              })}
            />
            {errors.gpa && (
              <p className="text-red-500 text-sm mt-1">{errors.gpa.message}</p>
            )}
          </div>
          <div className="w-1/2">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                  : 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500'
              } ${errors.phone ? 'border-red-500' : ''}`}
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { 
                required: "Phone Number is required",
                pattern: {
                  value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                  message: "Invalid phone number format"
                }
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Skills and Cover Letter */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <Controller
              name="skills"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={skills}
                  isMulti
                  placeholder="Select Skills"
                  styles={customStyles}
                />
              )}
            />
          </div>
          <div className="w-1/2">
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                  : 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500'
              } ${errors.coverLetter ? 'border-red-500' : ''}`}
              rows="3"
              placeholder="Write Cover Letter"
              {...register("coverLetter", {
                required: "Cover Letter is required",
                minLength: {
                  value: 50,
                  message: "Cover letter should be at least 50 characters"
                }
              })}
            />
            {errors.coverLetter && (
              <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>
            )}
          </div>
        </div>

        {/* Email (pre-filled if user is logged in) */}
        <div>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                : 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500'
            } ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            placeholder="Enter your email"
            defaultValue={user?.email || ''}
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
              isSubmitting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}