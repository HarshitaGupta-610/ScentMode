const express = require("express");
const cors = require("cors");

const passport = require("passport");
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// initialize passport strategies (backend/config/passport.js)
try { require("./config/passport"); } catch (e) { /* no-op if strategies not set up */ }
app.use(passport.initialize());

app.use("/api/recommend", require("./routes/recommend"));
app.use("/api/user", require("./routes/user"));
app.use("/auth", require("./routes/auth"));
app.use("/health", require("./routes/health"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
    // Keep server running even if no open handles (e.g. if DB fails)
    setInterval(() => {}, 1000 * 60 * 60);
});
