import { MAPBOX_PUBLIC_TOKEN } from "./tokens";
import client from "@mapbox/mapbox-sdk/services/map-matching.js";

export const mbxMatchClient = client({ accessToken: MAPBOX_PUBLIC_TOKEN });

export function createWaypoints(sample) {
  return sample.map((coord) => {
    let lon = coord[0];
    let lat = coord[1];
    return {
      coordinates: [lon, lat],
    };
  });
}

export function createFeature(mbxGeometry) {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: mbxGeometry,
      },
    ],
  };
}
