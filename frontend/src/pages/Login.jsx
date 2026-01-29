import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleGoogleLogin = async () => {
    if (isLoggingIn) return; // Prevent double clicks
    setIsLoggingIn(true);
    setError("");
    
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      if (err.code === 'auth/popup-closed-by-user') {
        setError("Sign-in cancelled.");
      } else if (err.code === 'auth/cancelled-popup-request') {
        // Ignore this error as it means another popup was opened
        console.log("Popup request cancelled (duplicate)");
      } else {
        setError("Failed to log in with Google.");
        console.error(err);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        
        {/* <img src="/long.png" className="w-20 mx-auto mb-4" alt="Logo" /> */}

        <h2 className="text-2xl font-bold text-center mb-6 text-[#6A3ED6]">Login</h2>

        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}

        <button 
          onClick={handleGoogleLogin} 
          disabled={isLoggingIn}
          className={`w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 mb-4 font-medium ${isLoggingIn ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          {isLoggingIn ? "Signing in..." : "Sign in with Google"}
        </button>

        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
        </div>

        <input className="w-full border p-3 rounded-lg mb-4" placeholder="Email" />
        <input className="w-full border p-3 rounded-lg mb-4" type="password" placeholder="Password" />

        <button 
          onClick={() => navigate("/dashboard")} 
          className="w-full py-3 bg-[#6A3ED6] text-white rounded-lg hover:bg-purple-700 transition">
          Login
        </button>

        <p className="text-center mt-4 text-gray-500">
          Don’t have an account? <Link to="/signup" className="text-[#6A3ED6]">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
