import { Flex, Divider as ChakraDivider } from "@chakra-ui/react"

export function Divider(){
    return( 
        <Flex align="center" justify="center" mb="16">
            <ChakraDivider
              orientation="horizontal"
              w="20"
              borderColor="gray.800"
              borderWidth={1}
            />
        </Flex>
    )
}