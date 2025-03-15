"use client";

import { FC } from "react";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import { ImagesSliderProps } from "./types";

import "swiper/css";
import "./ImagesSlider.Module.css";

export const ImagesSlider: FC<ImagesSliderProps> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="xs:size-[50px] sm:size-[75px] md:size-[90px] rounded-small"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt="product"
            width={0}
            height={0}
            sizes="100vw"
            className="xs:size-[50px] sm:size-[75px] md:size-[90px] rounded-small"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
