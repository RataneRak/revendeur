import React from "react";

const Filters = () => {
  return (
    <div className="filters flex justify-center space-x-4 py-4">
      <button className="filter-btn bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary-dark transition flex items-center space-x-2">
        <i className="fas fa-star"></i> {/* Icône pour Nouveauté */}
        <span>Nouveauté</span>
      </button>
      <button className="filter-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition flex items-center space-x-2">
        <i className="fas fa-fire"></i> {/* Icône pour Populaire */}
        <span>Populaire</span>
      </button>
    </div>
  );
};

export default Filters;
