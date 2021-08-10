import { Flex, Divider as ChakraDivider } from "@chakra-ui/react"

export function Divider(){
    return( 
        <Flex align="center" justify="center" mb="20">
            <ChakraDivider
              orientation="horizontal"
              w="20"
            />
        </Flex>
    )
}