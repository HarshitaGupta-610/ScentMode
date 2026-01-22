import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-100 px-10">
      
      {/* Left Side */}
      <div className="flex-1 space-y-6">
        <img src="/long.png" className="w-40 mb-4" />

        <h1 className="text-5xl font-bold text-[#6A3ED6] leading-snug">
          ScentMode
        </h1>

        <p className="text-lg text-gray-600">
          Your personal fragrance stylist for every occasion.
        </p>

        <Link
          to="/welcome"
          className="px-6 py-3 bg-[#6A3ED6] text-white rounded-xl text-lg shadow hover:bg-purple-700 transition"
        >
          Let's Start →
        </Link>
      </div>

      {/* Right Side - Interactive Cards */}
      <div className="flex-1 grid grid-cols-2 gap-4 transform hover:scale-[1.01] transition">
        <div className="h-40 bg-white/70 shadow rounded-xl hover:scale-105 transition" />
        <div className="h-40 bg-white/70 shadow rounded-xl hover:scale-105 transition" />
        <div className="h-40 bg-white/70 shadow rounded-xl hover:scale-105 transition" />
        <div className="h-40 bg-white/70 shadow rounded-xl hover:scale-105 transition" />
      </div>
    </div>
  );
}
