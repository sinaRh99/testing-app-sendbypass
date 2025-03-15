"use client";

import { useRef, useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperReact, SwiperRef, SwiperSlide } from "swiper/react";

import { SLIDES_TEXT } from "@/constants/home";

import "swiper/css/navigation";

import { RecentSearch } from "./RecentSearch";
import { SearchBox } from "./SearchBox";
import { SliderNavigation } from "./SliderNavigation";

import "swiper/css";

export const Hero = () => {
  const [progress, setProgress] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSlideChange = (newIndex: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(newIndex);
      setSlideIndex(newIndex);
    }
  };

  const handlePreviousSlide = () => {
    handleSlideChange(Math.max(slideIndex - 1, 0));
  };

  const handleNextSlide = () => {
    handleSlideChange(Math.min(slideIndex + 1, SLIDES_TEXT.length - 1));
  };

  const handleOnSlideChange = (swiper: Swiper) => {
    setProgress(swiper.progress);
    setSlideIndex(swiper.activeIndex);
  };

  return (
    <div className="relative -mt-16 md:mt-0">
      {SLIDES_TEXT[slideIndex]}
      <SwiperReact
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={handleOnSlideChange}
        modules={[Autoplay, Navigation]}
        className="w-[calc(100vw_+_24px)] md:w-full !-ml-40 md:!ml-0 md:rounded-extra-large"
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <Image
              src={
                isMobile
                  ? `/images/home/image_${index + 1}_sm.webp`
                  : `/images/home/image_${index + 1}_lg.webp`
              }
              alt="hero"
              sizes="100vw"
              width={1253}
              height={496}
              quality={100}
              priority
              className="md:rounded-extra-large h-[200px] md:h-[496px]"
            />
          </SwiperSlide>
        ))}
      </SwiperReact>
      <SliderNavigation>
        <SliderNavigation.NavItem
          progress={progress}
          disabled={slideIndex === 0}
          onChange={handlePreviousSlide}
        />
        <SliderNavigation.NavItem
          progress={progress}
          isNext
          disabled={slideIndex === 2}
          onChange={handleNextSlide}
        />
        <SearchBox />
        <RecentSearch />
      </SliderNavigation>
      <div className="absolute inset-x-0 top-[124px] z-10 md:hidden">
        <SearchBox />
        <RecentSearch />
      </div>
    </div>
  );
};
