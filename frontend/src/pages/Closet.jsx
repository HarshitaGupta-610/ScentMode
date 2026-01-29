import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Closet() {
  const { currentUser } = useAuth();
  const [savedPerfumes, setSavedPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      fetchSavedPerfumes();
    } else {
        setLoading(false);
    }
  }, [currentUser]);

  const fetchSavedPerfumes = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/user/saved-perfumes/${currentUser.uid}`);
      setSavedPerfumes(res.data.savedPerfumes);
    } catch (error) {
      console.error("Error fetching saved perfumes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (perfumeId) => {
    try {
      await axios.post("http://localhost:5000/api/user/remove-perfume", {
        uid: currentUser.uid,
        perfumeId
      });
      setSavedPerfumes(prev => prev.filter(p => p.id !== perfumeId));
    } catch (error) {
      console.error("Error removing perfume:", error);
    }
  };

  if (loading) return <div className="pt-24 text-center">Loading...</div>;

  if (!currentUser) return (
      <div className="pt-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in to view your closet.</h2>
          <Link to="/login" className="text-purple-600 underline">Login here</Link>
      </div>
  );

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#6A3ED6] mb-6">My Closet</h2>

      {savedPerfumes.length === 0 ? (
          <p>Your closet is empty. <Link to="/preferences" className="text-purple-600 underline">Find a scent!</Link></p>
      ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savedPerfumes.map((p) => (
              <div key={p.id} className="p-6 bg-white shadow rounded-xl flex flex-col items-center text-center">
                <div className="h-40 w-full mb-3 flex justify-center items-center">
                    <img src={p.image} alt={p.name} className="h-full object-contain" />
                </div>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{p.brand}</p>
                <button 
                    onClick={() => handleRemove(p.id)}
                    className="mt-auto px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg w-full transition-colors"
                >
                    Remove
                </button>
              </div>
            ))}
          </div>
      )}
    </div>
  );
}
