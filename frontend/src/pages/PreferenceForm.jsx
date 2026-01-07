import { useState } from "react";
import { useNavigate } from "react-router-dom";

const moods = ["Soft", "Bold", "Elegant", "Energetic", "Sensual", "Calm"];
const outfits = ["Casual", "Ethnic", "Glam", "Formal", "Street", "Sporty"];
const times = ["Morning", "Afternoon", "Evening", "Night", "Midnight"];
const seasons = ["Summer", "Winter", "Rainy", "Spring"];
const intensity = ["Light", "Medium", "Strong"];

export default function PreferenceForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    mood: "",
    outfit: "",
    time: "",
    season: "",
    intensity: "",
  });

  const update = (key, value) =>
    setForm({ ...form, [key]: value });

  return (
    <div className="min-h-screen bg-[#F4EFFF] relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0
        bg-[radial-gradient(circle,rgba(255,255,255,0.45)_1px,transparent_1px)]
        bg-[size:28px_28px]
        opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDE4FF] via-[#F8F1FF] to-[#FFF2E6]" />

      {/* NAVBAR */}
      <nav className="relative z-10 bg-white/70 backdrop-blur-md border-b border-white/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/long.png" alt="logo" className="w-8 h-8" />
            <span className="font-semibold text-[#6A3ED6] text-lg">
              ScentMode
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-[#6A3ED6]">Products</span>
            <span className="cursor-pointer hover:text-[#6A3ED6]">Use Cases</span>
            <span className="cursor-pointer hover:text-[#6A3ED6]">Resources</span>
            <span className="cursor-pointer hover:text-[#6A3ED6]">Pricing</span>
          </div>

          <button className="px-4 py-2 rounded-full bg-[#6A3ED6] text-white text-sm">
            Login
          </button>
        </div>
      </nav>

      {/* MAIN CARD */}
      <div className="relative z-10 flex justify-center mt-10 px-4">
        <div
          className="
            w-full max-w-4xl
            bg-white/95 backdrop-blur-xl
            rounded-[32px]
            shadow-[0_25px_80px_rgba(106,62,214,0.25)]
            px-8 py-10
          "
        >
          <h2 className="text-2xl font-semibold text-[#6A3ED6] text-center mb-2">
            Personalize Your Scent
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Tell us about you — we’ll handle the fragrance magic ✨
          </p>

          {/* HORIZONTAL SCROLL SECTIONS */}
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">

            {/* BASIC INFO */}
            <Section title="Basic Info">
              <input
                placeholder="Name"
                className="input"
                onChange={(e) => update("name", e.target.value)}
              />
              <input
                placeholder="Age"
                type="number"
                className="input"
                onChange={(e) => update("age", e.target.value)}
              />
              <select
                className="input"
                onChange={(e) => update("gender", e.target.value)}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Section>

            <OptionSection title="Mood" options={moods} onSelect={(v) => update("mood", v)} />
            <OptionSection title="Outfit Style" options={outfits} onSelect={(v) => update("outfit", v)} />
            <OptionSection title="Time of Day" options={times} onSelect={(v) => update("time", v)} />
            <OptionSection title="Season" options={seasons} onSelect={(v) => update("season", v)} />
            <OptionSection title="Intensity" options={intensity} onSelect={(v) => update("intensity", v)} />

          </div>

          {/* CTA */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/results")}
              className="px-10 py-3 rounded-full bg-gradient-to-r
              from-[#6A3ED6] to-[#8B5CF6]
              text-white font-semibold shadow-lg hover:scale-[1.05] transition"
            >
              Get My Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function Section({ title, children }) {
  return (
    <div className="snap-start min-w-[280px] bg-[#F9F6FF] rounded-2xl p-5 shadow-md">
      <h3 className="font-semibold text-[#6A3ED6] mb-4">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function OptionSection({ title, options, onSelect }) {
  return (
    <Section title={title}>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="px-4 py-2 rounded-full text-sm
            bg-white border border-gray-200
            hover:bg-[#6A3ED6] hover:text-white transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </Section>
  );
}
