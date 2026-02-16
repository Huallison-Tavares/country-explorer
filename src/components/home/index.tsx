"use client"

import CountryGeographies from "../common/country-geographies";
import CountryInfo from "../common/country-info";
import { CountryInfoSkeleton } from "../common/country-info-skeleton";
import { useHome } from "./hooks/use-home";

export default function HomeComponent() {
    const {
        geoUrl,
        handleCountryClick,
        width,
        height,
        countryData,
        loading,
        countrySlug
    } = useHome();

    return (
        <div className="w-full h-full bg-[#f0f0f0] relative">
            <CountryGeographies 
                geoUrl={geoUrl}
                onClick={handleCountryClick}
                width={width}
                height={height}
            />

            {loading && countrySlug ? (
                <CountryInfoSkeleton />
            ) : (
                <CountryInfo country={countryData}/>
            )}
        </div>
    )
}