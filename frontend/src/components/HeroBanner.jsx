import React from "react";

const HeroBanner = () => {
  const bannerStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1541446654331-595dd625e3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "4rem 1rem",
  };

  const titleStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "700",
    fontSize: "2.5rem",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#FF5E00",
    color: "white",
    border: "none",
    padding: "0.8rem 1.5rem",
    borderRadius: "25px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  return (
    <div style={bannerStyle}>
      <h1 style={titleStyle}>Trouvez la voiture de vos rêves</h1>
      <p>Explorez notre large sélection de véhicules neufs et d'occasion.</p>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#E04F00")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF5E00")}
      >
        Voir les offres
      </button>
    </div>
  );
};

export default HeroBanner;
