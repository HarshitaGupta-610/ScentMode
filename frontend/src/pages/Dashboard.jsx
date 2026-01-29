import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [verificationResult, setVerificationResult] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const verifyToken = async () => {
    try {
      if (!currentUser) return;
      const token = await currentUser.getIdToken();
      // Assuming backend is on localhost:5000
      const response = await axios.post("http://localhost:5000/auth/verify-firebase", { token });
      setVerificationResult(response.data);
    } catch (error) {
      console.error("Verification failed", error);
      setVerificationResult({ success: false, error: error.message });
    }
  };

  if (!currentUser) return null; // or loading spinner

  return (
    <div className="pt-24 max-w-5xl mx-auto px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#6A3ED6]">Dashboard</h2>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition">
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-4">User Profile</h3>
          <div className="flex items-center gap-4 mb-4">
            {currentUser.photoURL && (
              <img 
                src={currentUser.photoURL} 
                alt="Profile" 
                className="w-16 h-16 rounded-full border"
              />
            )}
            <div>
              <p className="font-bold text-lg">{currentUser.displayName}</p>
              <p className="text-gray-600">{currentUser.email}</p>
              <p className="text-xs text-gray-400 mt-1">UID: {currentUser.uid}</p>
            </div>
          </div>
          
          <button 
            onClick={verifyToken}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Verify Token with Backend
          </button>

          {verificationResult && (
            <div className="mt-4 p-3 bg-gray-100 rounded text-sm overflow-auto max-h-40">
              <pre>{JSON.stringify(verificationResult, null, 2)}</pre>
            </div>
          )}
        </div>
        
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Recent Recommendations</h3>
          <p className="text-gray-500">No recent recommendations found.</p>
        </div>
      </div>
    </div>
  );
}
