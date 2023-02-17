import { Grid } from "@chakra-ui/react";
import { FC, memo } from "react";
import CountryCard from "./CountryCard";

export interface ICountryOverview {
  population: number;
  capital: string;
  name: string;
  region: string;
  flag: string;
}

interface IProps {
  counties: ICountryOverview[];
}

const CountryList: FC<IProps> = ({ counties }) => {

  return (
    <Grid
      py="50px"
      gap="50px"
      maxW="1250px"
      px="10px"
      w="100%"
      justifyContent="center"
      gridTemplateColumns={{
        xl: "repeat(4, minmax(0,400px))",
        md: "repeat(3, minmax(0,400px))",
        sm: "repeat(2, minmax(0,400px))",
      }}
    >
      {counties.map(({ population, capital, name, region, flag }) => (
        <CountryCard
          key={name}
          population={population}
          capital={capital!}
          name={name}
          region={region}
          flag={flag}
        />
      ))}
    </Grid>
  );
};

export default memo(CountryList);