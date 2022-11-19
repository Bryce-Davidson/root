import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, FullscreenControl, Source, Layer } from "react-map-gl";
import { createWaypoints, createFeature } from "utils/mapbox/mapMatching";
import { MAPBOX_PUBLIC_TOKEN } from "utils/mapbox/tokens";
import { mbxMatchClient } from "../utils/mapbox/mapMatching";

const routes = {
  waterFront: [
    [-123.34965713493622, 48.40585943690391],
    [-123.33156366734758, 48.40875864411282],
    [-123.31840950843966, 48.409034750465594],
    [-123.30021179748223, 48.41310714933587],
    [-123.30008080999716, 48.42128085339439],
    [-123.3026636224426, 48.4375310516682],
    [-123.2942287657707, 48.446220730732506],
  ],
};

export async function getStaticProps() {
  const res = await mbxMatchClient
    .getMatch({
      tidy: true,
      geometries: "geojson",
      overview: "full",
      points: createWaypoints(routes.waterFront),
    })
    .send();

  const geo = res.body.matchings[0].geometry;
  return {
    props: { json: createFeature(geo) },
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
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
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
