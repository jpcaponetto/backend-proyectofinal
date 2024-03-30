import { Router } from "express";

import authRoutes from "./auth/auth.routes.js";
import userRoutes from "./user.routes.js";
import paymentRoutes from "./payments.routes.js";
const router = Router();
router.use("/payment", paymentRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
