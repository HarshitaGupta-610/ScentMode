import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F4EFFF]">

      {/* Soft dotted texture */}
      <div
        className="absolute inset-0
        bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)]
        bg-[size:28px_28px]
        opacity-40"
      />

      {/* Gradient color wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDE4FF] via-[#F8F1FF] to-[#FFF2E6]" />

      {/* CENTER CARD */}
      <div
        className="
          relative z-10
          bg-white/95 backdrop-blur-xl
          w-full max-w-[340px]
          rounded-[32px]
          border border-white/50
          px-8 py-10 text-center

          shadow-[0_18px_55px_rgba(106,62,214,0.22)]
          transition-all duration-500 ease-out

          hover:-translate-y-2
          hover:scale-[1.015]
          hover:shadow-[0_30px_90px_rgba(106,62,214,0.35)]
        "
      >
        {/* Logo */}
        <img
          src="/long.png"
          alt="ScentMode Logo"
          className="w-24 mx-auto mb-6"
        />

        {/* Brand */}
        <h1 className="text-3xl font-semibold text-[#6A3ED6] tracking-wide">
          ScentMode
        </h1>

        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          Your personal fragrance stylist <br />
          for every occasion
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4">
          <button
            onClick={() => navigate("/explore")}
            className="w-full py-3 rounded-full border border-gray-200
              text-[#6A3ED6] font-medium
              hover:bg-[#F4EFFF] transition"
          >
            Explore
          </button>

          <button
            onClick={() => navigate("/find")}
            className="w-full py-3 rounded-full
              bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6]
              text-white font-semibold shadow-lg
              hover:scale-[1.04] transition"
          >
            Find My Scent
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-8">
          Designed to match moments, moods & memories
        </p>
      </div>
    </div>
  );
}
