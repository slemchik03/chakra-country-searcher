import { Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import CountrySearchInput from "./CountrySearchInput";
import CountrySearchSelect from "./CountrySearchSelect";

interface IProps {
  countryInputValue: string;
  setCountyInputValue: (value: string) => void;
  regionValue: string;
  setRegionValue: (value: string) => void;
}

const CountrySearch: FC<IProps> = ({
  countryInputValue,
  regionValue,
  setCountyInputValue,
  setRegionValue,
}) => {
  return (
    <Grid
      justifyContent={{ md: "center", lg: "space-between" }}
      alignItems="center"
      gridAutoFlow={{ lg: "column", md: "row" }}
      pb="60px"
    >
      <GridItem pb="20px">
        <Grid justifyContent="center" gridTemplateColumns="minmax(0, 500px)">
          <CountrySearchInput
            setCountyInputValue={setCountyInputValue}
            countryInputValue={countryInputValue}
          />
        </Grid>
      </GridItem>
      <GridItem>
        <CountrySearchSelect
          setRegionValue={setRegionValue}
          regionValue={regionValue}
        />
      </GridItem>
    </Grid>
  );
};

export default CountrySearch;