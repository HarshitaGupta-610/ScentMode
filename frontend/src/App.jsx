import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/explore" element={<div className="p-10">Explore Page</div>} />
        <Route path="/find" element={<div className="p-10">Find My Scent Page</div>} />
        <Route path="/inspiration" element={<div className="p-10">Occasion Inspiration Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}
