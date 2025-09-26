import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "@/pages/HomePage";
import MapPage from "./pages/MapPage";
import TrackPage from "./pages/TrackPage";
import CameraPage from "./pages/CameraPage";
import TestPage from "./pages/TestPage";
import Layout from "./components/layout";

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>      
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/test" element={<TestPage />} />
      </Route>
    </Routes>
  )
}

export default App