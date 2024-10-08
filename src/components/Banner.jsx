import { useEffect } from "react";
import banner1 from "../assets/images/banner-1.png";
import banner2 from "../assets/images/banner-2.png";
import banner3 from "../assets/images/banner-3.png";
import banner4 from "../assets/images/banner-4.png";
import { gsap } from "gsap";
import JoinEntrepreneurs from "./JoinEntrepreneurs";
import { Link } from "react-router-dom";
import bgImg from '../assets/images/bg.png'

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".banner-img", {
      opacity: 1,
      duration: 1,
      stagger: 2,
      ease: "power3.out",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="section-pt">
      <h1
      data-aos="zoom-in"
      className="text-[2.7rem] md:text-5xl font-semibold text-primary text-center">
        Create the AI Company <br />
        {"You've Always Imagined."}
      </h1>
      {/* <p
      data-aos="fade-up" className="text-center mt-4 tracking-widest text-lg font-light text-secondary">
        DON’T STUCK AT BORING WEBSITES
      </p> */}

      <div className="py-[6rem]"
      data-aos="fade-up">
        <div className="h-[50vh] w-full lg:w-[80%] relative mx-auto -z-10">
          <img
            src={banner1}
            className="banner-img h-full w-full object-cover opacity-0 absolute top-0 left-0"
            alt=""
          />
          <img
            src={banner2}
            className="banner-img h-full w-full object-cover opacity-0 absolute top-0 left-0"
            alt=""
          />
          <img
            src={banner3}
            className="banner-img h-full w-full object-cover opacity-0 absolute top-0 left-0"
            alt=""
          />
          <img
            src={banner4}
            className="banner-img h-full w-full object-cover opacity-0 absolute top-0 left-0"
            alt=""
          />
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col gap-3 w-full justify-center items-center">
        <Link className="primary-btn font-medium w-[20rem] flex justify-center py-3" to="/">Start your own AI company</Link>
        <JoinEntrepreneurs/>
      </div>
    </div>
  );
};

export default Banner;
