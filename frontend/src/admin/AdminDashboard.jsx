import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-700">Voitures</h2>
          <p className="text-4xl font-bold text-primary mt-2">12</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-700">Utilisateurs</h2>
          <p className="text-4xl font-bold text-primary mt-2">5</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold text-gray-700">Annonces</h2>
          <p className="text-4xl font-bold text-primary mt-2">8</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
