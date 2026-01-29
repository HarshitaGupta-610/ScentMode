import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();

  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Google Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        
        {/* <img src="/long.png" className="w-20 mx-auto mb-4" /> */}

        <h2 className="text-2xl font-bold text-center mb-6 text-[#6A3ED6]">Sign Up</h2>

        <input className="w-full border p-3 rounded-lg mb-4" placeholder="Full Name" />
        <input className="w-full border p-3 rounded-lg mb-4" placeholder="Email" />
        <input className="w-full border p-3 rounded-lg mb-4" type="password" placeholder="Password" />

        <button 
          onClick={() => navigate("/dashboard")} 
          className="w-full py-3 bg-[#6A3ED6] text-white rounded-lg hover:bg-purple-700 transition">
          Create Account
        </button>

        <div className="my-6 text-center text-gray-500">Or sign up with...</div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleSignup}
            disabled={isSigningUp}
            className={`flex-1 flex items-center justify-center gap-3 border rounded-lg py-3 hover:shadow-sm transition bg-white ${isSigningUp ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
              <path fill="#EA4335" d="M24 9.5c3.9 0 6.6 1.6 8.1 2.9l6-5.8C34.9 4.1 30.9 2 24 2 14.8 2 7.3 7.8 4 15.3l7.6 5.9C13.8 15.1 18.4 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.5 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.5c-.6 3.4-2.7 6.4-5.7 8.3l8.8 6.8C44.6 37.1 46.5 31.3 46.5 24.5z"/>
              <path fill="#4A90E2" d="M11.6 29.2A14.6 14.6 0 0112 24.5c0-1.9-.3-3.7-.8-5.4L4.6 13.2C2 17.5 0.9 21.8 0.9 24.5 0.9 27.2 2 31.5 4.6 35.8l7-6.6z"/>
              <path fill="#FBBC05" d="M24 46c6.9 0 12.9-2.3 17.3-6.2l-8.2-6.3C30.2 34.8 27.3 36 24 36c-6.6 0-11.9-5.6-12.4-12.8L4 24.5C7.3 32 14.8 38 24 38z"/>
            </svg>
            <span className="text-sm">{isSigningUp ? "..." : "Google"}</span>
          </button>

          <button
            onClick={() => { window.location.href = "http://localhost:5000/auth/microsoft" }}
            className="flex-1 flex items-center justify-center gap-3 border rounded-lg py-3 hover:shadow-sm transition bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
              <rect x="1" y="1" width="10" height="10" fill="#F35325" />
              <rect x="13" y="1" width="10" height="10" fill="#81BC06" />
              <rect x="1" y="13" width="10" height="10" fill="#05A6F0" />
              <rect x="13" y="13" width="10" height="10" fill="#FFBA08" />
            </svg>
            <span className="text-sm">Microsoft</span>
          </button>
        </div>

        <p className="text-center mt-4 text-gray-500">
          Already have an account? <Link to="/login" className="text-[#6A3ED6]">Login</Link>
        </p>
      </div>
    </div>
  );
}
