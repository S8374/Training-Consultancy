import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UseAuth } from "../../../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { Helmet } from "react-helmet-async";
const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_API}`;
export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUserProfile, loading } = UseAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const onSubmit = async (data) => {
    try {
      // Upload image to ImgBB
      let imageUrl = "";
      if (data.image && data.image[0]) {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });

        const imgData = await response.json();
        if (imgData.success) {
          imageUrl = imgData.data.display_url;
        } else {
          throw new Error("Failed to upload image");
        }
      }

      // Create user
      const userCredential = await createUser(data.email, data.password);

      // Update user profile
      if (userCredential) {
        await updateUserProfile(data.name, imageUrl);
        toast.success('Account Created Successfully');
        const redirectPath = new URLSearchParams(location.search).get('redirect') || '/'; // Default to home if no redirect
        navigate(redirectPath);
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <Helmet>
        <title>ConsultPro || Sign Up</title>
        <meta
          name="description"
          content="Welcome to my website! Find everything you need here."
        />
        <meta name="keywords" content="website, react, helmet, home page , login,SignUp" />
      </Helmet>
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={'https://res.cloudinary.com/dx8o5d32h/image/upload/v1737286973/signIn_tcn5pe.svg'}
          alt="Secure Login"
          className="max-w-full h-auto"
        />
      </div>

      {/* Signup Form Section */}
      <div className="w-full md:w-1/2 max-w-md p-8">
        <h2 className="text-2xl font-bold text-center font-serif uppercase text-gray-800 mb-6">
          Let’s get started! It only takes a minute to join
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Full name is required" })}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Enter a valid email address"
                }
              })}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Image Upload Input */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="image"
              {...register("image")}
              accept="image/*"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              disabled={loading}
              type="submit"
              className={`w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
                ${loading ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'}`}
            >
              {loading ? <ImSpinner9 className="text-xl animate-spin m-auto" /> : 'Sign Up'}
            </button>
          </div>
          <ToastContainer position="top-center" />
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Already have an account?{' '}
            <Link to={'/login'} className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
          <p>
            <Link to={'/'} className="text-blue-500 hover:underline">
              Go Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
