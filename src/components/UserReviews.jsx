import { FaStar } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const UserReviews = () => {
  const reviews = [
    {
      name: "James Smith",
      photo: "https://i.ibb.co.com/RyPnBPj/avator1.jpg",
      rating: 5,
      review:
        "Visa Glide has simplified the visa application process for me. The step-by-step guidance and clear instructions make it easy to manage visa applications.",
    },
    {
      name: "Sara Rahman",
      photo: "https://i.ibb.co.com/x84QZNW/avator2.jpg",
      rating: 4,
      review:
        "I appreciate the real-time status updates. It’s incredibly helpful to know exactly where my visa application stands.",
    },
    {
      name: "Sophia Lee",
      photo: "https://i.ibb.co.com/b1qNyV3/avatar3.jpg",
      rating: 4.5,
      review:
        "The user interface is intuitive and the support team is very responsive. I feel confident about using Visa Glide for all my visa needs.",
    },
  ];

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">
            <Slide direction="up" triggerOnce>
              <span>What Our Users Say</span>
            </Slide>
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
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
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
                {/* User Info */}
                <div className="flex items-center mb-6">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 text-xl">{review.name}</h4>
                    <div className="flex items-center text-yellow-400 text-sm">
                      {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                      {review.rating % 1 !== 0 && (
                        <FaStar className="half-filled text-yellow-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm">{review.review}</p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
