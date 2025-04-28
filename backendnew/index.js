const fs = require("fs");
const path = require("path");

// Check if 'uploads' directory exists, create it if not
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // Create directory and all necessary subdirectories
}

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const contactRoutes = require("./routes/contactRoutes");
const jobRoutes = require("./routes/jobRoutes");
const newsRoutes = require("./routes/newsRoutes");
const blogRoutes = require("./controllers/blog_controller");
const app = express();

app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/contacts", contactRoutes);
app.use("/jobs", jobRoutes);
app.use("/news", newsRoutes);
app.use ("/blogs", blogRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`my server is ${PORT}`));
