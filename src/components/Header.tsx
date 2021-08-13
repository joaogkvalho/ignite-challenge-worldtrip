import { Flex, Box, Image } from '@chakra-ui/react'
import Link from 'next/link'

export function Header(){
    return(
        <Flex
          as="header"
          w="100%"
          h="20"
          p="12"
          align="center"
        >   
            <Link href="/">
                <Box mx="auto">
                    <Image src="/images/logo.svg" alt="worldtrip" />
                </Box>
            </Link>
        </Flex>
    )
}