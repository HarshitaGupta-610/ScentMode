import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Closet() {
  const [closet, setCloset] = useState([]);

  useEffect(() => {
    const fetchCloset = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/closet");

        if (!response.ok) {
          throw new Error("Failed to fetch closet");
        }

        const data = await response.json();
        setCloset(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Closet fetch failed:", error);
        setCloset([]);
      }
    };

    fetchCloset();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#6A3ED6] mb-3">My Closet</h1>
        <p className="text-gray-600 text-lg">Your collection of favorite fragrances. Manage and explore new ones anytime.</p>
      </div>

      {closet.length === 0 ? (
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-16 text-center">
          <div className="text-6xl mb-6">💎</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your closet is empty</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">Start discovering fragrances that match your style, mood, and personality.</p>
          <Link
            to="/preferences"
            className="inline-block px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white shadow-lg hover:scale-[1.03] transition"
          >
            Explore Fragrances →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {closet.map((perfume, idx) => (
            <div
              key={perfume._id || idx}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="relative h-48 flex justify-center items-center mb-4 bg-purple-50 rounded-2xl">
                {perfume.image ? (
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="h-full object-contain drop-shadow-lg"
                  />
                ) : (
                  <span className="text-purple-400 text-sm font-semibold">No image</span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{perfume.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{perfume.brand}</p>
              <div className="bg-purple-50 rounded-xl p-3 mb-4 border border-purple-100">
                <p className="text-xs font-semibold text-purple-700 mb-1">Key Notes</p>
                <p className="text-gray-700 text-sm">
                  {Array.isArray(perfume.notes) ? perfume.notes.join(", ") : perfume.notes}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <p className="text-xs font-semibold text-purple-700">Longevity</p>
                  <p className="text-gray-600 text-sm">{perfume.longevity}</p>
                </div>

                <div className="bg-purple-50 p-3 rounded-xl">
                  <p className="text-xs font-semibold text-purple-700">Sillage</p>
                  <p className="text-gray-600 text-sm">{perfume.sillage}</p>
                </div>

                <div className="bg-purple-50 p-3 rounded-xl">
                  <p className="text-xs font-semibold text-purple-700">Score</p>
                  <p className="text-gray-600 text-sm font-bold">{perfume.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
