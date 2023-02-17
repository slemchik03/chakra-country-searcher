import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FC, memo } from "react";

interface IProps {
  countryInputValue: string;
  setCountyInputValue: (value: string) => void;
}

const CountrySearchInput: FC<IProps> = ({
  countryInputValue,
  setCountyInputValue,
}) => {
    
  return (
    <InputGroup variant="countrySearch">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon w="20px" h="20px" color="black.300" />}
      />
      <Input
        color="black.300"
        value={countryInputValue}
        onChange={(e) => setCountyInputValue(e.target.value)}
        placeholder="Country name"
      />
    </InputGroup>
  );
};

export default memo(CountrySearchInput);
