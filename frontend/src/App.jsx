import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Login from "./pages/Login.jsx";
import PreferenceForm from "./pages/PreferenceForm.jsx";
import Results from "./pages/Results.jsx";
import Closet from "./pages/Closet.jsx";
import ThankYou from "./pages/ThankYou.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<PreferenceForm />} />
        <Route path="/results" element={<Results />} />
        <Route path="/closet" element={<Closet />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
