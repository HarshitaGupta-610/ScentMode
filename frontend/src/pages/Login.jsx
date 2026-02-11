import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleGoogleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    setError("");
    
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.log("Login Error Details:", err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError("Sign-in cancelled.");
      } else if (err.code === 'auth/cancelled-popup-request') {
        console.log("Popup request cancelled (duplicate)");
      } else if (err.code === 'auth/operation-not-allowed') {
        setError("Google sign-in is not enabled. Check Firebase Console.");
      } else if (err.code === 'auth/network-request-failed') {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(`Failed to log in: ${err.message || 'Unknown error'}`);
        console.error("Full error:", err);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EEFF] via-[#FCF8FF] to-[#FFEFF6] flex items-center justify-center px-6">
      <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-white/40 w-full max-w-md">
        
        <img src="/long.png" className="w-16 mx-auto mb-6" alt="Logo" />

        <h2 className="text-3xl font-bold text-center mb-2 text-[#6A3ED6]">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Sign in to discover your perfect fragrance</p>

        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}

        <button 
          onClick={handleGoogleLogin} 
          disabled={isLoggingIn}
          className={`w-full py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-[#6A3ED6] hover:bg-purple-50 transition flex items-center justify-center gap-3 mb-6 font-semibold ${isLoggingIn ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          {isLoggingIn ? "Signing in..." : "Continue with Google"}
        </button>

        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-400">Or continue with email</span>
            </div>
        </div>

        <input className="w-full border border-gray-200 p-3 rounded-xl mb-4 focus:outline-none focus:border-[#6A3ED6] focus:ring-1 focus:ring-purple-300" placeholder="Email address" />
        <input className="w-full border border-gray-200 p-3 rounded-xl mb-6 focus:outline-none focus:border-[#6A3ED6] focus:ring-1 focus:ring-purple-300" type="password" placeholder="Password" />

        <button 
          onClick={() => navigate("/dashboard")} 
          className="w-full py-3 bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white rounded-xl hover:scale-[1.02] transition font-semibold shadow-lg">
          Sign In
        </button>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account? <Link to="/signup" className="text-[#6A3ED6] font-semibold hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
