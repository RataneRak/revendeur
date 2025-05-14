import { Router } from "express";
const router = Router();
import { register, login } from "../controllers/userController.js";

// Inscription
router.post("/register", register);

// Connexion
router.post("/login", login);

export default router;
