import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/button";

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    console.log("Requesting camera…");

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((mediaStream) => {
        if (!active) return;
        console.log("Stream:", mediaStream);
        setStream(mediaStream);

        const video = videoRef.current;
        if (video) {
          video.srcObject = mediaStream;
          console.log("Attached stream to video element");
          const p = video.play();
          if (p) {
            p.then(() => console.log("video.play() started"))
             .catch((err) => console.warn("video.play() failed:", err));
          }
        }
      })
      .catch((err) => {
        console.error("[CameraPage] getUserMedia failed:", err);
        setError(err.message);
      });

    return () => {
      active = false;
      console.log("[CameraPage] Cleaning up stream");
      stream?.getTracks().forEach((t) => t.stop());
    };
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="camera-container">
      {error && (
        <p style={{ color: "red" }}>Erreur: {error}</p>
      )}
      <video
        className="camera-video"
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          background: "black",
          display: "block",
        }}
      />
      <div className="camera-actions">
        <Button onClick={() => navigate("/")}>Annuler</Button>
        <Button onClick={() => navigate("/result")}>Prendre la photo</Button>
      </div>
    </div>
  );
}
