const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Save a perfume
router.post('/save-perfume', async (req, res) => {
  const { uid, perfume } = req.body;

  if (!uid || !perfume) {
    return res.status(400).json({ success: false, error: "UID and perfume data are required" });
  }

  try {
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Check if perfume already saved
    const exists = user.savedPerfumes.some(p => p.id === perfume.id);
    if (exists) {
      return res.json({ success: true, message: "Perfume already saved", savedPerfumes: user.savedPerfumes });
    }

    user.savedPerfumes.push(perfume);
    await user.save();

    res.json({ success: true, message: "Perfume saved successfully", savedPerfumes: user.savedPerfumes });
  } catch (error) {
    console.error("Error saving perfume:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Get saved perfumes
router.get('/saved-perfumes/:uid', async (req, res) => {
  const { uid } = req.params;

  try {
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.json({ success: true, savedPerfumes: user.savedPerfumes });
  } catch (error) {
    console.error("Error fetching saved perfumes:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Remove a perfume
router.post('/remove-perfume', async (req, res) => {
    const { uid, perfumeId } = req.body;
  
    if (!uid || !perfumeId) {
      return res.status(400).json({ success: false, error: "UID and perfumeId are required" });
    }
  
    try {
      const user = await User.findOne({ uid });
      if (!user) {
        return res.status(404).json({ success: false, error: "User not found" });
      }
  
      user.savedPerfumes = user.savedPerfumes.filter(p => p.id !== perfumeId);
      await user.save();
  
      res.json({ success: true, message: "Perfume removed", savedPerfumes: user.savedPerfumes });
    } catch (error) {
      console.error("Error removing perfume:", error);
      res.status(500).json({ success: false, error: "Server error" });
    }
  });

module.exports = router;
