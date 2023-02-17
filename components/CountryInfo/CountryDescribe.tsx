import { Grid, GridItem, Text } from "@chakra-ui/react";
import { ICountryDescribe } from "app/country/[slug]/CountryPage";
import { FC } from "react";

interface IProps {
  countryDescribe: Omit<ICountryDescribe, "flag">;
}

const CountryDescribe: FC<IProps> = ({ countryDescribe }) => {
  return (
    <Grid w="100%" gridAutoFlow="row">
      <Text fontWeight="bold" fontSize="3xl">
        {countryDescribe.name}
      </Text>
      <GridItem maxH="200px" pt="25px" justifyContent="space-between">
        <Grid
          gap="5px"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="repeat(5, 1fr)"
        >
          {Object.entries(countryDescribe.propertiesToRender).map(
            ([key, value], idx) => {
              const propertyName = key.slice(0, 1).toUpperCase() + key.slice(1);
              if (Array.isArray(value)) {
                return (
                  <GridItem key={idx}>
                    <Text>
                      <>
                        <b>{propertyName}</b>:{" "}
                        {value.map((v, idx) =>
                          idx === value.length - 1 ? v.name : v.name + ", "
                        )}
                      </>
                    </Text>
                  </GridItem>
                );
              }
              return (
                <GridItem key={idx}>
                  <Text>
                    <b>{propertyName}: </b>
                    {value}
                  </Text>
                </GridItem>
              );
            }
          )}
        </Grid>
      </GridItem>
      {countryDescribe.borders && (
        <GridItem>
          <Grid gridTemplateColumns="1fr 2fr">
            <Text fontSize="xl" fontWeight="bold">
              Border counties:
            </Text>
            <Grid
              gridTemplateRows="auto"
              gridTemplateColumns="repeat(5, 1fr)"
              gap="10px"
            >
              {countryDescribe.borders.map((country, idx) => (
                <GridItem
                  key={idx}
                  bg="gray.50"
                  _dark={{ bg: "#010b1c", color: "white" }}
                  border="2px"
                  borderColor="gray.100"
                  rounded="md"
                  p="10px"
                >
                  {country}
                </GridItem>
              ))}
            </Grid>
          </Grid>
        </GridItem>
      )}
    </Grid>
  );
};

export default CountryDescribe;
