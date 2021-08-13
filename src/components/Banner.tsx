import { Flex, Box, Heading, Text, Image, useBreakpointValue } from '@chakra-ui/react'

export function Banner(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
       <Flex
         w="100%"
         h="80"
         px={["14", "16", "32"]}
         bgImage="url('/images/banner.svg')"
         bgRepeat="no-repeat"
         align="center"
         justify="space-between"
        >
            <Box color="white">
                <Heading mb="6">
                    5 Continentes,<br/> infinitas possibilidades.
                </Heading>
                <Text>
                    Chegou a hora de tirar do papel a viagem que você<br/>
                    sempre sonhou.
                </Text>
            </Box>

            { isWideVersion && (
                <Box mt="20">
                    <Image src="/images/airplane.svg" />    
                </Box>
            ) }
       </Flex>
    )
}