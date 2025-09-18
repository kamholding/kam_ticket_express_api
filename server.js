const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");
const path = require("path");
const ticketRoutes = require("./routes/tickets");
const authRoutes = require("./routes/auth");
const commentRoutes = require("./routes/comment");
const userRoutes = require("./routes/user");

// const protectedRoutes = require("./routes/protected");


dotenv.config();
const app = express();

app.use(cors({
<<<<<<< HEAD
    origin: ["http://localhost:3000","http://192.168.6.239:3000", "https://kam-ticket.onrender.com"],
=======
    origin: ["http://localhost:3000", "http://localhost:3001", "https://kam-ticket.onrender.com"],
>>>>>>> 9dc219143799ac56f2d6a2d018ab644e4dd965c6
    credentials: true // add this if you are using cookies or sessions
  }));
  
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/tickets", ticketRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/protected", protectedRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Express backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));