import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const hideNav = ["/", "/welcome", "/login", "/signup"].includes(location.pathname);

  if (hideNav) return null;

  return (
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/long.png" alt="logo" className="w-10" />
          <span className="text-xl font-semibold text-[#6A3ED6]">ScentMode</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/closet">My Closet</Link>
          <Link to="/" className="text-[#6A3ED6]">Hi, User</Link>
        </div>
      </div>
    </nav>
  );
}
