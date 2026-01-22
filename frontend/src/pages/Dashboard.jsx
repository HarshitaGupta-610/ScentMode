export default function Dashboard() {
  return (
    <div className="pt-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#6A3ED6] mb-6">Dashboard</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded-xl">User Info</div>
        <div className="bg-white p-6 shadow rounded-xl">Recent Recommendations</div>
      </div>
    </div>
  );
}
