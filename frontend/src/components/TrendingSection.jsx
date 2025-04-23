import React, { useState } from "react";

const TrendingSection = ({ cars, deleteCar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

  // Calculer les voitures à afficher
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  return (
    <div className="trending-section py-8 px-6">
      <h2 className="text-2xl font-bold text-secondary mb-6">
        Tendance en ce moment
      </h2>
      <div className="car-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCars.length > 0 ? (
          currentCars.map((car, index) => (
            <div
              key={index}
              className="car-card bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.title}
                className="car-image w-full h-40 object-cover"
              />
              <div className="car-info p-4">
                <h3 className="car-title font-bold text-lg">{car.title}</h3>
                <div className="car-price text-primary font-bold text-xl">
                  {car.price}
                </div>
                <div className="car-details text-sm text-dark">
                  {car.details}
                </div>
                <button
                  onClick={() => deleteCar(index)}
                  className="mt-2 text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Aucune voiture disponible.
          </p>
        )}
      </div>
      {/* Pagination */}
      <div className="pagination mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
