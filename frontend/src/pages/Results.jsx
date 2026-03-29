import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Results() {
  const { state: prefs } = useLocation();
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/recommend", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(prefs || {}),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch recommendations");
        }

        const data = await response.json();
        setPerfumes(Array.isArray(data.recommendations) ? data.recommendations : []);
      } catch (error) {
        console.error("Recommendation fetch failed:", error);
        setPerfumes([]);
      }
    };

    fetchRecommendations();
  }, [prefs]);

  // Matching Engine: Compute score for each perfume
  const scored = perfumes
    .map((p) => {
      let score = 0;

      if (p.gender?.includes?.(prefs?.gender)) score += 3;
      if (p.ageGroup?.includes?.(prefs?.age)) score += 2;
      if (p.moods?.includes?.(prefs?.mood)) score += 3;
      if (p.outfit?.includes?.(prefs?.outfit)) score += 2;
      if (p.time?.includes?.(prefs?.timeOfDay)) score += 2;
      if (p.season?.includes?.(prefs?.season)) score += 3;
      if (p.intensity === prefs?.intensity) score += 3;

      return { ...p, score: p.score ?? score, image: p.image || "/images/placeholder.jpg" };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5); // Top 5

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8">
      <div className="mb-12">
        <Link 
          to="/preferences" 
          className="inline-flex items-center gap-2 text-[#6A3ED6] font-semibold mb-6 hover:underline"
        >
          ← Adjust Preferences
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#6A3ED6] mb-3">
          Your Perfect Matches
        </h1>

        <p className="text-lg text-gray-600">
          Based on your {prefs.mood} mood, {prefs.outfit} style & {prefs.season} season preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {scored.map((p, idx) => {
          const handleSave = async () => {
            try {
              const response = await fetch("http://localhost:5000/api/closet", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: p.name,
                  brand: p.brand,
                  notes: p.notes,
                  longevity: p.longevity,
                  sillage: p.sillage,
                  score: p.score,
                  image: p.image,

                }),
              });

              if (!response.ok) {
                throw new Error("Failed to save fragrance");
              }

              const saved = await response.json();
              console.log("Fragrance saved:", saved);
              alert("Fragrance saved!");
            } catch (error) {
              console.error("Save failed:", error);
            }
          };

          return (
            <div
              key={idx}
              className="
                bg-white/70 backdrop-blur-xl
                border border-white/50 rounded-3xl
                shadow-lg hover:shadow-2xl
                transition-all duration-500 p-7 relative
                hover:-translate-y-2
              "
            >
            <div className="relative h-56 flex justify-center items-center mb-6 bg-purple-50 rounded-2xl">
              <img
                src={p.image?.startsWith("http") ? p.image : p.image}
                alt={p.name}
                onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                className="h-full object-contain drop-shadow-2xl"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">{p.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{p.brand}</p>

            <div className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-100">
              <p className="text-xs font-semibold text-purple-700 mb-1">
                Key Notes
              </p>
              <p className="text-gray-700 text-sm">{p.notes}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center mb-5">
              <div className="bg-purple-50 p-3 rounded-xl">
                <p className="text-xs font-semibold text-purple-700">Longevity</p>
                <p className="text-gray-600 text-sm">{p.longevity}</p>
              </div>

              <div className="bg-purple-50 p-3 rounded-xl">
                <p className="text-xs font-semibold text-purple-700">Sillage</p>
                <p className="text-gray-600 text-sm">{p.sillage}</p>
              </div>

              <div className="bg-purple-50 p-3 rounded-xl">
                <p className="text-xs font-semibold text-purple-700">Score</p>
                <p className="text-gray-600 text-sm font-bold">{p.score}/15</p>
              </div>
            </div>

              <button
                className="
                  w-full py-3 rounded-full text-white font-semibold
                  bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6]
                  shadow-lg hover:scale-[1.04] transition
                "
                onClick={handleSave}
              >
                Save to Closet
              </button>
            </div>
          );
        })}
      </div>

      {scored.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No matches found. Try adjusting your preferences!</p>
          <Link 
            to="/preferences" 
            className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white rounded-full font-semibold hover:scale-[1.03] transition"
          >
            Adjust Preferences
          </Link>
        </div>
      )}
    </div>
  );
}
