import { ICountrySlugResponse } from "@/pages/api/countries/[slug]";

const getCountryBySlug = async (slug: string) => {
    try {
        const response = await
            fetch(`http://localhost:3000/api/countries/${slug}`)
        const responseData: ICountrySlugResponse = await response.json()
        console.log(responseData);
        
        return responseData;
    } catch (error) {
        return { ok: false, country: null } 
    }
}

export default getCountryBySlug;