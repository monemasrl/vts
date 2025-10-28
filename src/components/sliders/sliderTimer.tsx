// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
// TypeScript may not have type declarations for the Swiper CSS side-effect import.
// @ts-ignore - suppress "Cannot find module or type declarations" for this CSS import
import "swiper/css";
// @ts-ignore - suppress "Cannot find module or type declarations" for this CSS import
import "swiper/css/navigation";
// @ts-ignore - suppress "Cannot find module or type declarations" for this CSS import
import "./sliderTimer.scss";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      modules={[Navigation]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src="/image/one.jpg" alt="Slide 1" width={500} height={300} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/image/two.jpg" alt="Slide 2" width={500} height={300} />
      </SwiperSlide>
    </Swiper>
  );
}
