const express = require('express');
const router = express.Router();
const perfumes = require('../config/perfumeData');

function mapAgeToNumber(ageStr) {
  switch (ageStr) {
    case '<18': return 16;
    case '18-25': return 21;
    case '26-35': return 30;
    case '36-45': return 40;
    case '45+': return 55;
    default: return null;
  }
}

function scorePerfume(user, perfume) {
  let score = 0;

  // Gender match (bonus)
  if ((perfume.gender && perfume.gender.includes && perfume.gender.includes(user.gender)) || (perfume.gender && perfume.gender === 'Unisex') ) {
    score += 5;
  }

  // Age proximity
  const userAgeNum = mapAgeToNumber(user.age);
  if (userAgeNum && perfume.ageRange) {
    const [min, max] = perfume.ageRange;
    if (userAgeNum >= min && userAgeNum <= max) score += 3;
  }

  // Mood
  if (user.mood && perfume.moods && perfume.moods.includes(user.mood)) score += 3;

  // Outfit
  if (user.outfit && perfume.outfitStyles && perfume.outfitStyles.includes(user.outfit)) score += 2;

  // Season
  if (user.season && perfume.seasons && perfume.seasons.includes(user.season)) score += 1;

  // Time of day
  if (user.timeOfDay && perfume.timeOfDay && perfume.timeOfDay.includes(user.timeOfDay)) score += 1;

  // Intensity
  if (user.intensity && perfume.intensity && perfume.intensity === user.intensity) score += 2;

  return score;
}

router.post('/', (req, res) => {
  const user = req.body;
  if (!user) return res.status(400).json({ error: 'User preferences required in request body' });

  const scored = perfumes
    .map(p => ({ ...p, score: scorePerfume(user, p) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  res.json({ recommendations: scored });
});

module.exports = router;

