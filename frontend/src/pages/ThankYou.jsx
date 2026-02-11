import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EEFF] via-[#FCF8FF] to-[#FFEFF6] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold text-[#6A3ED6] mb-3">Thank You!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Thank you for exploring ScentMode. Your fragrance journey is just beginning.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#6A3ED6] to-[#8B5CF6] text-white rounded-full font-semibold hover:scale-[1.03] transition shadow-lg"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
