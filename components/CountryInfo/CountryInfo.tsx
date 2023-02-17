import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { ICountryDescribe } from "app/country/[slug]/CountryPage";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import CountryDescribe from "./CountryDescribe";

interface IProps {
  countryDescribe: ICountryDescribe;
}

const CountryInfo: FC<IProps> = ({ countryDescribe }) => {
  return (
    <Flex flexDir="column">
      <Link href="/">
        <Button mt="50px" maxW="100px">
          Back
        </Button>
      </Link>
      <Grid
        alignItems="center"
        w="100%"
        gridTemplateColumns={{ xl: "1fr 1fr" }}
        gridTemplateRows={{ sm: "400px", xl: "" }}
        justifyContent={{ sm: "center", xl: "space-between" }}
        gap={{ xl: "50px" }}
      >
        <GridItem maxH="300px" w="100%">
          <Image
            width={500}
            height={400}
            src={countryDescribe.flag}
            alt="Country image"
          />
        </GridItem>
        <GridItem>
          <CountryDescribe countryDescribe={countryDescribe} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default CountryInfo;
