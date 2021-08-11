import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

import styles from './styles.scss'

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

export function Slider(){
    return(
        <Swiper navigation={true} className="mySwiper">    
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
    )
}