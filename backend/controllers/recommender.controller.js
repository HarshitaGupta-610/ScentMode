const perfumes = require("../config/perfumeData");

/**
 * Weighted scoring system
 * Similar to Netflix / Spotify ranking logic
 */
function scorePerfume(perfume, input) {
  let score = 0;

  if (perfume.moods.includes(input.mood)) score += 20;
  if (perfume.outfitStyles.includes(input.outfitStyle)) score += 20;
  if (perfume.timeOfDay.includes(input.timeOfDay)) score += 15;
  if (perfume.seasons.includes(input.season)) score += 15;
  if (perfume.intensity === input.intensity) score += 15;
  if (perfume.gender.includes(input.gender)) score += 10;
  if (input.age >= perfume.ageRange[0] && input.age <= perfume.ageRange[1]) score += 10;

  return score;
}

exports.getRecommendations = (req, res) => {
  const input = req.body;

  // Rank ALL perfumes
  const ranked = perfumes
    .map(perfume => ({
      ...perfume,
      score: scorePerfume(perfume, input),
      reason: `Matches your ${input.mood} mood, ${input.outfitStyle} outfit, ${input.timeOfDay} timing, and ${input.intensity} intensity`
    }))
    .sort((a, b) => b.score - a.score);

  // Always return top 5
  const topFive = ranked.slice(0, 5);

  res.json({
    success: true,
    user: input.name,
    totalEvaluated: perfumes.length,
    recommendations: topFive
  });
};
