import { Flex, SimpleGrid, Box, Image, Text } from '@chakra-ui/react'

export function TravelTypes(){
    return( 
        <Flex
            w="100%"
            maxWidth={1180}
            justify="center"
            mx="auto"
            my="20"
        >
           <SimpleGrid
                columns={[2, 3, 5]}
                spacing="14"
                align="center"
                justify="center"
            >
                <Box>
                    <Image src="/images/cocktail.svg" />
                    <Text mt="4" fontWeight="700">vida noturna</Text>
                </Box>
                <Box>
                    <Image src="/images/surf.svg" />
                    <Text mt="4" fontWeight="700">praia</Text>
                </Box>
                <Box>
                    <Image src="/images/building.svg" />
                    <Text mt="4" fontWeight="700">moderno</Text>
                </Box>
                <Box>
                    <Image src="/images/museum.svg" />
                    <Text mt="4" fontWeight="700">clássico</Text>
                </Box>
                <Box>
                    <Image src="/images/earth.svg" />
                    <Text mt="4" fontWeight="700">e mais...</Text>
                </Box>
            </SimpleGrid>
        </Flex>
    )
}