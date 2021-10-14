import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
//import cors from 'cors';
import dotenv from "dotenv";

import userRouter from "./routes/user.js";

const app = express();
//dotenv is required to access .env variables
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//app.use(cors());

app.use("/user", userRouter);

//mongo

const CONNECTION_URL = process.env.CONNECTION;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);

//todo
// return error if all fields are not entered during user registration
// check if email is valid during registration
//require password length?
