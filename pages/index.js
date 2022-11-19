import * as React from "react";
import fsPromises from "fs/promises";
import path from "path";
import Map, { Marker, FullscreenControl, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYnJ5Y3ljbGUiLCJhIjoiY2t5emhpcDZ1MG0yeDJ2bHV5Ymo3bzk4ZCJ9.K8F0fGovviZwfOYLOnbKhg";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/data/matched.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: { json: objectData },
  };
}

const layerStyle = {
  id: "route",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#FFA500",
    "line-width": 3,
  },
};

export default function Home({ json }) {
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
        <Source id="my-data" type="geojson" data={json}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
}
