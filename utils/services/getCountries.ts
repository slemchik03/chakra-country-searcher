import { ICountriesResponse } from "@/pages/api/countries/index";

const getCountries = async (
    searchQuery: string, region: string
) => {
    try {
        const response = await
            fetch(`http://localhost:3000/api/countries?region=${region}&searchQuery=${searchQuery}`)
        const responseData: ICountriesResponse = await response.json()

        return responseData;
    } catch (error) {
        return { ok: false, countries: [] } 
    }
}


export default getCountries;