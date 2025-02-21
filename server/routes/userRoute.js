import { register, login, logout } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/logout", logout);

export default router;
