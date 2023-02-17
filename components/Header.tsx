"use client"

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isTextVisible] = useMediaQuery("(min-width: 780px)", { ssr: true });

  return (
    <Box bg="white" _dark={{ bgColor: "#010b1c" }} py="25px" shadow="lg">
      <Center>
        <Flex
          maxW="1250px"
          px="10px"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Where in the world?
          </Text>
          <Box>
            <Button>
              <Flex
                cursor="pointer"
                alignItems="center"
                justifyContent="center"
                gap="5px"
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? (
                  <MoonIcon w="23px" h="23px" />
                ) : (
                  <SunIcon w="23px" h="23px" />
                )}
                {isTextVisible && (
                  <Text fontWeight="bold" fontSize="md">
                    {colorMode === "light" ? "Dark" : "Light"} Mode
                  </Text>
                )}
              </Flex>
            </Button>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Header;
