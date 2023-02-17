"use client";

import CountryInfo from "@/components/CountryInfo/CountryInfo";
import { Center, Grid } from "@chakra-ui/react";
import { FC } from "react";

export interface ICountryDescribe {
  name: string,
  flag: string,
  borders: string[],
  propertiesToRender: {
    currencies: {
      name: string;
    }[];
    subregion: string;
    languages: { name: string }[];
    nativeName: string;
    population: string,
    capital: string,
    region: string,
  }

}

interface IProps {
  countryDescribe: ICountryDescribe;
}

const CountryPage: FC<IProps> = ({countryDescribe}) => {
  return (
    <Center>
      <Grid  maxW="1250px" px="10px" w="100%" pb="200px">
        <CountryInfo countryDescribe={countryDescribe} />
      </Grid>
    </Center>
  );
};

export default CountryPage;
