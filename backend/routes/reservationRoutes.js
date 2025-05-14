import { Router } from "express";
const router = Router();
import { createReservation, getUserReservations, getAllReservations, updateReservationStatus } from "../controllers/reservationController.js";
import auth from "../middleware/auth.js";

// Créer une réservation (utilisateur connecté)
router.post("/", auth, createReservation);

// Voir ses réservations
router.get("/me", auth, getUserReservations);

// Voir toutes les réservations (admin)
router.get("/", auth, getAllReservations);

// Modifier statut (admin)
router.put("/:id", auth, updateReservationStatus);

export default router;
