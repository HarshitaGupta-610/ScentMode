import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        
        <img src="/long.png" className="w-20 mx-auto mb-4" />

        <h2 className="text-2xl font-bold text-center mb-6 text-[#6A3ED6]">Sign Up</h2>

        <input className="w-full border p-3 rounded-lg mb-4" placeholder="Full Name" />
        <input className="w-full border p-3 rounded-lg mb-4" placeholder="Email" />
        <input className="w-full border p-3 rounded-lg mb-4" type="password" placeholder="Password" />

        <button 
          onClick={() => navigate("/preferences")} 
          className="w-full py-3 bg-[#6A3ED6] text-white rounded-lg hover:bg-purple-700 transition">
          Create Account
        </button>

        <p className="text-center mt-4 text-gray-500">
          Already have an account? <Link to="/login" className="text-[#6A3ED6]">Login</Link>
        </p>
      </div>
    </div>
  );
}
