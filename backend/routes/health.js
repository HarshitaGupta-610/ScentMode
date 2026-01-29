const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "ScentMode backend is live 🚀"
  });
});

module.exports = router;
