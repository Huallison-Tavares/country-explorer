import { CountryData } from "@/components/home/types";
import { formatNumber, getValuesList } from "@/lib/utils";
import Image from "next/image";
import BoxInfo from "../box-info";
import Link from "next/link";

interface CountryInfoProps {
    country?: CountryData;
}

const CountryInfo = ({
    country
}: CountryInfoProps) => {
  
    return (
        <>
            {country && (
                <div className="fixed flex flex-col gap-4 justify-center items-center text-center p-4 top-6 right-6 w-112.5 bg-white/80 backdrop-blur-xs shadow-2xl rounded-3xl border border-white/20 overflow-hidden transition-all">
                    <div className="flex flex-col gap-4 text-center">
                        <Image
                            src={country.flags.png}
                            alt={country.flags.alt ?? ""}
                            width={320}
                            height={224}
                        />
                        <div>
                            <h2 className="text-2xl">{country.name.common}</h2>
                            <p className="text-lg opacity-60">{country.name.official}</p>
                        </div>
                        <div className="flex gap-1 justify-center">
                            <p className="text-sm">{country.region}</p>
                            {country.subregion && (
                                <p className="text-sm">- {country.subregion}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center">
                        <BoxInfo 
                            icon="/icons/bank-icon.svg"
                            label="Capital"
                            textBox={country.capital?.length ? country.capital[0] : ""}
                        />
                        
                        <BoxInfo 
                            icon="/icons/language-icon.svg"
                            label="Linguas"
                            textBox={getValuesList(country.languages)}
                        />
                        
                        <BoxInfo 
                            icon="/icons/country-icon.svg"
                            label="População"
                            textBox={formatNumber(country.population) ?? ""}
                        />
                        
                        <BoxInfo 
                            icon="/icons/area-icon.png"
                            label="Área"
                            textBox={`${formatNumber(country.area)} Km²`}
                        />

                    </div>

                    <div className="flex justify-around w-full items-center">
                        <Image
                            src={country.coatOfArms.png ?? ""}
                            alt={country.flags.alt ?? ""}
                            width={70}
                            height={70}
                        />

                        <Link href={country.maps.googleMaps} target="_blank" className="px-4 h-12 bg-blue-500 text-white flex justify-center items-center">
                            ➪ Ver no Google Maps
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default CountryInfo