import React, { useState } from 'react';
import { ThreeDCardDemo } from './card/cardhome';

export const HomePage: React.FC = () => {
  //const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  //const SLIDE_COUNT = 5;
  //const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  //const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] bg-leonardoRed">
      <div className="flex overflow-x-auto">
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
          </div>
        </div>
      </div>
    </div>
  );
};
