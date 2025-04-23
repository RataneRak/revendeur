const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let cars = []; // Liste des voitures (stockée en mémoire)

// Récupérer toutes les voitures
app.get("/api/cars", (req, res) => {
  res.json(cars);
});

// Ajouter une voiture
app.post("/api/cars", (req, res) => {
  const newCar = { id: Date.now(), ...req.body };
  cars.push(newCar);
  res.status(201).json(newCar);
});

// Supprimer une voiture
app.delete("/api/cars/:id", (req, res) => {
  const { id } = req.params;
  cars = cars.filter((car) => car.id !== parseInt(id));
  res.status(200).json({ message: "Voiture supprimée avec succès" });
});

// Mettre à jour une voiture
app.put("/api/cars/:id", (req, res) => {
  const { id } = req.params;
  const updatedCar = req.body;
  cars = cars.map((car) =>
    car.id === parseInt(id) ? { ...car, ...updatedCar } : car
  );
  res.status(200).json({ message: "Voiture mise à jour avec succès" });
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
