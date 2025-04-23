import React from "react";

const CategoriesMenu = () => {
  const categories = ["Immobilier", "Véhicules", "Vacances", "Emploi", "Mode"];

  return (
    <div className="categories bg-white shadow-sm py-3 px-6 flex justify-center space-x-4 overflow-x-auto">
      {categories.map((category, index) => (
        <button
          key={index}
          className="category text-gray-700 font-medium hover:text-orange-500 transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoriesMenu;
