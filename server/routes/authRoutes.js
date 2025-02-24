const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Ensure you have a User model
const jwt = require("jsonwebtoken");

// Middleware to verify the token
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, "your_jwt_secret"); // Use the same secret as in login
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

// Route to get user profile
router.get("/profile", authenticateUser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // Exclude password
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Error fetching user data" });
    }
});

module.exports = router;
