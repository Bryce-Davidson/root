import * as React from "react";
// import Head from "next/head";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const test = ""

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYnJ5Y3ljbGUiLCJhIjoiY2t5emhpcDZ1MG0yeDJ2bHV5Ymo3bzk4ZCJ9.K8F0fGovviZwfOYLOnbKhg";

export default function Home() {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 48.427589,
          longitude: -123.3327,
          zoom: 14,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-123.3327} latitude={48.427589} color="red" />
        <FullscreenControl />
      </Map>
    </div>
  );
}
