import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Icône menu */}
      <button className="text-gray-600 text-2xl">
        <i className="fas fa-bars"></i> {/* Icône de menu */}
      </button>

      {/* Barre de recherche */}
      <div className="flex items-center bg-white border-2 border-medium rounded-full px-4 py-2 w-2/3 shadow-md">
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-transparent flex-1 outline-none text-gray-700"
        />
        <button className="text-orange-500">
          <i className="fas fa-search"></i> {/* Icône de recherche */}
        </button>
      </div>

      {/* Icônes actions */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600">
          <i className="fas fa-heart"></i> {/* Icône de favoris */}
        </button>
        <button className="text-gray-600">
          <i className="fas fa-user"></i> {/* Icône de profil */}
        </button>
        <button className="text-gray-600">
          <i className="fas fa-bell"></i> {/* Icône de notifications */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
