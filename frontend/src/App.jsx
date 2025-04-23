// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        {/* Page principale */}
        <Route
          path="/"
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
