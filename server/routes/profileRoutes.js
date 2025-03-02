const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();

// Get user profile
router.get("/", authMiddleware, async (req, res) => {
  console.log("🔍 Received request for user profile"); // Debugging

  try {
    console.log("🛠 Searching user with ID:", req.user.id); // Debugging
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      console.log("❌ User not found in DB");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ User found:", user);
    res.json(user);
  } catch (error) {
    console.error("❌ Error fetching user data:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
