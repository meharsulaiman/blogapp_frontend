'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '@/assets/sliderTemp/img1.png'
import img2 from '@/assets/sliderTemp/img2.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const width = window.innerWidth;
const height = window.innerHeight;
export default function HomeSlider() {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={img1} alt='home slider image' width={width} height={height / 2 } style={{objectFit: 'cover'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} alt='home slider image' width={width} height={height / 2 } style={{objectFit: 'cover'}}/>
        </SwiperSlide>
        
      </Swiper>
  )
}
