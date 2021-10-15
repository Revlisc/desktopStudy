import express from "express";
const router = express.Router();
import { login, authenticateUser } from "../controllers/auth.js";

router.post("/login", login);
router.get("/auth", auth, authenticateUser);

export default router;
