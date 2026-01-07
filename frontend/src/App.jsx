import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import PreferenceForm from "./pages/PreferenceForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/find" element={<PreferenceForm />} />
      </Routes>
    </BrowserRouter>
  );
}
