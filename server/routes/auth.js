import express from "express";
const router = express.Router();
import { auth } from "../middleware/auth.js";
import { login, authenticateUser } from "../controllers/auth.js";

router.post("/login", login);
router.get("/getAuth", auth, authenticateUser);

export default router;
