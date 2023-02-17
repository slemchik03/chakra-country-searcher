import getCountries from "utils/services/getCountries";
import HomePage from "./HomePage";

export default async function Page() {
  const countriesResponse = await getCountries("", "");

  return <HomePage countries={countriesResponse.countries} />;
}
