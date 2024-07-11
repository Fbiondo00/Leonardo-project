import React, { useState } from 'react';
import { ThreeDCardDemo } from './card/cardhome';

export const HomePage: React.FC = () => {
  //const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  //const SLIDE_COUNT = 5;
  //const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  //const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20 "></div>
      <div className="flex fixed transform  md:fixed md:top-1/2 md:left-auto md:transform md:-translate-y-1/2 md:translate-x-0 bottom-4 md:bottom-auto">
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
      </div>
    </div>
  );
};
