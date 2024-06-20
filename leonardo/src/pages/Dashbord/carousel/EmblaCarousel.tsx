import React, { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import './css/caro.css';

const TWEEN_FACTOR_BASE = 0.5;
const SCALE_FACTOR = 0.9;
const DEPTH_FACTOR = 0.8;
const OPACITY_FACTOR = 0.7;

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';
      const totalSlides = emblaApi.slideNodes().length;

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;

          // Calculate the scale, depth, opacity, and z-index based on distance from the center
          const centerIndex = Math.round(scrollProgress * (emblaApi.scrollSnapList().length));
          const distanceFromCenter = Math.min(
            Math.abs(centerIndex - slideIndex),
            Math.abs(centerIndex - (slideIndex + totalSlides)),
            Math.abs(centerIndex - (slideIndex - totalSlides))
          );
          const scale = Math.max(SCALE_FACTOR, 1 - distanceFromCenter * 0.2);
          const translateZ = -distanceFromCenter * DEPTH_FACTOR * 100;
          const opacity = Math.max(OPACITY_FACTOR, 1 - distanceFromCenter * 0.5);
          const zIndex = distanceFromCenter === 0 ? 1 : -distanceFromCenter;

          if (tweenNode.parentElement) {
            tweenNode.parentElement.style.transition = 'transform 0.3s ease, opacity 0.3s ease, z-index 0s';
            tweenNode.parentElement.style.transform = `scale(${scale}) translateZ(${translateZ}px)`;
            tweenNode.parentElement.style.opacity = `${opacity}`;
            tweenNode.parentElement.style.zIndex = `${zIndex}`;
          }
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('select', tweenParallax)
      .on('settle', tweenParallax)
      .on('resize', tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className="embla max-w-[95%] mt-10 m-auto" style={{ '--slide-height': '28.5rem', '--slide-spacing': '0', '--slide-size': '45%' } as React.CSSProperties}>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y touch-pinch-zoom ml-[calc(var(--slide-spacing)*-1)]">
          {slides.map((index) => (
            <div className="embla__slide flex-[0_0_var(--slide-size)] min-w-[0] pl-[var(--slide-spacing)]" key={index}>
              <div className="embla__parallax rounded-[2rem] h-[100%] overflow-hidden">
                <div className="embla__parallax__layer relative h-[100%] w-[100%] flex justify-center">
                  <img
                    className="embla__slide__img rounded-[1.8rem] block h-[var(--slide-height)] w-[100%] object-cover embla__parallax__img max-w-none flex-[0_0_calc(115%+(var(--slide-spacing)*2))]"
                    src={`https://picsum.photos/600/350?v=${index}`}
                    alt={`slide ${index}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center min-h-[6vh]">
        <div className="embla__controls grid grid-cols-[repeat(auto,_1fr)] justify-between gap-[1.2rem]">
          <div className="embla__buttons grid grid-cols-[repeat(2,_1fr)] gap-[5.6rem] items-center">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className="embla__button appearance-none bg-transparent touch-manipulation inline-flex no-underline cursor-pointer border-0 p-0 m-0 shadow-[inset_0_0_0_0.2rem_rgba(0,0,0,0)] w-[1.6rem] h-[1.6rem] z-[1] rounded-[50%] text-stone-800 items-center justify-center embla__button_custom"
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className="embla__button appearance-none bg-transparent touch-manipulation inline-flex no-underline cursor-pointer border-0 p-0 m-0 shadow-[inset_0_0_0_0.2rem_rgba(0,0,0,0)] w-[1.6rem] h-[1.6rem] z-[1] rounded-[50%] text-stone-800 items-center justify-center"
            />
          </div>
        </div>


        <div className="embla__dots flex flex-wrap justify-center items-center mr-[calc((2.6rem-1.4rem)/2*-1)]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
