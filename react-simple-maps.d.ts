import { CountryGeometry } from '@/components/home/types';

declare module 'react-simple-maps' {
  import { ReactNode, FC } from 'react'
  
  export type Geographies = {
    id: string;
    rsmKey: string;
    svgPath: string;
    type: string;
    properties: {
        name: string;
    }
    geometry: CountryGeometry
  };

  export interface ComposableMapProps {
    children?: ReactNode
    [key: string]: any
  }

  export const ComposableMap: FC<ComposableMapProps>

  export interface GeographiesProps {
    geography: string
    children?: (props: { geographies: Geographies[] }) => ReactNode
    [key: string]: any
  }

  export const Geographies: FC<GeographiesProps>

  export interface GeographyProps {
    key?: string
    geography: Geographies
    [key: string]: any
  }

  export const Geography: FC<GeographyProps>
  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    wheelSensitivity?: number;
    translateExtent?: [[number, number], [number, number]];
    onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }) => void;
    onMove?: (position: { coordinates: [number, number]; zoom: number }) => void;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    filterZoomEvent?: (event: any) => boolean;
  }

  export const ZoomableGroup: FC<ZoomableGroupProps>
}
