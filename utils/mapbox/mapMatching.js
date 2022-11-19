exports.createWaypoints = function (sample) {
  return sample.map((coord) => {
    let lon = coord[0];
    let lat = coord[1];
    return {
      coordinates: [lon, lat],
    };
  });
};

exports.createFeature = function (mbxGeometry) {
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
};
