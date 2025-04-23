import React from "react";

const FeaturedCars = () => {
  const cars = [
    {
      image:
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      title: "Hyundai Tucson 2022",
      price: "24 900 €",
      details: "25 000 km • Diesel • 136 ch",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      title: "Kia Sportage GT Line",
      price: "28 500 €",
      details: "18 000 km • Essence • 180 ch",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      title: "Toyota RAV4 Hybrid",
      price: "32 750 €",
      details: "12 500 km • Hybride • 218 ch",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      title: "Ford Puma ST-Line",
      price: "21 300 €",
      details: "30 000 km • Essence • 125 ch",
    },
  ];

  return (
    <div className="featured-cars py-8">
      <h2 className="text-center text-2xl font-bold mb-6">
        Voitures en vedette
      </h2>
      <div
        className="car-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {cars.map((car, index) => (
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

export default FeaturedCars;
