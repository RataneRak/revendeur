import React from "react";

const NewCars = () => {
  return (
    <div className="new-cars-page py-8 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Voitures Nouveautés
      </h1>
      <p className="text-center text-gray-600">
        Découvrez les derniers modèles ajoutés à notre collection.
      </p>
      {/* Ajoutez ici la logique pour afficher les voitures "Nouveauté" */}
    </div>
  );
};

export default NewCars;
