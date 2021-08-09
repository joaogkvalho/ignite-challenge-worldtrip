import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        yellow: {
            "800": "#FFBA08"
        },
        gray: {
            "700": "#47585B",
            "400": "#999999"
        },
        white: "#F5F8FA"
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.700'
            }
        }
    }
})