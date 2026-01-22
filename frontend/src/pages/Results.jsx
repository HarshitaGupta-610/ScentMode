export default function Results() {
  const perfumes = [1,2,3,4,5]; // dummy

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#6A3ED6] mb-6">Your Matches</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {perfumes.map((_, idx) => (
          <div key={idx} className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-40 bg-purple-100 rounded-lg mb-3"></div>

            <h3 className="font-semibold text-lg">Perfume Name</h3>
            <p className="text-gray-500">Brand</p>

            <button className="mt-4 px-4 py-2 bg-[#6A3ED6] text-white rounded-lg w-full">
              Add to Closet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
