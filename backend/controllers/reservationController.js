import Reservation from "../models/Reservation.js"; // Importer le modèle Reservation

// Récupérer toutes les réservations
export async function getAllReservations(req, res) {
  try {
    const reservations = await Reservation.find(); // Récupérer toutes les réservations
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Créer une nouvelle réservation
export async function createReservation(req, res) {
  try {
    const reservation = await Reservation.create(req.body); // Créer une réservation
    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Mettre à jour l'état d'une réservation (ex : confirmation, annulation)
export async function updateReservationStatus(req, res) {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reservation) return res.status(404).json({ message: "Réservation non trouvée" });
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Récupérer les réservations d'un utilisateur spécifique
export async function getUserReservations(req, res) {
  try {
    const userId = req.params.userId; // Récupérer l'ID de l'utilisateur
    const reservations = await Reservation.find({ user: userId }); // Chercher les réservations pour cet utilisateur
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default { 
  createReservation, 
  getUserReservations, 
  getAllReservations, 
  updateReservationStatus 
};
