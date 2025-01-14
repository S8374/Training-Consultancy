import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'animate.css';

export default function Hero() {
  return (
    <div className="relative w-full font-sans uppercase">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1176438482/photo/digital-lifestyle-blog-writer-or-business-person-using-smart-device-working-on-internet.jpg?s=612x612&w=0&k=20&c=Vm22H_raAHUYqrF7kUe6-f8bNf6GcqhNlHisyLEPXE0="
              alt="Professional Business Consulting"
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
              <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">Professional Business Consulting</h1>
                <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeInUp">
                  Expert services tailored to help your business thrive.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 animate__animated animate__fadeIn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=QodY8pXN5DbLs3-FhwWhhYKnsOE4Iixky_SwdGitwnQ="
              alt="Financial Growth Strategies"
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
              <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">Financial Growth Strategies</h1>
                <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeInUp">
                  Innovative solutions for sustainable success.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 animate__animated animate__fadeIn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1159988314/photo/girl-browsing-work-opportunities-online-on-laptop.jpg?s=612x612&w=0&k=20&c=ru2DARgc0UdYUIi1pzdVihqVC9vwKK8rMNmgQgtUZxA="
              alt="Strategic Consulting"
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
              <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">Strategic Consulting</h1>
                <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeInUp">
                  Tailored advice to drive your business forward.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 animate__animated animate__fadeIn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-10">
        <FaArrowLeft size={30} />
      </div>
      <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-white z-10">
        <FaArrowRight size={30} />
      </div>
    </div>
  );
}
