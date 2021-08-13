import { Image, Text } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

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
                <Text
                  fontSize={["2xl", "3xl"]}
                  fontWeight="700"
                  color="white"
                  position="relative"
                  align="center"
                  mt="44"
                >
                  Europa<br/>
                  O continente mais antigo
                </Text>
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
                  fontSize={["2xl", "3xl"]}
                  fontWeight="700"
                  color="white"
                  position="relative"
                  align="center"
                  mt="44"
                >
                  Ásia<br/>
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
                  fontSize={["2xl", "3xl"]}
                  fontWeight="700"
                  color="white"
                  position="relative"
                  align="center"
                  mt="44"
                >
                  América do Sul<br/>
                  O continente da tradição
                </Text>
            </SwiperSlide>
        </Swiper>
    )
}