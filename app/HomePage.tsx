"use client";

import CountryList, { ICountryOverview } from "@/components/CountryList";
import CountrySearch from "@/components/CountrySearch/CountrySearch";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { FC, useState } from "react";
import useGetCountries from "utils/hooks/useGetCountries";

interface IProps {
  countries: ICountryOverview[];
}

const HomePage: FC<IProps> = ({ countries }) => {
  const [countryInputValue, setCountryInputValue] = useState("");
  const [regionValue, setRegionValue] = useState("");
  const { filteredCountries } = useGetCountries(
    countryInputValue,
    regionValue,
    countries
  );

  return (
    <Grid
      w="100%"
      gridTemplateRows={{lg: "150px 1fr" ,xl: "105px 1fr"}}
      bg="gray.50"
      _dark={{ bg: "#04132b" }}
      minH="100vh"
    >
      <GridItem>
        <Center>
          <Box textAlign="left" maxW="1250px" px="10px" w="100%">
            <Grid width="100%">
              <GridItem pt="50px">
                <CountrySearch
                  countryInputValue={countryInputValue}
                  setCountyInputValue={setCountryInputValue}
                  regionValue={regionValue}
                  setRegionValue={setRegionValue}
                />
              </GridItem>
            </Grid>
          </Box>
        </Center>
      </GridItem>
      <GridItem>
        <Center>
          <CountryList counties={filteredCountries} />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
