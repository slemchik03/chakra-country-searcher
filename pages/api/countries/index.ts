import { ICountryOverview } from "@/components/CountryList";
import { NextApiRequest, NextApiResponse } from "next";
import data from "../../../utils/data.json"

export interface ICountriesResponse {
    ok: boolean,
    countries: ICountryOverview[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { region, searchQuery } = req.query
        const responseData = data.filter((country) => {
            // return all regions, if region not selected
            const isEqualToRegion = region ? country.region === region : true
            if (searchQuery) {
                return isEqualToRegion &&
                    country.name.toLowerCase().includes(String(searchQuery).toLowerCase())
            }
            return isEqualToRegion
        })

        return res.status(200).json({ ok: true, countries: responseData.slice(0, 50) })
    }
    catch (error) {
        res.status(404).json({ ok: false, countries: [] })
    }
}