import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageLayout from "./layout/PageLayout";

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

        <Route path="/preferences" element={<PageLayout><PreferenceForm /></PageLayout>} />
        <Route path="/results" element={<PageLayout><Results /></PageLayout>} />

        <Route path="/dashboard" element={<PageLayout><Dashboard /></PageLayout>} />
        <Route path="/closet" element={<PageLayout><Closet /></PageLayout>} />
      </Routes>
    </>
  );
}
