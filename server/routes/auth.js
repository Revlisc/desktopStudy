import express from "express";
const router = express.Router();
import { auth } from "../middleware/auth.js";
import { login, authenticateUser } from "../controllers/auth.js";
import pkg from "express-validator";

const { check } = pkg;

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  login
);
router.get("/getAuth", auth, authenticateUser);

export default router;
