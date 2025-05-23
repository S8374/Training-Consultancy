import { FaTwitter, FaFacebookSquare, FaDribbble, FaGithub } from 'react-icons/fa';
import { useTheme } from '../../../ThemProvider/ThemProvider';

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-[#F3F4F6] text-gray-800'} pt-10 pb-6 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Contact Section */}
          <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
            <h4 className={`text-3xl font-bold uppercase ${darkMode ? 'text-white' : 'text-gray-900'}`}>Let's keep in touch!</h4>
            <p className={`text-lg mt-2 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Find us on any of these platforms, we respond within 1-2 business days.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <FaTwitter />, color: 'bg-blue-500' },
                { icon: <FaFacebookSquare />, color: 'bg-blue-700' },
                { icon: <FaDribbble />, color: 'bg-pink-500' },
                { icon: <FaGithub />, color: 'bg-gray-700' }
              ].map((item, index) => (
                <a
  key={index}
  href="#"
  className={`h-10 w-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-300
    ${darkMode 
      ? 'bg-gray-800 text-white hover:bg-white hover:text-black' 
      : `${item.color} text-white hover:bg-gray-900 hover:text-white`
    }`}
>
  {item.icon}
</a>

              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-start">
              {/* Useful Links */}
              <div className="w-full sm:w-6/12 lg:w-4/12 px-4 mb-6">
                <h5 className={`uppercase text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Useful Links</h5>
                <ul>
                  {['About Us', 'Blog', 'Github', 'Free Products'].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className={`block pb-2 text-sm font-medium transition-colors duration-300 
                          ${darkMode ? 'text-gray-400 hover:text-white' : 'text-black hover:text-blue-600'}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Resources */}
              <div className="w-full sm:w-6/12 lg:w-4/12 px-4 mb-6">
                <h5 className={`uppercase text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Other Resources</h5>
                <ul>
                  {['MIT License', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className={`block pb-2 text-sm font-medium transition-colors duration-300 
                          ${darkMode ? 'text-gray-400 hover:text-white' : 'text-black hover:text-blue-600'}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Other Resources */}
              <div className="w-full sm:w-6/12 lg:w-4/12 px-4 mb-6">
                <h5 className={`uppercase text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Other Resources</h5>
                <ul>
                  {['MIT License', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className={`block pb-2 text-sm font-medium transition-colors duration-300 
                          ${darkMode ? 'text-gray-400 hover:text-white' : 'text-black hover:text-blue-600'}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className={`my-6 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />

        {/* Footer Bottom */}
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <p className={`text-sm font-semibold ${darkMode ? 'text-gray-500' : 'text-gray-700'}`}>
              © {new Date().getFullYear()} Notus JS by
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className={`ml-1 font-bold transition-colors duration-300 
                  ${darkMode ? 'text-blue-400 hover:text-white' : 'text-blue-500 hover:text-black'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sabbir Mridha
              </a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
