import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react'

export function Banner(){
    return(
       <Flex
         w="100%"
         h="80"
         px="32"
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

            <Box mt="20">
                <Image src="/images/airplane.svg" />
            </Box>
       </Flex>
    )
}