import { ICountryOverview } from "@/components/CountryList";
import { useDeferredValue, useEffect, useState } from "react";
import getCountries from "utils/services/getCountries";

export default function useGetCountries(
    searchQuery: string,
    region: string,
    initialData: ICountryOverview[]
) {
    const [filteredCountries, setFilteredCountries] =
        useState<ICountryOverview[]>(initialData);
    const defferedSearchQuery = useDeferredValue(searchQuery);

    useEffect(() => {
        let isOldRequest = false;

        (async () => {
            const countriesResponse = await getCountries(defferedSearchQuery, region);
            if (!isOldRequest) {
                setFilteredCountries(countriesResponse.countries);
            }
        })();

        return () => {
            isOldRequest = true;
        };
    }, [defferedSearchQuery, region]);

    return {
        filteredCountries,
    };
}
