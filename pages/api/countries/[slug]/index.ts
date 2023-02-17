import { ICountryDescribe } from "app/country/[slug]/CountryPage"
import { NextApiRequest, NextApiResponse } from "next"
import separateNumbers from "utils/separateNumber"
import data from "../../../../utils/data.json"

export interface ICountrySlugResponse {
    ok: boolean,
    country: ICountryDescribe | null
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { slug } = req.query
        const {
            name,
            nativeName,
            population,
            currencies,
            languages,
            capital,
            subregion,
            flag,
            region,
            borders
        } = data.find((country) => country.name === slug)!

        return res.status(200).json({
            ok: true, country: {
                name,
                flag,
                borders,
                propertiesToRender: {
                    nativeName,
                    population: separateNumbers(population),
                    currencies,
                    languages,
                    capital,
                    subregion,
                    region,
                }
            }
        })
    }
    catch (error) {
        res.status(404).json({ ok: false, country: null })
    }
}