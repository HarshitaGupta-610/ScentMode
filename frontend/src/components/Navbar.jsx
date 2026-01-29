import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hideNav = ["/", "/welcome", "/login", "/signup"].includes(location.pathname);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          
          {/* User Profile Section */}
          <div className="relative" ref={dropdownRef}>
             <button 
               onClick={() => setDropdownOpen(!dropdownOpen)}
               className="flex items-center gap-2 text-[#6A3ED6] hover:bg-purple-50 px-3 py-2 rounded-full transition-colors focus:outline-none"
             >
                {currentUser?.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full border border-purple-200"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#6A3ED6]">
                    {currentUser?.displayName ? currentUser.displayName[0].toUpperCase() : 'U'}
                  </div>
                )}
                <span>
                  {currentUser ? `Hi, ${currentUser.displayName ? currentUser.displayName.split(' ')[0] : 'User'}` : 'Hi, User'}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
             </button>

             {/* Dropdown Menu */}
             {dropdownOpen && currentUser && (
               <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in-down">
                 <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      {currentUser.photoURL ? (
                        <img src={currentUser.photoURL} alt="Profile" className="w-12 h-12 rounded-full border" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl text-[#6A3ED6] font-bold">
                           {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : 'U'}
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-gray-900">{currentUser.displayName}</p>
                        <p className="text-sm text-gray-500 truncate max-w-[160px]">{currentUser.email}</p>
                      </div>
                    </div>
                 </div>
                 
                 <div className="p-2">
                   <button 
                     onClick={() => {
                       logout();
                       setDropdownOpen(false);
                     }}
                     className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                     Logout
                   </button>
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </nav>
  );
}
