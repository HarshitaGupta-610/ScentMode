import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OAuthCallback from "./pages/OAuthCallback";
import PreferenceForm from "./pages/PreferenceForm";
import Results from "./pages/Results";
import Dashboard from "./pages/Dashboard";
import Closet from "./pages/Closet";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/oauth-callback" element={<OAuthCallback />} />

        <Route path="/preferences" element={<PreferenceForm />} />
        <Route path="/results" element={<Results />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/closet" element={<Closet />} />
      </Routes>
    </>
  );
}
