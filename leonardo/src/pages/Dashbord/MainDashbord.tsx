// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import DashbordSlider from "./Dashbord_Slider";

export const Dashbord = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20 "></div>
      <div className="w-[45%] h-[40%] rounded-lg">
        <DashbordSlider></DashbordSlider>
      </div>
    </div>
  );
}

export default Dashbord;
