import { FaTwitter, FaFacebookSquare, FaDribbble, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-[#F3F4F6] text-gray-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-black uppercase font1 ">Let's keep in touch!</h4>
            <h5 className="text-lg mt-2 mb-4 text-black">
              Find us on any of these platforms, we respond within 1-2 business days.
            </h5>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-black  hover:bg-blue-500 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-black  hover:bg-blue-700 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="text-black  hover:bg-pink-500 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
              >
                <FaDribbble />
              </a>
              <a
                href="#"
                className="text-black  hover:bg-gray-400 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-black text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-black hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-black text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-black hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-black font-semibold py-1">
              Copyright © {new Date().getFullYear()} Notus JS by
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blue-400 hover:text-white ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sabbir Mridha
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
