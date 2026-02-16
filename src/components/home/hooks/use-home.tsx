import { Geographies } from "react-simple-maps";
import { useCountry } from "@/hooks/useCountry";
import { CountryData } from "../types";
import { useState } from "react";

export function useHome() {
    const [countrySlug, setCountrySlug] = useState<string | null>(null)

    const {
        data,
        loading
    } = useCountry(countrySlug);

    const countrys: CountryData[] | null = data;
    const countryData: CountryData | undefined = countrys?.length ? countrys[0] : undefined;

    const width = 800;
    const height = 600;

    const geoUrl: string = "/json/features.json";

    const handleCountryClick = (geo: Geographies) => {
        const { name } = geo.properties;

        setCountrySlug(name);
    };

    return {
        handleCountryClick,
        width,
        height,
        geoUrl,
        countryData,
        loading,
        countrySlug
    }
}