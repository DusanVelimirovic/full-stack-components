// Default module for controlling Users endpoint

// import Express module
import express from "express";

// Import controller function
import { register, login, logout } from "../controllers/auth.js";

// Create router object
const router = express.Router();

// Handle auth request
// Use functions from auth controller
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

export default router;
