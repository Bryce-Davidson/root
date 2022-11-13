import mapboxGl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useEffect } from "react";

export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    mapboxGl.accessToken =
      "pk.eyJ1IjoiYnJ5Y3ljbGUiLCJhIjoiY2t5emhpcDZ1MG0yeDJ2bHV5Ymo3bzk4ZCJ9.K8F0fGovviZwfOYLOnbKhg";
    map.current = new mapboxGl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
    });
  }, []);
  return (
    <div>
      <main>
        <div
          className="map-container"
          ref={mapContainer}
          style={{ height: 500, width: 500 }}
        />
      </main>
    </div>
  );
}
