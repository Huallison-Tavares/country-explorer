import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

interface CountryGeographiesProps {
    width: number;
    height: number;
    geoUrl: string;
    onClick: (geo: Geographies) => void;
}

const CountryGeographies = ({
    width,
    height,
    geoUrl,
    onClick,
}: CountryGeographiesProps) => {
  return (
    <ComposableMap width={width} height={height} >
        <ZoomableGroup>
            <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: Geographies[] }) =>
                geographies.map((geo) => (
                    <Geography key={geo.rsmKey} id={geo.rsmKey} geography={geo} onClick={() => onClick(geo)} style={{
                        default: { fill: "#2A354D", outline: "none" },
                        hover: { fill: "#F53", outline: "none", cursor: "pointer" },
                        pressed: { fill: "#E42", outline: "none" },
                    }}/>
                ))
                }
            </Geographies>
        </ZoomableGroup>
    </ComposableMap>
  )
}

export default CountryGeographies