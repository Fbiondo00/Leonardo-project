// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const DashbordSlider= () => {
  return (
      <Swiper className="w-full h-full" loop={true}>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center text-[18px] bg-white rounded-3xl">
          Slide 9
        </SwiperSlide>
      </Swiper>
  );
}

export default DashbordSlider;
