import { Link } from "react-router-dom";

export default function Home() {
  const reasons = [
    {
      title: "Boosts Confidence",
      text: "The right scent can elevate confidence by up to 40%.",
      icon: "✨",
    },
    {
      title: "Long-lasting Memory",
      text: "People recall fragrances 10× longer than visuals.",
      icon: "🕯️",
    },
    {
      title: "Instant Mood Lift",
      text: "Scents influence emotions within seconds.",
      icon: "🌿",
    },
    {
      title: "Enhances Presence",
      text: "Occasion-matched perfumes elevate your aura instantly.",
      icon: "🌙",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F5EEFF] via-[#FCF8FF] to-[#FFEFF6] px-10 py-16 flex items-start justify-center">

      {/* Two-column container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT SIDE - Logo + Text */}
        <div className="flex flex-col justify-center space-y-6">
          <img src="/long.png" className="w-40 drop-shadow-xl" />

          <h1 className="text-6xl font-bold text-[#6A3ED6]">
            ScentMode
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed max-w-md">
            Your luxury fragrance stylist — matching scents to moods, outfits,
            seasons and unforgettable moments.
          </p>

          <Link
            to="/welcome"
            className="w-fit px-10 py-4 rounded-full text-lg font-semibold 
            bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white
            shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all"
          >
            Let’s Begin →
          </Link>
        </div>

        {/* RIGHT SIDE - Reasons Title + Cards */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why your perfect scent matters:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {reasons.map((r, idx) => (
              <div
                key={idx}
                className="
                  p-6 rounded-3xl bg-white/80 backdrop-blur-xl 
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  border border-white/40
                  hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                  flex flex-col gap-3
                "
              >
                {/* Icon */}
                <div className="text-3xl opacity-70">{r.icon}</div>

                <h3 className="text-xl font-semibold text-[#6A3ED6]">
                  {r.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
