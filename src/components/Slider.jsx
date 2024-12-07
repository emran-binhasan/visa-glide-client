import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Typewriter } from 'react-simple-typewriter';
import img1 from '../assets/slider/1.png';
import img2 from '../assets/slider/2.png';
import img3 from '../assets/slider/3.png';
import img4 from '../assets/slider/4.png';

const slides = [
  {
    img: img1,
    title: 'Simplified Visa Requirements',
    description: 'Easily find the visa requirements for your destination. Get clear, up-to-date information tailored to your travel needs.',
  },
  {
    img: img2,
    title: 'Streamlined Application Process',
    description: 'Submit your visa application online with an easy-to-use platform. Enjoy a smooth, paperless process designed for efficiency.',
  },
  {
    img: img3,
    title: 'Real-Time Application Tracking',
    description: 'Stay updated on your visa status at every stage. Get real-time notifications to keep your travel plans on track.',
  },
  {
    img: img4,
    title: 'Expert Support When You Need It',
    description: 'Get personalized guidance from visa experts. We’re here to assist with documentation, timelines, and any questions you have.',
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      className="mySwiper container mx-auto border border-gray-300 shadow-lg"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={slide.img}
              alt={slide.title}
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-40 px-8 md:px-16 text-white">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium animate-fadeIn">
                <Typewriter
                  words={[slide.title]}
                  loop
                  cursor
                  typeSpeed={100}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </h2>
              <p className="text-sm md:text-xl mt-4 animate-fadeIn delay-200">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
