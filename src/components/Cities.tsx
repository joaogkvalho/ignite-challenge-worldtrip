import { Stack, Box, Flex, Image, Text, Heading } from '@chakra-ui/react'

export function Cities(){
    return(
        <Stack
            w="100%"
            maxWidth={1140}
            mx="auto"
            mb="20"
            px="10"
            align="center"
            justify="center"
            direction={['column', 'column', 'row']}
            spacing="16"
        >   
            <Box
              w={220}
              h={250}
              borderBottomWidth="1px"
              borderLeftWidth="1px"
              borderRightWidth="1px"
              borderColor="yellow.50"
              borderRadius="10"
            >
                <Box>
                    <Image
                      src="/images/card01.jpg"
                      borderTopLeftRadius="10"
                      borderTopRightRadius="10" 
                    />
                </Box>
                <Flex align="center" justify="space-between" mx="5" my="8">
                    <Text fontSize="sm" color="gray.400">
                        <Heading fontSize="xl" color="gray.700" mb="2.5">
                            Londres
                        </Heading>
                        Reino Unido
                    </Text>
                    <Image
                        w={30}
                        h={30}
                        borderRadius="full"
                        src="/images/flag01.png" 
                    />
                </Flex>
            </Box>

            
            <Box
              w={220}
              h={250}
              borderBottomWidth="1px"
              borderLeftWidth="1px"
              borderRightWidth="1px"
              borderColor="yellow.50"
              borderRadius="10"
            >
                <Box>
                    <Image
                      src="/images/card02.jpg"
                      borderTopLeftRadius="10"
                      borderTopRightRadius="10" 
                    />
                </Box>
                <Flex align="center" justify="space-between" mx="5" my="8">
                    <Text fontSize="sm" color="gray.400">
                        <Heading fontSize="xl" color="gray.700" mb="2.5">
                            Paris
                        </Heading>
                        França
                    </Text>
                    <Image
                        w={30}
                        h={30}
                        borderRadius="full"
                        src="/images/flag02.png" 
                    />
                </Flex>
            </Box>
            
            <Box
              w={220}
              h={250}
              borderBottomWidth="1px"
              borderLeftWidth="1px"
              borderRightWidth="1px"
              borderColor="yellow.50"
              borderRadius="10"
            >
                <Box>
                    <Image
                      src="/images/card03.jpg"
                      borderTopLeftRadius="10"
                      borderTopRightRadius="10" 
                    />
                </Box>
                <Flex align="center" justify="space-between" mx="5" my="8">
                    <Text fontSize="sm" color="gray.400">
                        <Heading fontSize="xl" color="gray.700" mb="2.5">
                            Roma
                        </Heading>
                        Itália
                    </Text>
                    <Image
                        w={30}
                        h={30}
                        borderRadius="full"
                        src="/images/flag03.png" 
                    />
                </Flex>
            </Box>
            
            <Box
              w={220}
              h={250}
              borderBottomWidth="1px"
              borderLeftWidth="1px"
              borderRightWidth="1px"
              borderColor="yellow.50"
              borderRadius="10"
            >
                <Box>
                    <Image
                      src="/images/card04.jpg"
                      borderTopLeftRadius="10"
                      borderTopRightRadius="10" 
                    />
                </Box>
                <Flex align="center" justify="space-between" mx="5" my="8">
                    <Text fontSize="sm" color="gray.400">
                        <Heading fontSize="xl" color="gray.700" mb="2.5">
                            Praga
                        </Heading>
                        República Tcheca
                    </Text>
                    <Image
                        w={30}
                        h={30}
                        borderRadius="full"
                        src="/images/flag04.png" 
                    />
                </Flex>
            </Box>
        </Stack>
    )
}