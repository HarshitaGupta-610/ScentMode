import perfumes from "../constants/perfumes";

function scorePerfume(user, perfume) {
  let score = 0;

  // Bonus for gender match
  if (perfume.gender === user.gender || perfume.gender === "Unisex") {
    score += 5;
  }

  const fields = ["age", "mood", "outfit", "season", "timeOfDay", "intensity"];

  fields.forEach((field) => {
    const userChoice = user[field];
    if (userChoice && perfume.weights[field][userChoice] !== undefined) {
      score += perfume.weights[field][userChoice];
    }
  });

  return score;
}

export function getRecommendations(user) {
  const scored = perfumes
    .map((p) => ({
      ...p,
      score: scorePerfume(user, p),
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 5);
}
