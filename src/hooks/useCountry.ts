"use client"

import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "https://restcountries.com/v3.1";

export const useCountry = (countrySlug: string | null) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!countrySlug){
            return;
        }

        const requestUrl = `${apiUrl}/name/${countrySlug}`;

        axios.get(requestUrl)
        .then(function (response) {
            if(response.data){
                setData(response.data);
                setLoading(false)
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [countrySlug])

    return {
        data, 
        loading
    }
}