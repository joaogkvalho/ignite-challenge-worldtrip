import { Image, Text, Heading } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import Link from 'next/link'

import styles from './styles.module.scss'

SwiperCore.use([Navigation, Pagination])


export function Slider(){
    return(
        <Swiper
          navigation={true}
          pagination={true}
          className={styles.slider}
        >
            <SwiperSlide>
                <Image
                  src="/images/slide01.jpg"
                  w="100%"
                  h="100%"
                  objectFit="cover" 
                  position="absolute"
                />
                <Link href="/europe">
                  <Text
                    fontSize="2xl"
                    fontWeight="700"
                    color="white"
                    position="relative"
                    align="center"
                    mt="44"
                  >
                    <Heading>Europa</Heading>
                    O continente mais antigo
                  </Text>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src="/images/slide02.jpg"
                  w="100%"
                  h="100%"
                  objectFit="cover" 
                  position="absolute"
                />
                 <Text
                  fontSize="2xl"
                  fontWeight="700"
                  color="white"
                  position="relative"
                  align="center"
                  mt="44"
                >
                  <Heading>Ásia</Heading>
                  O continente da tecnologia
                </Text>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src="/images/slide03.jpg"
                  w="100%"
                  h="100%"
                  objectFit="cover" 
                  position="absolute"
                />
                 <Text
                  fontSize="2xl"
                  fontWeight="700"
                  color="white"
                  position="relative"
                  align="center"
                  mt="44"
                >
                  <Heading>America do Sul</Heading>
                  O continente da tradição
                </Text>
            </SwiperSlide>
        </Swiper>
    )
}