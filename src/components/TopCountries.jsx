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
      image: "https://i.ibb.co.com/42p26Nm/istockphoto-503874284-612x612.jpg",
      description: "Pristine beaches, unique wildlife, and iconic landmarks like the Great Barrier Reef and Sydney Opera House."
    },
    {
      name: "Germany",
      image: "https://i.ibb.co.com/N3cf9Dp/australia.png",
      description: "Rich history, vibrant cities like Berlin and Munich, scenic countryside with forests and vineyards."
    },
    {
      name: "Japan",
      image: "https://i.ibb.co.com/wBkwwcy/Japan.jpg",
      description: "Blend of ancient temples and modern cities, cherry blossoms, and delicious cuisine like sushi and ramen."
    }
  ];

  return (
    <section className="top-countries-section py-8 bg-gradient-to-br from-blue-100 via-green-100 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Countries to Visit</h2>
        <p className="text-gray-600 mb-8">Discover the best travel destinations with stunning landscapes, rich history, and unique experiences.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topCountries.map((country) => (
            <div key={country.name} className="country-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{country.name}</h3>
                <p className="text-gray-600 text-sm">{country.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCountries;
