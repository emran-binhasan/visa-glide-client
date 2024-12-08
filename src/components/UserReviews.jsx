import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const UserReviews = () => {
  const reviews = [
    {
      name: "James Smith",
      photo: "https://i.ibb.co/RyPnBPj/avator1.jpg",
      rating: 5,
      review:
      'Visa Glide simplifies the visa process with clear steps and guidance, making it easy and stress-free to manage applications efficiently.'
    },
    {
      name: "Sara Rahman",
      photo: "https://i.ibb.co/x84QZNW/avator2.jpg",
      rating: 4,
      review:
       "I appreciate the real-time updates. They provide clarity and make tracking my visa application simple and free of unnecessary confusion."
    },
    {
      name: "Tom Lee",
      photo: "https://i.ibb.co/b1qNyV3/avatar3.jpg",
      rating: 4.5,
      review:
       "The interface is user-friendly, and the support team is responsive. Visa Glide makes managing visa needs straightforward and reliable."
    },
  ];

  return (
    <section className="bg-gray-50 py-14 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-4xl text-gray-800 dark:text-gray-400">
            <Slide direction="up" triggerOnce>
              <span>What Our Users Say</span>
            </Slide>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl dark:text-gray-400 mx-auto">
            <Slide direction="up" triggerOnce>
              <Typewriter
                words={["Hear from users who have successfully managed their visa applications with us."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </Slide>
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Slide
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              triggerOnce
              delay={100 * index} // stagger effect
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border dark:border-gray-700">
                {/* User Info */}
                <div className="flex items-center mb-6">
                  <img
                    src={review.photo}
                    alt={`${review.name}'s photo`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white text-lg">{review.name}</h4>
                    <div className="flex items-center text-yellow-400">
                      {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                      {review.rating % 1 !== 0 && <FaStarHalfAlt />}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {review.review}
                </p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
