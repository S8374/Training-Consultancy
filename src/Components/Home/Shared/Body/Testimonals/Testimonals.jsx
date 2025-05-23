import { useTheme } from "../../../../ThemProvider/ThemProvider";

export default function Testimonials() {
  const { darkMode } = useTheme();
  
  const testimonials = [
    {
      id: 1,
      company: "ConsultPro",
      tagline: "Digital Transformation",
      quote: "Their expertise in digital transformation helped us increase efficiency by 40% while reducing operational costs. Truly remarkable results!",
      author: "Sarah Johnson, CEO"
    },
    {
      id: 2,
      company: "TechNova",
      tagline: "Cloud Solutions",
      quote: "The cloud migration was seamless and exceeded our expectations. Our systems have never been more reliable or scalable.",
      author: "Michael Chen, CTO"
    },
    {
      id: 3,
      company: "GlobalEdge",
      tagline: "AI Integration",
      quote: "Their AI solutions transformed our customer service operations, reducing response times by 65% while improving satisfaction scores.",
      author: "David Rodriguez, COO"
    }
  ];

  return (
    <div className={`py-16 md:py-24 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-gray-100"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`group relative p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border ${
                darkMode 
                  ? "bg-gray-800 border-gray-700 hover:border-rose-900" 
                  : "bg-white border-gray-100 hover:border-rose-100"
              }`}
            >
              <div className="absolute -top-5 left-6 w-10 h-10 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                {testimonial.id}
              </div>
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    darkMode 
                      ? "bg-gradient-to-br from-rose-900/30 to-rose-800/50 text-rose-400" 
                      : "bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600"
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {testimonial.company}
                  </h3>
                  <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
                    {testimonial.tagline}
                  </p>
                </div>
              </div>
              <blockquote className="mb-6">
                <p className={`leading-relaxed italic ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div className={`text-sm font-medium ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                — {testimonial.author}
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-rose-500 dark:text-rose-400 w-full h-full">
                  <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 006.925 10H10a1 1 0 011 1v7c0 1.103-.897 2-2 2H3a1 1 0 01-1-1v-5l.003-.305c.036-1.242.434-2.287 1.121-3.102C3.881 8.584 5.169 7.776 7.032 7.228l.579-.164.045-.324c.012-.091.025-.204.04-.347zM20 20h-6a1 1 0 01-1-1v-5l.003-.305c.036-1.242.434-2.287 1.121-3.102.707-.827 1.995-1.635 3.858-2.183l.579-.164.045-.324c.012-.091.025-.204.04-.347C19.094 4.771 16.971 4 14 4h-1v2.819l.804.161c1.37.274 2.323.813 2.833 1.604A2.902 2.902 0 0117.075 10H14a1 1 0 00-1 1v7c0 1.103.897 2 2 2h6a1 1 0 001-1v-5l-.003-.305c-.036-1.242-.434-2.287-1.121-3.102A7.07 7.07 0 0016.032 7.228l-.579-.164-.045-.324c-.012-.091-.025-.204-.04-.347C16.906 4.771 14.783 4 12 4h-1V2h1c3.308 0 5.897.855 7.693 2.708C21.453 5.93 22 7.383 22 9c0 1.021-.162 1.986-.497 2.898-.65 1.785-1.939 3.144-3.815 4.017C18.34 16.972 20 18.352 20 20z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ${
            darkMode ? "focus:ring-rose-400" : "focus:ring-rose-500"
          }`}>
            Read more success stories
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}