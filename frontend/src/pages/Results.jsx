import { useLocation, useNavigate } from "react-router-dom";
import  perfumes from "../constants/perfumes";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useState } from "react";

export default function Results() {
  const { state: prefs } = useLocation();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(null);

  const handleSave = async (perfume) => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setSaving(perfume.id);
    try {
      await axios.post("http://localhost:5000/api/user/save-perfume", {
        uid: currentUser.uid,
        perfume
      });
      alert("Perfume added to your closet!");
    } catch (error) {
      console.error("Error saving perfume:", error);
      alert("Failed to save perfume.");
    } finally {
      setSaving(null);
    }
  };

  // Matching Engine: Compute score for each perfume
  const scored = perfumes
    .map((p) => {
      let score = 0;

      if (p.gender.includes(prefs.gender)) score += 3;
      if (p.ageGroup.includes(prefs.age)) score += 2;
      if (p.moods.includes(prefs.mood)) score += 3;
      if (p.outfit.includes(prefs.outfit)) score += 2;
      if (p.time.includes(prefs.timeOfDay)) score += 2;
      if (p.season.includes(prefs.season)) score += 3;
      if (p.intensity === prefs.intensity) score += 3;

      return { ...p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5); // Top 5

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-[#6A3ED6] mb-3">
        Your Perfect Matches
      </h1>

      <p className="text-gray-600 text-lg mb-12">
        Based on your selected mood, outfit, time, season & intensity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {scored.map((p, idx) => (
          <div
            key={idx}
            className="
              bg-white/70 backdrop-blur-2xl
              border border-white/50 rounded-3xl
              shadow-[0_15px_40px_rgba(106,62,214,0.15)]
              hover:shadow-[0_25px_60px_rgba(106,62,214,0.35)]
              transition-all duration-500 p-7 relative
              hover:-translate-y-2
            "
          >
            <div className="relative h-56 flex justify-center items-center mb-6">
              <img
                src={p.image}
                alt={p.name}
                className="h-full object-contain drop-shadow-2xl animate-float"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">{p.name}</h2>
            <p className="text-gray-500 mb-4">{p.brand}</p>

            <div className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-100">
              <p className="text-xs font-semibold text-purple-700">
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
                <p className="text-xs font-semibold text-purple-700">Occasion</p>
                <p className="text-gray-600 text-sm">{p.occasions.join(", ")}</p>
              </div>
            </div>

            <button
              onClick={() => handleSave(p)}
              disabled={saving === p.id}
              className="
                w-full py-3 rounded-full text-white font-semibold
                bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6]
                shadow-lg hover:scale-[1.04] transition
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {saving === p.id ? "Saving..." : "Add to Closet"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
