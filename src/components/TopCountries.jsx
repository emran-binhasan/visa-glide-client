
const TopCountries = () => {
    const topCountries = [
      { name: "Canada", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL70U9_kPcXI4bWcesUb9a-fLv8qvS7dokGg&s" },
      { name: "Australia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL70U9_kPcXI4bWcesUb9a-fLv8qvS7dokGg&s" },
      { name: "Germany", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL70U9_kPcXI4bWcesUb9a-fLv8qvS7dokGg&s" },
      { name: "Japan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL70U9_kPcXI4bWcesUb9a-fLv8qvS7dokGg&s" },
    ];
  
    return (
      <section className="top-countries-section py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Top Countries to Visit</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {topCountries.map((country) => (
            <div key={country.name} className="country-card text-center">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{country.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TopCountries;