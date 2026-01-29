const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
  
  res.json({
    status: "OK",
    message: "ScentMode backend is live 🚀",
    database: dbStatus
  });
});

module.exports = router;
