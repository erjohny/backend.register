import { body } from "express-validator";

export const registerValidations = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен минимум 5 символов").isLength({ min: 5 }),
  body("name", "Укажите имя").isLength({ min: 3 }),
];
