// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CoverPage from "./components/CoverPage"; // Importer la page de couverture
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import Filters from "./components/Filters";
import CallToAction from "./components/CallToAction";
import TrendingSection from "./components/TrendingSection";
import AdBanner from "./components/AdBanner";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import ManageCars from "./admin/ManageCars";
import NewCars from "./pages/NewCars";
import PopularCars from "./pages/PopularCars";

const App = () => {
  const [cars, setCars] = useState([]);

  // Récupérer les voitures depuis le backend
  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des voitures :", error)
      );
  }, []);

  return (
    <Router>
      <Routes>
        {/* Page de couverture */}
        <Route path="/cover" element={<CoverPage />} />

        {/* Redirection de `/` vers `/cover` */}
        <Route path="/" element={<Navigate to="/cover" />} />

        {/* Page principale */}
        <Route
          path="/main"
          element={
            <div>
              <Header />
              <SearchBar />
              <Categories />
              <Filters />
              <CallToAction />
              <TrendingSection cars={cars} />
              <AdBanner />
            </div>
          }
        />

        {/* Route pour les filtres */}
        <Route path="/filters" element={<Filters />} />

        {/* Route pour les voitures "Nouveauté" */}
        <Route path="/filters/new" element={<NewCars />} />

        {/* Route pour les voitures "Populaire" */}
        <Route path="/filters/popular" element={<PopularCars />} />

        {/* Pages admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route
            path="manage-cars"
            element={<ManageCars cars={cars} setCars={setCars} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
