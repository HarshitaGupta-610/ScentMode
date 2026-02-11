import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EEFF] via-[#FCF8FF] to-[#FFEFF6] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#6A3ED6]/20 border-t-[#6A3ED6] rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl font-semibold text-[#6A3ED6]">Signing you in…</p>
        <p className="text-gray-600 text-sm mt-2">Please wait while we securely authenticate your account.</p>
      </div>
    </div>
  );
}
