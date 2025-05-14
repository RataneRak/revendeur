import { Router } from "express";
const router = Router();
import { getAllCars, getCarById, createCar, updateCar, deleteCar } from "../controllers/carController.js";
import auth from "../middleware/auth.js";

// Routes publiques
router.get("/", getAllCars);
router.get("/:id", getCarById);

// Routes protégées (ex : admin)
router.post("/", auth, createCar);
router.put("/:id", auth, updateCar);
router.delete("/:id", auth, deleteCar);

export default router;
