import React from "react";

const SearchBar = () => {
  return (
    <div className="search-container bg-white py-4">
      <div className="search-bar flex mx-auto max-w-2xl border-2 border-medium rounded-full shadow-md overflow-hidden">
        <input
          type="text"
          className="search-input flex-1 px-4 py-2 outline-none"
          placeholder="Rechercher des véhicules..."
        />
        <button className="search-button bg-primary text-white px-6 flex items-center justify-center">
          <i className="fas fa-search"></i> {/* Icône de recherche */}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
