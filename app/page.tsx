"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const width = 800;
const height = 600;

const geoUrl: string = "/features.json";

const MapChart = () => {
  const handleCountryClick = (geo: Geographies) => {
    const { name } = geo.properties;
    console.log("País clicado:", name);

    console.log(geo);
  };

  return (
    <ComposableMap width={width} height={height}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} onClick={() => handleCountryClick(geo)}/>
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
