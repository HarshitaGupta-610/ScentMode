import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <img src="/long.png" className="w-24 mb-4" />

      <h2 className="text-4xl font-bold text-[#6A3ED6] mb-2">ScentMode</h2>
      <p className="text-gray-600 mb-8">Your personal fragrance stylist for every occasion</p>

      <Link 
        to="/login" 
        className="px-8 py-3 bg-[#6A3ED6] text-white rounded-xl text-lg shadow hover:bg-purple-700 transition"
      >
        Find My Scent →
      </Link>
    </div>
  );
}
