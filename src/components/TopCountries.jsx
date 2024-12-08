import React from 'react';

const TopCountries = () => {
  const topCountries = [
    {
      name: "Canada",
      image: "https://i.ibb.co.com/QvfqRCR/15a68dc4169b2e0bdb8e679a81d51d79.jpg",
      description: "Stunning natural landscapes like the Rocky Mountains and Niagara Falls, vibrant cities like Toronto and Vancouver."
    },
    {
      name: "Australia",
      image: "https://i.ibb.co.com/N3cf9Dp/australia.png",
      description: "Pristine beaches, unique wildlife, and iconic landmarks like the Great Barrier Reef and Sydney Opera House."
    },
    {
      name: "Germany",
      image: "https://i.ibb.co.com/42p26Nm/istockphoto-503874284-612x612.jpg",
      description: "Rich history, vibrant cities like Berlin and Munich, scenic countryside with forests and vineyards."
    },
    {
      name: "Japan",
      image: "https://i.ibb.co.com/wBkwwcy/Japan.jpg",
      description: "Blend of ancient temples and modern cities, cherry blossoms, and delicious cuisine like sushi and ramen."
    }
  ];

  return (
    <section className="top-countries-section py-8 bg-gradient-to-r from-teal-100 to-pink-200 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <h2 className="text-4xl text-gray-800 dark:text-gray-400">Top Countries to Visit</h2>
        <p className="text-lg text-gray-600 max-w-3xl dark:text-gray-400 mx-auto">
        Discover the best travel destinations with stunning landscapes, rich history, and unique experiences.
        </p>
        <h2 className="text-4xl font-extrasemisemibold text-gray-800 dark:text-gray-400"></h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topCountries.map((country) => (
            <div key={country.name} className="country-card bg-white dark:bg-gray-800 dark:border dark:border-gray-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">{country.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{country.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCountries;
