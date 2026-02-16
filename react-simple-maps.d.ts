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
    geometry: {
        type: string;
        coordinates: [[
            number, number
        ]]
    }
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
}