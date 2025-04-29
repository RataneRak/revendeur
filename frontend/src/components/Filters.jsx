import React from "react";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const navigate = useNavigate();

  return (
    <div className="filters flex justify-center space-x-4 py-6">
      <button
        onClick={() => navigate("/filters/new")}
        className="filter-btn bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition flex items-center space-x-2 shadow-md"
      >
        <i className="fas fa-star"></i>
        <span>Nouveauté</span>
      </button>
      <button
        onClick={() => navigate("/filters/popular")}
        className="filter-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition flex items-center space-x-2 shadow-md"
      >
        <i className="fas fa-fire"></i>
        <span>Populaire</span>
      </button>
    </div>
  );
};

export default Filters;
