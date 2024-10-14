import { useEffect } from "react";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import banner4 from "../assets/images/banner-4.jpg";
import { gsap } from "gsap";
import JoinEntrepreneurs from "./JoinEntrepreneurs";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
// import bgImg from '../assets/images/bg.png'

const Banner = () => {
  const navigate = useNavigate();
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
    <div className="pt-[10rem]">
      <h1
        data-aos="zoom-in"
        className=" text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center"
      >
        Create the AI Company <br />
        {"You've Always Imagined."}
      </h1>
      {/* <p
      data-aos="fade-up" className="text-center mt-4 tracking-widest text-lg font-light text-secondary">
        DON’T STUCK AT BORING WEBSITES
      </p> */}

      <div className="py-[5rem]" data-aos="fade-up">
        <div className="h-[40vh] sm:h-[50vh] w-full lg:w-[80%] relative mx-auto -z-10">
          <img
            src={banner3}
            className="banner-img h-full w-full object-cover opacity-0 absolute top-0 left-0 rounded-lg"
            alt=""
            loading="lazy"
          />
          <img
            src={banner1}
            className="banner-img h-full w-full object-cover opacity-0 absolute top-0 left-0 rounded-lg"
            alt=""
            loading="lazy"
          />
          <img
            src={banner2}
            className="banner-img h-full w-full object-cover opacity-0 absolute top-0 left-0 rounded-lg"
            alt=""
            loading="lazy"
          />
          <img
            src={banner4}
            className="banner-img h-full w-full object-cover opacity-0 absolute top-0 left-0 rounded-lg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col gap-3 w-full justify-center items-center"
      >
        <button
        onClick={() => navigate("/contact")}
          className="primary-btn font-medium w-[20rem] flex justify-center py-3"
        >
          Start your own AI company
        </button>
        <JoinEntrepreneurs />
      </div>
    </div>
  );
};

export default Banner;
