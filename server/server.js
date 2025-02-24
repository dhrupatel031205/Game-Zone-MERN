const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json()); // Ensure JSON body parsing

mongoose.connect("mongodb://localhost:27017/GameZone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// SIGNUP ROUTE
app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.json({ message: "Signup successful", token: "dummy-jwt-token" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN ROUTE
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", token: "dummy-jwt-token" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
const jwt = require("jsonwebtoken");
const SECRET_KEY = ""; // Replace with your actual secret key

app.get("/api/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Get token without "Bearer "
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    // Verify JWT
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));
