import { useKeenSlider } from "keen-slider/react";
import React from "react";
import { IoStar } from "react-icons/io5";

const animation = { duration: 20000, easing: (t) => t };
const StartYourBusiness = ({ styles }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      origin: "auto",
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 0.8,
        },
      },
      "(max-width: 990px)": {
        slides: {
          perView: 0.5,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 0.5,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div
      ref={sliderRef}
      className="keen-slider py-[1.5rem] sm:py-[3rem] flex items-center relative bg-tertiary text-white z-10"
    >
      <div className="absolute top-0 left-0 w-[20vw] h-full bg-gradient-to-r from-tertiary via-white/25 to-tertiary"></div>
      <div className="keen-slider__slide w-screen overflow-y-hidden overflow-x-scroll flex-nowrap text-nowrap flex items-center gap-5">
        <IoStar className="text-[2.5rem] sm:text-6xl lg:text-7xl z-10 text-[#D9D9D9]" />
        <h2
          className={`${styles} text-[2.5rem] sm:text-7xl md:text-6xl lg:text-6xl 2xl:text-[5.5rem] relative z-10 font-semibold`}
        >
          START YOUR BUSINESS WITH IAAS
        </h2>
      </div>
      {/* Cloned Slide 1 - To simulate continuous looping */}
      <div className="keen-slider__slide w-screen overflow-y-hidden overflow-x-scroll flex-nowrap text-nowrap flex items-center gap-5">
        <IoStar className="text-[2.5rem] sm:text-6xl lg:text-7xl z-10 text-[#D9D9D9]" />
        <h2
          className={`${styles}
          text-[2.5rem] sm:text-7xl md:text-6xl lg:text-6xl 2xl:text-[5.5rem] relative z-10 font-semibold`}
        >
          START YOUR BUSINESS WITH IAAS
        </h2>
      </div>
    </div>
  );
};

export default StartYourBusiness;
