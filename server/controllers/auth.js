import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import config from "config";
import pkg from "express-validator";

const { validationResult } = pkg;
//log in user and get token
export const login = async (req, res) => {
  //check for errors returned by express validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    //return token

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;

      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//authenticate logged in user with token. req.user.id comes from auth middleware

export const authenticateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    err.status(500).send("Server Error");
  }
};
