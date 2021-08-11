import { Image } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

import styles from './styles.module.scss'

SwiperCore.use([Navigation, Pagination])


export function Slider(){
    return(
        <Swiper navigation={true} pagination={true} className={styles.slider}>
            <SwiperSlide>
                <Image src="/images/slide01.jpg" objectFit="cover" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/slide02.jpg" objectFit="cover" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/slide03.jpg" objectFit="cover" />
            </SwiperSlide>
        </Swiper>
    )
}