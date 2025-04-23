import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-center py-4 shadow-md">
      <h1
        className="site-title text-4xl font-bold"
        style={{
          fontFamily: "'Nunito', sans-serif", // Police Nunito
          color: "#FF6E14", // Couleur orange vif
          textTransform: "lowercase", // Casse minuscule
        }}
      >
        hax car korea auto
      </h1>
    </header>
  );
};

export default Header;
