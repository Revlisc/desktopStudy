import express from "express";
const router = express.Router();
import { register } from "../controllers/user.js";
import pkg from "express-validator";

const { check } = pkg;

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
  ],
  register
);

export default router;
