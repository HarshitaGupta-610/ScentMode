import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F5EEFF] via-[#FCF8FF] to-[#FFEFF6] px-6">
      <div className="flex flex-col items-center space-y-8 text-center">
        {/* Logo */}
        <img src="/long.png" className="w-32 drop-shadow-xl" alt="ScentMode logo" />

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#6A3ED6]">ScentMode</h1>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-md leading-relaxed">
          Your personal fragrance stylist for every occasion
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link 
            to="/signup" 
            className="px-10 py-3 bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white rounded-full font-semibold text-lg shadow-lg hover:scale-[1.03] transition"
          >
            Create Account
          </Link>
          <Link 
            to="/login" 
            className="px-10 py-3 bg-white border-2 border-[#6A3ED6] text-[#6A3ED6] rounded-full font-semibold text-lg hover:bg-purple-50 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-gray-500 mt-12 text-sm">Designed to match moments, moods & memories</p>
      </div>
    </div>
  );
}
