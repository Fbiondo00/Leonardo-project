import React from 'react'
import EmblaCarousel from '../Dashbord/carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

export const HomePage : React.FC = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20 "></div>
      <div className="relative z-10 w-full h-full">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>

  );
};
