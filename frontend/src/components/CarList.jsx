import React from "react";

const CarList = ({ cars, category }) => {
  const filteredCars = cars.filter(
    (car) =>
      car.category && car.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredCars.length === 0) {
    return (
      <div className="text-center text-gray-600 py-8">
        Aucune voiture trouvée pour la catégorie "{category}".
      </div>
    );
  }

  return (
    <div className="car-list py-8 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Voitures de la catégorie {category}
      </h2>
      <div
        className="car-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="car-card bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 transition"
            style={{
              border: "1px solid #E9ECEF",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
          >
            <img
              src={car.image}
              alt={car.title}
              className="car-image"
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
              }}
            />
            <div
              className="car-info p-4"
              style={{
                padding: "1rem",
              }}
            >
              <h4
                className="car-title font-bold text-lg"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {car.title}
              </h4>
              <div
                className="car-price text-primary font-bold text-xl"
                style={{
                  color: "#FF5E00",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {car.price}
              </div>
              <div
                className="car-details text-sm text-dark"
                style={{
                  color: "#495057",
                  fontSize: "0.9rem",
                }}
              >
                {car.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
