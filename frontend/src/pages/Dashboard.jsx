import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#6A3ED6] mb-3">
          Welcome back, {currentUser.displayName?.split(' ')[0]}!
        </h1>
        <p className="text-gray-600 text-lg">Manage your profile and explore fragrance recommendations tailored just for you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* User Profile Card */}
        <div className="lg:col-span-1 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8">
          <h2 className="text-2xl font-semibold text-[#6A3ED6] mb-6">Your Profile</h2>
          
          <div className="flex flex-col items-center text-center mb-6">
            {currentUser.photoURL && (
              <img 
                src={currentUser.photoURL} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-purple-200 mb-4 shadow-lg"
              />
            )}
            <p className="font-bold text-xl text-gray-900">{currentUser.displayName}</p>
            <p className="text-gray-600 text-sm">{currentUser.email}</p>
          </div>
          
          <div className="space-y-3">
            <Link
              to="/preferences"
              className="block w-full py-2 px-4 text-center rounded-xl font-semibold bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white hover:scale-[1.02] transition"
            >
              Find Fragrances
            </Link>
            <Link
              to="/closet"
              className="block w-full py-2 px-4 text-center rounded-xl font-semibold border-2 border-[#6A3ED6] text-[#6A3ED6] hover:bg-purple-50 transition"
            >
              View My Closet
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Get Recommendations Card */}
            <Link
              to="/preferences"
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#6A3ED6] transition mb-2">Get Recommendations</h3>
              <p className="text-gray-600 text-sm">Discover fragrances matched to your mood and style</p>
            </Link>

            {/* Your Closet Card */}
            <Link
              to="/closet"
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#6A3ED6] transition mb-2">My Closet</h3>
              <p className="text-gray-600 text-sm">View and manage your saved fragrances</p>
            </Link>

            {/* Brand Info Card */}
            <Link
              to="/"
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#6A3ED6] transition mb-2">About ScentMode</h3>
              <p className="text-gray-600 text-sm">Learn more about our fragrance curation</p>
            </Link>

            {/* Logout Card */}
            <button
              onClick={async () => {
                try {
                  await logout();
                  navigate("/login");
                } catch (error) {
                  console.error("Failed to log out", error);
                }
              }}
              className="bg-red-50 backdrop-blur-xl rounded-3xl shadow-xl border border-red-200 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all group text-left"
            >
              <div className="text-4xl mb-4">👋</div>
              <h3 className="text-xl font-semibold text-red-900 group-hover:text-red-600 transition mb-2">Logout</h3>
              <p className="text-red-700 text-sm">Sign out from your account</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
