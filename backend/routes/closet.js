const express = require("express");
const Closet = require("../models/Closet");

const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const closetItem = await Closet.create(req.body);
		return res.status(201).json(closetItem);
	} catch (error) {
		return res.status(500).json({ message: "Failed to save fragrance." });
	}
});

router.get("/", async (req, res) => {
	try {
		const closetItems = await Closet.find().sort({ createdAt: -1 });
		return res.json(closetItems);
	} catch (error) {
		return res.status(500).json({ message: "Failed to fetch fragrances." });
	}
});

module.exports = router;
