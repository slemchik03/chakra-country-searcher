import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { inputAnatomy as parts } from "@chakra-ui/anatomy"

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

// Defining a custom variant
const countrySearch = definePartsStyle(() => {
    return {
        field: {
            py: "10px",
            px: "30px",
            h: "70px",
            fontWeight: "bold",
            _dark: {
                _placeholder: {
                    color: "white"
                },
                bg: "#011a42",
                
            }
        },
        addon: {
            
        },
        element: {
            _dark: {
                color: "white"
            },
            paddingLeft: "5px",
        },
    }
})

export const inputTheme = defineMultiStyleConfig({
    variants: { countrySearch }
})