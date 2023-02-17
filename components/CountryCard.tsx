import { Card, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import separateNumbers from "utils/separateNumber";
import { ICountryOverview } from "./CountryList";

interface IProps extends ICountryOverview {}

const CountryCard: FC<IProps> = ({
  name,
  population,
  region,
  capital,
  flag,
}) => {
  const router = useRouter();

  return (
    <Grid
      onClick={() => router.push("/country/" + name)}
      gridTemplateColumns="minmax(0,400px)"
    >
      <Card shadow="lg" minH="400px" cursor="pointer">
        <Grid gridTemplateRows="1.5fr 1fr">
          <GridItem position="relative">
            <Image
              fill
              src={flag}
              style={{ objectFit: "fill" }}
              alt="Country flag image"
            />
          </GridItem>
          <GridItem px="10px" py="30px">
            <Text fontWeight="bold" fontSize="xl">
              {name}
            </Text>
            <Flex pt="15px" flexDirection="column" gap="5px">
              <Text fontSize="md">
                <b>Population:</b> {separateNumbers(population)}
              </Text>
              <Text fontSize="md">
                <b> Region:</b> {region}
              </Text>
              <Text fontSize="md">
                <b> Capital:</b> {capital}
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CountryCard;
