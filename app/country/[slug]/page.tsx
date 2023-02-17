import getCountryBySlug from "utils/services/getCountryBySlug";
import CountryPage from "./CountryPage";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const currentCountry = (await getCountryBySlug(slug)).country;

  if (currentCountry) {
    return <CountryPage countryDescribe={currentCountry} />;
  }

  return <div>error!</div>;
}
