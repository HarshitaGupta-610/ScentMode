import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleGoogleSignup = async () => {
    if (isSigningUp) return;
    setIsSigningUp(true);
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Google Signup failed");
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EEFF] via-[#FCF8FF] to-[#FFEFF6] flex items-center justify-center px-6">
      <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-white/40 w-full max-w-md">
        
        <img src="/long.png" className="w-16 mx-auto mb-6" alt="Logo" />

        <h2 className="text-3xl font-bold text-center mb-2 text-[#6A3ED6]">Create Account</h2>
        <p className="text-center text-gray-600 mb-8">Join ScentMode and find your perfect fragrance</p>

        <input className="w-full border border-gray-200 p-3 rounded-xl mb-4 focus:outline-none focus:border-[#6A3ED6] focus:ring-1 focus:ring-purple-300" placeholder="Full Name" />
        <input className="w-full border border-gray-200 p-3 rounded-xl mb-4 focus:outline-none focus:border-[#6A3ED6] focus:ring-1 focus:ring-purple-300" placeholder="Email address" />
        <input className="w-full border border-gray-200 p-3 rounded-xl mb-6 focus:outline-none focus:border-[#6A3ED6] focus:ring-1 focus:ring-purple-300" type="password" placeholder="Password" />

        <button 
          onClick={() => navigate("/dashboard")} 
          className="w-full py-3 bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white rounded-xl hover:scale-[1.02] transition font-semibold shadow-lg mb-6">
          Create Account
        </button>

        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-400">Or sign up with</span>
            </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleSignup}
            disabled={isSigningUp}
            className={`flex-1 flex items-center justify-center gap-3 border-2 border-gray-200 rounded-xl py-3 hover:border-[#6A3ED6] hover:bg-purple-50 transition bg-white font-semibold ${isSigningUp ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">{isSigningUp ? "..." : "Google"}</span>
          </button>

          <button
            onClick={() => { window.location.href = "http://localhost:5000/auth/microsoft" }}
            className="flex-1 flex items-center justify-center gap-3 border-2 border-gray-200 rounded-xl py-3 hover:border-[#6A3ED6] hover:bg-purple-50 transition bg-white font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <rect x="1" y="1" width="10" height="10" fill="#F35325" />
              <rect x="13" y="1" width="10" height="10" fill="#81BC06" />
              <rect x="1" y="13" width="10" height="10" fill="#05A6F0" />
              <rect x="13" y="13" width="10" height="10" fill="#FFBA08" />
            </svg>
            <span className="text-sm hidden sm:inline">Microsoft</span>
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600">
          Already have an account? <Link to="/login" className="text-[#6A3ED6] font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
