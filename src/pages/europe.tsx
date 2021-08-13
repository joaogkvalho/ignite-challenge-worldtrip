import { Flex, Image, Text, HStack, Box, Heading } from '@chakra-ui/react'
import { Cities } from '../components/Cities'
import { Header } from '../components/Header'

export default function Europe(){
    return(
        <>
            <Header />

            <Flex
                w="100%"
                maxWidth={1440}
                h={500}
                mb="20"
            >   
                <Image
                    w="100%"
                    h={500}
                    src="/images/europeBanner.jpg" 
                    objectFit="cover"
                    position="absolute"
                />
                <Text
                    color="white"
                    fontSize="5xl"
                    fontWeight="700"
                    position="relative"
                    mt={350}
                    ml={160}
                >
                    Europa
                </Text>
            </Flex>
        
            <Flex
              w="100%"
              maxWidth={1100}
              mx="auto"
              px="10"
              align="center"
              justify="space-between"
              direction={["column", "column", "row"]}
              my="20"
            >   
                <Box w="100%" maxWidth={500}>
                    <Text fontSize="xl" textAlign="justify">
                        A Europa é, por convenção, um dos seis continentes do mundo. 
                        Compreendendo a península ocidental da Eurásia, a Europa geralmente 
                        divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
                    </Text>
                </Box>

                <HStack spacing="10" mt="10">
                    <Box align="center">
                        <Heading color="yellow.800">50</Heading>
                        <Text fontWeight="700">países</Text>
                    </Box>
                    <Box align="center">
                        <Heading color="yellow.800">60</Heading>
                        <Text fontWeight="700">línguas</Text>
                    </Box>
                    <Box align="center">
                        <Heading color="yellow.800">27</Heading>
                        <Text fontWeight="700">cidades +100</Text>
                    </Box>
                </HStack>
            </Flex>

            <Cities />
        </>
    )
}