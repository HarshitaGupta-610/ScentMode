import { useState } from "react";
import options from "../constants/options";
import { useNavigate } from "react-router-dom";

export default function PreferenceForm() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    gender: "",
    age: "",
    mood: "",
    outfit: "",
    timeOfDay: "",
    season: "",
    intensity: "",
  });

  const handleSelect = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const isFormComplete = form.gender && form.age && form.mood && form.outfit && form.timeOfDay && form.season && form.intensity;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#6A3ED6] mb-3">
          Personalize Your Scent
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tell us about you — we'll handle the fragrance magic ✨
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 md:p-12">
        
        {/* Multi-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* COLUMN 1: Basic Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#6A3ED6]">Basic Info</h3>
            
            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3\">Gender</label>
              <div className="space-y-2\">
                {["Male", "Female", "Unisex"].map((g) => (
                  <button
                    key={g}
                    onClick={() => handleSelect("gender", g)}
                    className={`block w-full px-4 py-2 rounded-lg border-2 text-sm font-medium transition
                    ${form.gender === g 
                      ? "bg-[#6A3ED6] text-white border-[#6A3ED6]" 
                      : "border-gray-200 bg-white text-gray-700 hover:border-[#6A3ED6]"}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3\">Age</label>
              <div className="space-y-2\">
                {["<18", "18-25", "26-35", "36-45", "45+"].map((a) => (
                  <button
                    key={a}
                    onClick={() => handleSelect("age", a)}
                    className={`block w-full px-4 py-2 rounded-lg border-2 text-sm font-medium transition
                    ${form.age === a 
                      ? "bg-[#6A3ED6] text-white border-[#6A3ED6]" 
                      : "border-gray-200 bg-white text-gray-700 hover:border-[#6A3ED6]"}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Mood */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#6A3ED6] mb-6\">Mood</h3>
            <div className="space-y-2\">
              {options.moods.map((m) => (
                <button
                  key={m}
                  onClick={() => handleSelect("mood", m)}
                  className={`block w-full px-4 py-2 rounded-lg border-2 text-sm font-medium transition
                  ${form.mood === m 
                    ? "bg-[#6A3ED6] text-white border-[#6A3ED6]" 
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#6A3ED6]"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Outfit Style */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#6A3ED6] mb-6\">Outfit Style</h3>
            <div className="space-y-2\">
              {options.outfitStyles.map((o) => (
                <button
                  key={o}
                  onClick={() => handleSelect("outfit", o)}
                  className={`block w-full px-4 py-2 rounded-lg border-2 text-sm font-medium transition
                  ${form.outfit === o 
                    ? "bg-[#6A3ED6] text-white border-[#6A3ED6]" 
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#6A3ED6]"}`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          {/* COLUMN 4: Time of Day */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#6A3ED6] mb-6\">Time of Day</h3>
            <div className="space-y-2\">
              {options.timeOfDay.map((t) => (
                <button
                  key={t}
                  onClick={() => handleSelect("timeOfDay", t)}
                  className={`block w-full px-4 py-2 rounded-lg border-2 text-sm font-medium transition
                  ${form.timeOfDay === t 
                    ? "bg-[#6A3ED6] text-white border-[#6A3ED6]" 
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#6A3ED6]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Additional preferences row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Season */}
          <div>
            <label className="block text-sm font-bold text-[#6A3ED6] mb-4\">Season</label>
            <div className="flex flex-wrap gap-2\">
              {options.seasons.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSelect("season", s)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition
                  ${form.season === s 
                    ? "bg-[#6A3ED6] text-white border-[#6A3ED6]" 
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#6A3ED6]"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Intensity */}
          <div>
            <label className="block text-sm font-bold text-[#6A3ED6] mb-4\">Intensity</label>
            <div className="flex flex-wrap gap-2\">
              {options.intensity.map((i) => (
                <button
                  key={i}
                  onClick={() => handleSelect("intensity", i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition
                  ${form.intensity === i 
                    ? "bg-[#6A3ED6] text-white border-[#6A3ED6]" 
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#6A3ED6]"}`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate("/results", { state: form })}
          disabled={!isFormComplete}
          className={`w-full py-4 rounded-full text-lg font-semibold shadow-lg transition ${
            isFormComplete
              ? "bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white hover:scale-[1.02]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isFormComplete ? "Show Recommendations →" : "Select all options"}
        </button>

      </div>
    </div>
  );
}
