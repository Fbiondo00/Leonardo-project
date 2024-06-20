import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import LNavBar from "../LeonardoNavBar";
import EmblaCarousel from './carousel/EmblaCarousel';


export const Dashboard = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



  return (
    <div className="w-full h-[100vh] bg-leonardoRed">
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20"></div>
      <LNavBar icon={1}></LNavBar>
      <div className="flex flex-col md:flex-row justify-center items-center w-[100%] h-full rounded-lg">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default Dashboard;
