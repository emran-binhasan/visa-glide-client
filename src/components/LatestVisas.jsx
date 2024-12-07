import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LatestVisas = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the limited visas from the backend
    const fetchLatestVisas = async () => {
      try {
        const response = await fetch('http://localhost:5000/visas/6')
        const data = await response.json();
        setLatestVisas(data);
      } catch (error) {
        console.error("Error fetching latest visas:", error);
      }
    };
    fetchLatestVisas();
  }, []);

  return (
    <section className="latest-visas-section py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Latest Visas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {latestVisas.map((visa) => (
            <div
              key={visa.id}
              className="visa-card border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <img
                src={visa.countryImage}
                alt={`${visa.country} flag`}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{visa.country}</h3>
                <p className="text-gray-600 text-sm mb-1"><strong>Visa Type:</strong> {visa.visaType}</p>
                <p className="text-gray-600 text-sm mb-1"><strong>Processing Time:</strong> {visa.processingTime}</p>
                <p className="text-gray-600 text-sm mb-1"><strong>Fee:</strong> ${visa.fee}</p>
                <p className="text-gray-600 text-sm mb-1"><strong>Validity:</strong> {visa.validity}</p>
                <p className="text-gray-600 text-sm mb-4"><strong>Application Method:</strong> {visa.applicationMethod}</p>
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => navigate(`/visa/${visa._id}`)}
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors"
            onClick={() => navigate("/all-visa")}
          >
            See All Visas
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestVisas;
