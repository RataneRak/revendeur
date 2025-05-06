import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-layout flex h-screen bg-gray-100">
      {/* Barre latérale */}
      <aside className="w-1/4 bg-gray-900 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-center">Panneau Admin</h2>
        <nav className="space-y-4">
          <Link
            to="/admin"
            className="flex items-center text-gray-300 hover:text-white transition"
          >
            <i className="fas fa-tachometer-alt mr-3"></i> Tableau de bord
          </Link>
          <Link
            to="/admin/manage-cars"
            className="flex items-center text-gray-300 hover:text-white transition"
          >
            <i className="fas fa-car mr-3"></i> Gérer les voitures
          </Link>
          <Link
            to="/admin/manage-categories"
            className="flex items-center text-gray-300 hover:text-white transition"
          >
            <i className="fas fa-list mr-3"></i> Gérer les catégories
          </Link>
        </nav>
        <div className="mt-auto text-center text-sm text-gray-500">
          © 2025 Hax Car Korea Auto
        </div>
      </aside>

      {/* Contenu principal */}
      <main className="w-3/4 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
