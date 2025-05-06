import React, { useState, useEffect } from "react";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryForm, setCategoryForm] = useState({
    id: null,
    name: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) =>
        console.error("Erreur lors de la récupération des catégories :", err)
      );
  }, []);

  const handleChange = (e) => {
    setCategoryForm({ ...categoryForm, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryForm.name) {
      alert("Le nom de la catégorie est obligatoire !");
      return;
    }

    if (isEditing) {
      fetch(`http://localhost:5000/api/categories/${categoryForm.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryForm),
      })
        .then(() => {
          setCategories(
            categories.map((cat) =>
              cat.id === categoryForm.id ? categoryForm : cat
            )
          );
          setIsEditing(false);
          setCategoryForm({ id: null, name: "" });
        })
        .catch((err) => console.error("Erreur lors de la mise à jour :", err));
    } else {
      fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryForm),
      })
        .then((res) => res.json())
        .then((newCategory) => {
          setCategories([...categories, newCategory]);
          setCategoryForm({ id: null, name: "" });
        })
        .catch((err) => console.error("Erreur lors de l'ajout :", err));
    }
  };

  const handleEdit = (category) => {
    setCategoryForm(category);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/categories/${id}`, { method: "DELETE" })
      .then(() => {
        setCategories(categories.filter((cat) => cat.id !== id));
      })
      .catch((err) => console.error("Erreur lors de la suppression :", err));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gérer les catégories</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 mb-8"
      >
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Modifier une catégorie" : "Ajouter une catégorie"}
        </h2>
        <input
          type="text"
          placeholder="Nom de la catégorie"
          value={categoryForm.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
        >
          {isEditing ? "Mettre à jour" : "Ajouter"}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition"
          >
            <h3 className="text-lg font-bold mb-2">{category.name}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(category)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDelete(category.id)}
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

export default ManageCategories;
