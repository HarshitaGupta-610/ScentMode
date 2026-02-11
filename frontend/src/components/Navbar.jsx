import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const { currentUser } = useAuth();
  const hideNav = ["/", "/welcome", "/login", "/signup"].includes(location.pathname);

  const isActive = (path) => location.pathname === path ? "text-[#6A3ED6] font-semibold" : "text-gray-700 hover:text-[#6A3ED6]";

  if (hideNav) return null;

  return (
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-lg shadow-sm z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src="/long.png" alt="logo" className="w-10" />
          <span className="text-xl font-semibold text-[#6A3ED6]">ScentMode</span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={`transition ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/dashboard" className={`transition ${isActive("/dashboard")}`}>
            Dashboard
          </Link>
          <Link to="/preferences" className={`transition ${isActive("/preferences")}`}>
            Find My Scent
          </Link>
          <Link to="/closet" className={`transition ${isActive("/closet")}`}>
            My Closet
          </Link>
        </div>

        {/* Right Section - User Info Only (No Logout here) */}
        <div className="flex items-center gap-4">
          {currentUser && (
            <div className="hidden sm:flex items-center gap-3">
              {currentUser.photoURL && (
                <img 
                  src={currentUser.photoURL} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full border border-purple-300"
                />
              )}
              <span className="text-sm font-medium text-gray-700">
                {currentUser.displayName?.split(' ')[0]}
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
