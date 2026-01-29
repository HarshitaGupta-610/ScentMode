export default function Closet() {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#6A3ED6] mb-6">My Closet</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map((i)=>(
          <div key={i} className="p-6 bg-white shadow rounded-xl">
            <div className="h-40 bg-purple-100 rounded mb-3"></div>
            <h3 className="font-semibold">Saved Perfume</h3>
            <button className="mt-3 px-4 py-2 bg-red-400 text-white rounded-lg w-full">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
