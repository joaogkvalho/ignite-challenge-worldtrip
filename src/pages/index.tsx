import { Text, Flex } from '@chakra-ui/react'

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Divider } from '../components/Divider'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <TravelTypes />
      <Divider />
      
      <Flex align="center" justify="center" mb="16">
        <Text textAlign="center" fontSize="4xl" fontWeight="700">
          Vamos nessa?<br/>
          Então escolha seu continente
        </Text>
      </Flex> 

      <Slider />
    </>
  )
}
