import { Router } from "express";
const router = Router();

router.post("/register", (req, res) => {
  res.status(201).json({ message: "Usuario Registrado" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Usuario Logeado" });
});

export default router;
