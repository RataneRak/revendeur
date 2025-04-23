import React, { useState } from "react";

const ManageCars = ({ cars, setCars }) => {
  const [carForm, setCarForm] = useState({
    id: null,
    image: "",
    title: "",
    price: "",
    details: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarForm({ ...carForm, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCarForm({ ...carForm, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    if (
      !carForm.title ||
      !carForm.price ||
      !carForm.details ||
      !carForm.image
    ) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    if (isEditing) {
      // Mise à jour
      fetch(`http://localhost:5000/api/cars/${carForm.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carForm),
      })
        .then((response) => response.json())
        .then(() => {
          setCars((prevCars) =>
            prevCars.map((car) => (car.id === carForm.id ? carForm : car))
          );
          setIsEditing(false);
          setCarForm({
            id: null,
            image: "",
            title: "",
            price: "",
            details: "",
          });
        })
        .catch((error) =>
          console.error("Erreur lors de la mise à jour :", error)
        );
    } else {
      // Ajout
      fetch("http://localhost:5000/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carForm),
      })
        .then((response) => response.json())
        .then((newCar) => {
          setCars((prevCars) => [...prevCars, newCar]);
          setCarForm({
            id: null,
            image: "",
            title: "",
            price: "",
            details: "",
          });
        })
        .catch((error) => console.error("Erreur lors de l'ajout :", error));
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/cars/${id}`, { method: "DELETE" }).then(
      () => {
        setCars((prevCars) => prevCars.filter((car) => car.id !== id));
      }
    );
  };

  const handleEdit = (car) => {
    setCarForm(car);
    setIsEditing(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gérer les voitures</h1>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 mb-8"
      >
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Modifier une voiture" : "Ajouter une voiture"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={carForm.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="price"
            placeholder="Prix"
            value={carForm.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="details"
            placeholder="Détails"
            value={carForm.details}
            onChange={handleChange}
            className="w-full p-2 border rounded col-span-2"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
          >
            {isEditing ? "Mettre à jour" : "Ajouter"}
          </button>
        </div>
      </form>

      {/* Liste des voitures */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold">{car.title}</h3>
            <p className="text-primary font-bold">{car.price}</p>
            <p className="text-gray-600 text-sm">{car.details}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleEdit(car)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(car.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCars;
