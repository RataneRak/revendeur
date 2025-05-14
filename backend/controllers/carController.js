import Car from "../models/Car.js"; // ✅

export async function getAllCars(req, res) {
  try {
    const cars = await Car.find(); // ✅
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getCarById(req, res) {
  try {
    const car = await Car.findById(req.params.id); // ✅
    if (!car) return res.status(404).json({ message: "Voiture non trouvée" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createCar(req, res) {
  try {
    const car = await Car.create(req.body); // ✅
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateCar(req, res) {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true }); // ✅
    if (!car) return res.status(404).json({ message: "Voiture non trouvée" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteCar(req, res) {
  try {
    const car = await Car.findByIdAndDelete(req.params.id); // ✅
    if (!car) return res.status(404).json({ message: "Voiture non trouvée" });
    res.json({ message: "Voiture supprimée" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
