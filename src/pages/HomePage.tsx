import Button from "@/components/button";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="wrapper">
        <Button onClick={() => navigate("/map")}>Voir la carte</Button>
        <Button onClick={() => navigate("/track")}>Suivre mon parcours</Button>
        <Button onClick={() => navigate("/camera")}>
          Signaler des déchets sauvages
        </Button>
      </div>
    </>
  );
}
