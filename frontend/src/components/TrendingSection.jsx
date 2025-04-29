import React, { useState } from "react";

const TrendingSection = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  return (
    <div className="trending-section py-8 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Tendance en ce moment
      </h2>
      <div className="car-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCars.length > 0 ? (
          currentCars.map((car, index) => (
            <div
              key={index}
              className="car-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={car.image}
                alt={car.title}
                className="car-image w-full h-40 object-cover"
              />
              <div className="car-info p-4">
                <h3 className="car-title font-bold text-lg text-gray-800">
                  {car.title}
                </h3>
                <div className="car-price text-orange-500 font-bold text-xl">
                  {car.price}
                </div>
                <div className="car-details text-sm text-gray-600">
                  {car.details}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Aucune voiture disponible.
          </p>
        )}
      </div>
      <div className="pagination mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-orange-400 transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
