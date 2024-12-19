const express = require("express");
const { register, login, getProfile, getAllProfiles, updateProfile, deleteProfile } = require("../controllers/userController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

// Routes
router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, getProfile);
router.get("/profiles", getAllProfiles);
router.put("/profile", authenticate, updateProfile);
router.delete("/profile", authenticate, deleteProfile);

module.exports = router;
