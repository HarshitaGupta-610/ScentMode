const express = require("express");
const router = express.Router();
const { getRecommendations } = require("../controllers/recommender.controller");

router.post("/", getRecommendations);

module.exports = router;
