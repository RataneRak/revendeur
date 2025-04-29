import React from "react";

const SearchBar = () => {
  return (
    <div className="search-container bg-gray-100 py-8">
      <div className="search-bar flex mx-auto max-w-3xl border-2 border-gray-300 rounded-full shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <input
          type="text"
          className="search-input flex-1 px-6 py-3 outline-none text-gray-700 text-lg"
          placeholder="Rechercher des véhicules, marques ou modèles..."
        />
        <button className="search-button bg-orange-500 text-white px-8 flex items-center justify-center hover:bg-orange-600 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
