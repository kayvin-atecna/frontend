import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Button from "@/components/button";
import { useNavigate } from "react-router-dom";
import L from "leaflet";

export default function MapPage() {
  const navigate = useNavigate();
  const position: [number, number] = [50.6636678, 3.1247847];

  const customIcon = L.icon({
    iconUrl: "/blue-circle.svg",  // put your image in /public
    iconSize: [16, 16],           // size of the icon
    iconAnchor: [8, 16],         // point of the icon which corresponds to marker's location
    popupAnchor: [0, -16],        // where popups should open relative to the icon
  });

  return (
    <>
      <div className="map-container">
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
        </MapContainer>
        <Button onClick={() => navigate("/")}>Fermer la carte</Button>
      </div>
    </>
  );
}
