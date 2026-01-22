import Navbar from "../components/Navbar";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F4EFFF]">

      {/* dotted texture */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle,rgba(255,255,255,0.45)_1px,transparent_1px)]
        bg-[size:28px_28px] opacity-40"
      />

      {/* gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-[#EDE4FF] via-[#F8F1FF] to-[#FFF2E6]">
      </div>

      {/* navbar */}
      <Navbar />

      {/* page content */}
      <div className="relative z-10 pt-24 px-4 flex justify-center">
        {children}
      </div>

    </div>
  );
}
