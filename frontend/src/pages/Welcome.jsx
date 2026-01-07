import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EEE6FF] via-[#F7ECFF] to-[#FFF6EE] px-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl px-10 py-12 text-center">

        {/* Logo / Brand */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-[#6A3ED6] tracking-wide">
            ScentMode
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Your personal fragrance stylist for every occasion
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4">

          {/* Explore */}
          <button
            onClick={() => navigate("/explore")}
            className="w-full py-3 rounded-full border border-gray-200 text-[#6A3ED6] font-medium hover:bg-[#F4EFFF] transition"
          >
            Explore
          </button>

          {/* Find My Scent - PRIMARY */}
          <button
            onClick={() => navigate("/find")}
            className="w-full py-3 rounded-full bg-[#6A3ED6] text-white font-semibold hover:opacity-90 transition"
          >
            Find My Scent
          </button>

          {/* Option 3 */}
          <button
            onClick={() => navigate("/inspiration")}
            className="w-full py-3 rounded-full border border-gray-200 text-[#6A3ED6] font-medium hover:bg-[#F4EFFF] transition"
          >
            Occasion Inspiration
          </button>

        </div>

        {/* Footer micro-copy */}
        <p className="text-xs text-gray-400 mt-8">
          Designed to match moments, moods & memories
        </p>

      </div>
    </div>
  );
}
