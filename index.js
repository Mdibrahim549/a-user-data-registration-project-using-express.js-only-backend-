const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");

// Initialize app
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Load Routes
app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
