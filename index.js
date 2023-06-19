import express from "express";
import mongoose from "mongoose";

import { registerValidations } from "./validations/auth.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";

mongoose
  .connect("")
  .then(() => console.log("DB connect"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.post("/auth/login", UserController.login);
app.post("/auth/register", registerValidations, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.listen("3000", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Start server");
});
