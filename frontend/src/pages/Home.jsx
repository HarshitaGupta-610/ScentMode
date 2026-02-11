import { Link } from "react-router-dom";

export default function Home() {
  const reasons = [
    {
      title: "Boosts Confidence",
      text: "The right scent can elevate confidence by up to 40%.",
      icon: "💪"
    },
    {
      title: "Long-lasting Memory",
      text: "People recall fragrances 10× longer than visuals.",
      icon: "🧠"
    },
    {
      title: "Instant Mood Lift",
      text: "Scents influence emotions within seconds.",
      icon: "😊"
    },
    {
      title: "Enhances Presence",
      text: "Occasion-matched perfumes elevate your aura instantly.",
      icon: "✨"
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F5EEFF] via-[#FCF8FF] to-[#FFEFF6] px-6 md:px-10 py-16 flex items-center justify-center">

      {/* Two-column container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16\">

        {/* LEFT SIDE - Logo + Text */}
        <div className="flex flex-col justify-center space-y-8">
          <img src="/long.png" className="w-40 drop-shadow-xl" alt="ScentMode Logo" />

          <div>
            <h1 className="text-6xl font-bold text-[#6A3ED6] mb-4">
              ScentMode
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              Your luxury fragrance stylist — matching scents to moods, outfits, seasons and unforgettable moments.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              to="/closet"
              className="px-8 py-4 rounded-full text-lg font-semibold 
              bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white
              shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all"
            >
             Find My Scent →
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Reasons Title + Cards */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Why your perfect scent matters:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {reasons.map((r, idx) => (
              <div
                key={idx}
                className="
                  p-6 rounded-2xl bg-white/80 backdrop-blur-xl 
                  shadow-lg hover:shadow-xl
                  border border-white/40
                  hover:-translate-y-1 transition-all duration-300
                  flex flex-col gap-3
                "
              >
                <div className="text-4xl">{r.icon}</div>

                <h3 className="text-lg font-semibold text-[#6A3ED6]">
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
