import React, { useState } from "react";

const AddCarForm = ({ addCar }) => {
  const [car, setCar] = useState({
    image: null, // Stocker le fichier image
    title: "",
    price: "",
    details: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleFileChange = (e) => {
    setCar({ ...car, image: e.target.files[0] }); // Stocker le fichier sélectionné
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    if (!car.image || !car.title || !car.price || !car.details) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    setError(""); // Réinitialiser les erreurs

    // Convertir l'image en URL temporaire pour l'affichage
    const reader = new FileReader();
    reader.onload = () => {
      const newCar = {
        ...car,
        image: reader.result, // Utiliser l'URL temporaire de l'image
      };
      addCar(newCar); // Ajouter la voiture à l'état global
      setCar({ image: null, title: "", price: "", details: "" }); // Réinitialiser le formulaire
    };
    reader.readAsDataURL(car.image);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="add-car-form p-4 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Ajouter une voiture</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={car.title}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        name="price"
        placeholder="Prix"
        value={car.price}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        name="details"
        placeholder="Détails"
        value={car.details}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddCarForm;
