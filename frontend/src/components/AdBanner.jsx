import React from "react";

const AdBanner = () => {
  return (
    <div className="bg-orange-100 py-6 text-center rounded-lg shadow-md">
      <p className="text-gray-700 text-lg">
        Besoin d'un prêt rapide ? Découvrez nos solutions adaptées.
      </p>
      <a
        href="#"
        className="text-orange-500 font-medium hover:underline transition"
      >
        En savoir plus
      </a>
    </div>
  );
};

export default AdBanner;
