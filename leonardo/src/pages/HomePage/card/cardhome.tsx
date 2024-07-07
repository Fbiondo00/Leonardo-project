import React from 'react';
import { CardBody, CardContainer, CardItem } from "/src/components/ui/3d-card";

interface ThreeDCardDemoProps {
  title: string;
  description: string;
  background: string;
}

export const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({ title, description, background }) => {
  return (
    <CardContainer className={`relative w-full h-[16.5rem] rounded-[1.5rem] p-1 border border-black/[0.1] dark:border-white/[0.2] ${background}`}>
      <CardBody className="bg-white dark:bg-black w-full h-full rounded-[1.4rem] p-6 flex flex-col justify-between">
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="30"
            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
        </div>
        <div className="flex justify-start">
          <CardItem
            translateZ={20}
            target="__blank"
            className="rounded-xl text-xs font-normal text-indigo-500"
          >
            Scopri le offerte →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
