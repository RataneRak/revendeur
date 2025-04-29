import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CoverPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // État pour gérer le chargement

  const handleEnter = () => {
    setIsLoading(true); // Active le chargement
    setTimeout(() => {
      navigate("/main"); // Redirige vers la page principale après un délai
    }, 1000); // Simule un délai de 1 seconde
  };

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col">
      {/* Conteneur d'image sur fond blanc */}
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-screen flex flex-col">
          {/* Image avec bouton stylisé par-dessus */}
          <div className="flex-grow relative flex justify-center items-center bg-white">
            <img
              src="/couverture.jpeg"
              alt="Véhicule de luxe HAX CAR"
              className="w-full h-auto max-h-screen object-contain"
            />

            <button
              onClick={handleEnter}
              disabled={isLoading} // Désactive le bouton pendant le chargement
              className={`absolute bottom-1 right-10 px-6 py-3 font-bold rounded-sm border-l-4 transition-all duration-300 shadow-lg ${
                isLoading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-white text-black border-orange-500 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Chargement...
                </span>
              ) : (
                <span className="text-xl">Découvrir nos modèles</span>
              )}
            </button>
          </div>

          {/* Zone de contenu texte en bas */}
          <div className="bg-white text-black pt-6 pb-12 px-8 z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4 text-center">
                <h1 className="text-3xl font-medium tracking-widest">
                  HAX CAR KOREA AUTO
                </h1>
              </div>
              <div className="text-center mb-8">
                <p className="text-sm tracking-widest text-orange-600 font-semibold mb-2 uppercase">
                  Véhicules Premium Coréens
                </p>
                <h2 className="text-4xl font-light mb-4 text-gray-800">
                  L'Excellence Automobile
                </h2>
                <p className="text-gray-700 max-w-xl mx-auto font-medium">
                  Des véhicules sélectionnés avec soin pour une expérience
                  unique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
