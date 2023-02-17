import { Grid, Select } from "@chakra-ui/react";
import { FC, memo } from "react";

interface IProps {
  regionValue: string;
  setRegionValue: (value: string) => void;
}

const regions = ["Americas", "Africa", "Asia", "Oceania", "Europe"];

const CountrySearchSelect: FC<IProps> = ({ regionValue, setRegionValue }) => {
  return (
    <Grid
      gridTemplateColumns={{
        lg: "minmax(0, 200px)",
        md: "minmax(0, 150px)",
      }}
      justifyContent="center"
    >
      <Select
        bg="white"
        fontWeight="bold"
        _dark={{ bg: "#011a42" }}
        border="none"
        h="70px"
        placeholder="Filter by Region"
        value={regionValue}
        onChange={(e) => setRegionValue(e.target.value)}
      >
        {regions.map((region, idx) => (
          <option key={idx} value={region}>
            {region}
          </option>
        ))}
      </Select>
    </Grid>
  );
};

export default memo(CountrySearchSelect);