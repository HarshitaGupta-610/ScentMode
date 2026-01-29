import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  // const [verificationResult, setVerificationResult] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      verifyToken();
    }
  }, [currentUser, navigate]);

  const verifyToken = async () => {
    try {
      if (!currentUser) return;
      const token = await currentUser.getIdToken();
      // Silently verify token with backend and sync user data
      await axios.post("http://localhost:5000/auth/verify-firebase", { 
        token,
        user: {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL
        }
      });
      // We don't need to show the result anymore
    } catch (error) {
      console.error("Verification failed", error);
    }
  };

  if (!currentUser) return null; // or loading spinner

  return (
    <div className="pt-24 max-w-5xl mx-auto px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#6A3ED6]">Dashboard</h2>
        {/* Logout is now in Navbar */}
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        {/* User Profile moved to Navbar */}
        
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Recent Recommendations</h3>
          <p className="text-gray-500">No recent recommendations found.</p>
          
          <div className="mt-8">
             <button onClick={() => navigate("/preferences")} className="px-6 py-3 bg-[#6A3ED6] text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                Find New Scent
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
