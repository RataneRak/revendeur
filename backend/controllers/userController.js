import User from "../models/User.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
const { sign } = jwt;

const SECRET = "your_jwt_secret"; // à déplacer dans .env en production

export async function register(req, res) {
  try {
    const { name, mail, password, role } = req.body;

    const userExists = await User.findOne({ mail }); // ✅ utiliser User.findOne
    if (userExists) {
      return res.status(400).json({ message: "Utilisateur déjà existant" });
    }

    const user = await User.create({ name, mail, password, role }); // ✅ User.create
    res.status(201).json({ message: "Inscription réussie", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { mail, password } = req.body;
    const user = await User.findOne({ mail });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    const token = sign({ id: user._id, role: user.role }, SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default { register, login };
