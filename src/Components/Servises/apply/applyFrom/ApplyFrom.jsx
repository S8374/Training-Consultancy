import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { UseAuth } from '../../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

// Static options for dropdowns
const educationOptions = [
    { value: 'ssc', label: 'SSC' },
    { value: 'hsc', label: 'HSC' },
    { value: 'honours', label: 'Honours' },
    { value: 'masters', label: 'Masters' },
    { value: 'degree', label: 'Degree' },
];

const skills = [
    { value: 'programming', label: 'Programming' },
    { value: 'design', label: 'Design' },
    { value: 'communication', label: 'Communication' },
    { value: 'management', label: 'Management' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'other', label: 'Other' },
];

// eslint-disable-next-line react/prop-types
export default function ApplyForm({ setIsModalOpen, serviceId ,setAppliedServices}) {
    const [countryOptions, setCountryOptions] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);  // State to track form submission
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location',location)
 
    // Fetch country data using useEffect
    useEffect(() => {
        axios
            .get('https://raw.githubusercontent.com/samayo/country-json/refs/heads/master/src/country-by-name.json')
            .then(response => {
                const options = response.data.map(country => ({
                    value: country.country,
                    label: country.country,
                }));
                setCountryOptions(options);
            })
            .catch(error => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    // Form submission handler
    const onSubmit = (data) => {
        // Check if user is logged in
        if (!user) {
            toast.error('Please log in to apply!');
            navigate('/login');  // Redirect to login page
            return;
        }

        setIsSubmitting(true);  // Set loading state to true during submission
        console.log('Form Data:', data);
        const applicationData = {
          ...data,
          status: 'applied',
          applyIDcard: serviceId,
        };
      
        // Make API call to submit the form data
        axios.post(`${import.meta.env.VITE_LIVE_LINK}/apply`, applicationData)
          .then(response => {
            if (response.data) {
              // After successful API request, update applied services
              setAppliedServices((prevState) => [...prevState, serviceId]);
              setIsModalOpen(false);
              toast.success('Applied Successfully');
            }
          })
          .catch(error => {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
            toast.error('Error submitting form. Please try again!');
          })
          .finally(() => {
            setIsSubmitting(false);  // Set loading state to false after submission
          });
      };
      

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Apply Form</h2>

                {/* Full Name */}
                <div className="flex">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter your full name"
                        {...register('fullName', { required: 'Full Name is required' })}
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                </div>

                {/* Country Select */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <Controller
                            name="country"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={countryOptions}
                                    placeholder="Select Country"
                                />
                            )}
                        />
                    </div>
                    <div className="w-1/2">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Enter Location"
                            {...register('location', { required: 'Location is required' })}
                        />
                        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                    </div>
                </div>

                {/* Current Study */}
                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <Controller
                            name="education"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={educationOptions}
                                    placeholder="Current Study"
                                />
                            )}
                        />
                    </div>
                    <div className="w-1/2">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="School/College/University"
                            {...register('institute', { required: 'Institute is required' })}
                        />
                        {errors.institute && <p className="text-red-500">{errors.institute.message}</p>}
                    </div>
                </div>

                {/* HSC and SSC GPA */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            placeholder="CGPA / GPA"
                            step="0.01"
                            {...register('gpa', { required: 'GPA is required' })}
                        />
                        {errors.gpa && <p className="text-red-500">{errors.gpa.message}</p>}
                    </div>
                    <div className="w-1/2">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Phone Number"
                            {...register('phone', { required: 'Phone Number is required' })}
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
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
                                />
                            )}
                        />
                    </div>
                    <div className="w-1/2">
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Write Cover Letter"
                            {...register('coverLetter', { required: 'Cover Letter is required' })}
                        />
                        {errors.coverLetter && <p className="text-red-500">{errors.coverLetter.message}</p>}
                    </div>
                </div>

                {/* Email */}
                <div>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Enter your email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center">
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 py-2 text-white font-bold w-full rounded focus:outline-none focus:shadow-outline ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}
