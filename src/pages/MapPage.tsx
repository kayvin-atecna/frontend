import { MapContainer, Marker, TileLayer, useMap, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Button from "@/components/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import L, { type LatLngExpression } from "leaflet";

function RecenterMap({ position }: { position: LatLngExpression }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [map, position]);

  return null;
}

export default function MapPage() {
  const navigate = useNavigate();
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const [path, setPath] = useState<LatLngExpression[]>([]);

  // watch location
  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn("Geolocation not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const newPos: LatLngExpression = [pos.coords.latitude, pos.coords.longitude];
        setPosition(newPos);
        setPath((prev) => [...prev, newPos]);
        console.log("New position:", pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        console.error("Error watching position:", err);
      },
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const customIcon = L.icon({
    iconUrl: "/blue-circle.svg",
    iconSize: [16, 16],
    iconAnchor: [8, 16],
    popupAnchor: [0, -16],
  });

  return (
    <div className="map-container">
      {position ? (
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "350px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon} />
          <RecenterMap position={position} />
          {path.length > 1 && <Polyline positions={path} color="#55ACEE" />}

        </MapContainer>
      ) : (
        <p>Fetching location…</p>
      )}
      <Button onClick={() => navigate("/")}>Fermer la carte</Button>
    </div>
  );
}