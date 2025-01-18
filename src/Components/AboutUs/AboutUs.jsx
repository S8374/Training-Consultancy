import { Helmet } from "react-helmet-async";
import AboutServises from "./AboutServices/AboutServises";
import Contact from "./Contact/Contact";
import RequestSend from "./RequestSend/RequestSend";
import ScrollToTop from "../Scroll/ScrollTop";


export default function AboutUs() {
  return (
    <div>
   
      {/* SEO Helmet */}
      <Helmet>
        <title>About Us - Our Information</title>
        <meta
          name="description"
          content="Learn more about our company, our services, and how to get in touch with us. We’re here to help you with your projects!"
        />
        <meta name="keywords" content="About us, services, contact, project, business" />
        <meta name="author" content="Your Company Name" />
      </Helmet>

      <header>

        {/* Background Section */}
        <div
          className="w-full bg-center bg-cover h-[60vh]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
          }}
        >   
        <ScrollToTop/>
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              {/* Main Title */}
              <h1 className="text-4xl font-semibold font2 uppercase text-white lg:text-4xl">
                About <span className="text-blue-400">Us</span>
              </h1>

              {/* Button */}
              <button className="w-full px-5 py-2 font1 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Start Project
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <Contact />

      {/* About Services Section */}
      <AboutServises />

      {/* Request Send Section */}
      <RequestSend />
    </div>
  );
}
