import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "@/pages/HomePage";
import MapPage from "./pages/MapPage";
import TrackPage from "./pages/TrackPage";
import CameraPage from "./pages/CameraPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/track" element={<TrackPage />} />
      <Route path="/camera" element={<CameraPage />} />
    </Routes>
  )
}

export default App