import { cn } from "@/lib/utils"
import React from "react";

interface CardOverCaroselProps {
  title: string;
  description: string;
  background: string;
  over : string
}

export const CardOverCarosel: React.FC<CardOverCaroselProps> = ({ title, description, background, over }) => {

  console.log("background", background)
  console.log("over", )

  return (
    <div className="w-full h-full">
      <div
        className={cn(
          "group w-full h-full cursor-pointer overflow-hidden relative bg-orange-700 card rounded-3xl shadow-xl mx-auto flex flex-col justify-end border border-transparent dark:border-neutral-800",
          `bg-[url(${background})] bg-cover bg-center`,
          // Preload hover image by setting it in a pseudo-element
          `before:bg-[url(${over})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          `hover:bg-[url(${over})]`,          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all after:transition-all duration-500"
        )}
      >
        <div className="text relative z-50 p-8">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
