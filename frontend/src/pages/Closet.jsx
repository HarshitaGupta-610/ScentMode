import { useState } from "react";
import { Link } from "react-router-dom";

export default function Closet() {
  const [savedPerfumes, setSavedPerfumes] = useState([]);

  const removePerfume = (id) => {
    setSavedPerfumes(savedPerfumes.filter(p => p.id !== id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#6A3ED6] mb-3">My Closet</h1>
        <p className="text-gray-600 text-lg">Your collection of favorite fragrances. Manage and explore new ones anytime.</p>
      </div>

      {savedPerfumes.length === 0 ? (
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
          {savedPerfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="relative h-48 flex justify-center items-center mb-4 bg-purple-50 rounded-2xl">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="h-full object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{perfume.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{perfume.brand}</p>
              <div className="bg-purple-50 rounded-xl p-3 mb-4 border border-purple-100">
                <p className="text-xs font-semibold text-purple-700 mb-1">Key Notes</p>
                <p className="text-gray-700 text-sm">{perfume.notes}</p>
              </div>
              <button
                onClick={() => removePerfume(perfume.id)}
                className="w-full py-2 px-4 rounded-full font-semibold text-red-600 border-2 border-red-300 hover:bg-red-50 transition"
              >
                Remove from Closet
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
