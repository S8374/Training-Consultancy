import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UseAuth } from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc"; // React Icon for Google

export default function Login() {
  // Initialize React Hook Form
  const {
    register, // Registers input fields
    handleSubmit, // Handles form submission
    formState: { errors }, // Captures validation errors
  } = useForm();
  const { signIn, loading ,signInWithGoogle} = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location',location)
  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data); // Logs input data to the console
    try {
      signIn(data.email, data.password)
        .then(result => {
          if (result.user) {
            toast.success('Login Successfully')

            const redirectPath = new URLSearchParams(location.search).get('redirect') || '/'; // Default to home if no redirect
            navigate(redirectPath);
            // Handle successful sign-in, e.g., redirect to a dashboard
          }
        })
        .catch(error => {
          console.error('Error signing in:', error);
          // Handle sign-in error, e.g., show an error message
        });
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle(); // Wait for Google sign-in to complete
      if (result && result.user) {
        toast.success("Google Login Successful");
  
      
        navigate('/'); // Navigate after successful login
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      toast.error("Google Login Failed");
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <Helmet>
        <title>ConsultPro || Login</title>
        <meta
          name="description"
          content="Welcome to my website! Find everything you need here."
        />
        <meta name="keywords" content="website, react, helmet, home page , signup , login" />
      </Helmet>
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={"../../../../public/signIn.svg"}
          alt="Secure Login"
          className="max-w-full h-auto"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 max-w-md p-8">
        <h2 className="text-2xl font-bold text-center font-serif uppercase text-gray-800 mb-6">
          Hey there <br /> welcome back
        </h2>
        {/* Form Submission */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
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
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              disabled={loading}
              type="submit"
              className={`w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
                            ${loading ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'}`}
            >
              {loading ? <ImSpinner9 className="text-xl animate-spin m-auto" /> : 'logIn'}
            </button>
            <ToastContainer position="top-center" />
          </div>
        </form>

        {/* Google Login Button */}
        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 px-4 border rounded-lg flex items-center justify-center space-x-2 bg-white border-gray-300 hover:bg-gray-100"
          >
            <FcGoogle className="text-xl" />
            <span className="text-gray-700">Login with Google</span>
          </button>
        </div>

        {/* Additional Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <Link to="/signUp" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p>
            <Link to={'/'} className="text-blue-500 hover:underline">
              go home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
