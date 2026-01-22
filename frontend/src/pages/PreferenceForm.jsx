import { useState } from "react";
import PageLayout from "../layout/PageLayout";
import options from "../constants/options";
import { useNavigate } from "react-router-dom";

export default function PreferenceForm() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    mood: "",
    outfit: "",
    timeOfDay: "",
    season: "",
    intensity: "",
  });

  const handleSelect = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <PageLayout>
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-xl
        rounded-3xl shadow-xl border border-white/40 p-8">

        <h2 className="text-2xl font-semibold text-[#6A3ED6] mb-6">
          Customize Your Scent
        </h2>

        {/* Horizontal Scroll Sections */}
        <div className="space-y-8">

          {/* Mood */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">Mood</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {options.moods.map((m) => (
                <button
                  key={m}
                  onClick={() => handleSelect("mood", m)}
                  className={`px-4 py-2 rounded-full border 
                  ${form.mood === m ? "bg-[#6A3ED6] text-white" : "bg-white text-gray-600"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Outfit */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">Outfit Style</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {options.outfitStyles.map((o) => (
                <button
                  key={o}
                  onClick={() => handleSelect("outfit", o)}
                  className={`px-4 py-2 rounded-full border
                  ${form.outfit === o ? "bg-[#6A3ED6] text-white" : "bg-white text-gray-600"}`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          {/* Time */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">Time of Day</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {options.timeOfDay.map((t) => (
                <button
                  key={t}
                  onClick={() => handleSelect("timeOfDay", t)}
                  className={`px-4 py-2 rounded-full border
                  ${form.timeOfDay === t ? "bg-[#6A3ED6] text-white" : "bg-white text-gray-600"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Season */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">Season</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {options.seasons.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSelect("season", s)}
                  className={`px-4 py-2 rounded-full border
                  ${form.season === s ? "bg-[#6A3ED6] text-white" : "bg-white text-gray-600"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Intensity */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">Intensity</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {options.intensity.map((i) => (
                <button
                  key={i}
                  onClick={() => handleSelect("intensity", i)}
                  className={`px-4 py-2 rounded-full border
                  ${form.intensity === i ? "bg-[#6A3ED6] text-white" : "bg-white text-gray-600"}`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

        </div>

        <button
          onClick={() => navigate("/results", { state: form })}
          className="mt-10 w-full py-3 rounded-full
          bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6]
          text-white font-semibold shadow-lg hover:scale-[1.03] transition"
        >
          Show Recommendations
        </button>
      </div>
    </PageLayout>
  );
}
