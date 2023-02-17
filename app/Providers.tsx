"use client";

import { inputTheme } from "@/components/CountrySearch/Input";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import themeConfig from "../utils/theme";

interface Props {
  children: React.ReactNode;
}

const theme = extendTheme({
  components: {
    Input: inputTheme,
  },
});

export default function Providers({ children }: Props) {
  return (
    <div>
      <ColorModeScript initialColorMode={themeConfig.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </div>
  );
}
