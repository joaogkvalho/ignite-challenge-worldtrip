import { Flex, Box, Image } from '@chakra-ui/react'

export function Header(){
    return(
        <Flex
          as="header"
          w="100%"
          h="20"
          p="12"
          align="center"
        >
            <Box mx="auto">
                <Image src="/images/logo.svg" alt="worldtrip" />
            </Box>
        </Flex>
    )
}