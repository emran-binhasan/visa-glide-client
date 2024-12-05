import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../assets/slider/1.png';
import img2 from '../assets/slider/2.png';
import img3 from '../assets/slider/3.png';
import img4 from '../assets/slider/4.png';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1} // Always one slide visible
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop
      autoplay={{
        delay: 8000, // Slow autoplay (8 seconds per slide)
        disableOnInteraction: false,
      }}
      className="mySwiper container mx-auto border border-gray-300  shadow-lg"
    >
      {/* Slide 1 */}
      <SwiperSlide className="relative">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={img1}
            alt="Simplified Visa Requirements"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-40 px-8 md:px-16 text-white">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium animate-fadeIn">
              Simplified Visa Requirements
            </h2>
            <p className="text-sm md:text-xl mt-4 animate-fadeIn delay-200">
              Easily find the visa requirements for your destination. Get clear, up-to-date information tailored to your travel needs.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="relative">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={img2}
            alt="Streamlined Application Process"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-40 px-8 md:px-16 text-white">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium animate-fadeIn">
              Streamlined Application Process
            </h2>
            <p className="text-sm md:text-xl mt-4 animate-fadeIn delay-200">
              Submit your visa application online with an easy-to-use platform. Enjoy a smooth, paperless process designed for efficiency.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide className="relative">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={img3}
            alt="Track Your Application in Real-Time"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-40 px-8 md:px-16 text-white">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium animate-fadeIn">
              Real-Time Application Tracking
            </h2>
            <p className="text-sm md:text-xl mt-4 animate-fadeIn delay-200">
              Stay updated on your visa status at every stage. Get real-time notifications to keep your travel plans on track.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide className="relative">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={img4}
            alt="Expert Support When You Need It"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-40 px-8 md:px-16 text-white">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium animate-fadeIn">
              Expert Support When You Need It
            </h2>
            <p className="text-sm md:text-xl mt-4 animate-fadeIn delay-200">
              Get personalized guidance from visa experts. We’re here to assist with documentation, timelines, and any questions you have.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
