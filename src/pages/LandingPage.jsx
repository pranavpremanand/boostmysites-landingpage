import crmImg from "../assets/images/customer-relationship-management.png";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import flowImg1 from "../assets/images/flow-img-1.png";
import flowImg2 from "../assets/images/flow-img-2.png";
import flowImg3 from "../assets/images/flow-img-3.png";
import { Link as SLink } from "react-scroll";
import { useKeenSlider } from "keen-slider/react";
import { FaUnlockAlt } from "react-icons/fa";
import access1 from "../assets/images/AI-Driven Design.jpg";
import access2 from "../assets/images/Personalized Content.jpg";
import access3 from "../assets/images/Optimized for Conversions.jpg";
import access4 from "../assets/images/Predictive Analytics.jpg";
import access5 from "../assets/images/Automated Marketing.jpg";
import access6 from "../assets/images/Continuous Optimization.jpg";
import { lazy } from "react";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
const Banner = lazy(() => import("../components/landingPage/Banner"));
const FeaturedIn = lazy(() => import("../components/FeaturedIn"));
const FAQ = lazy(() => import("../components/FAQ"));
const JoinEntrepreneurs = lazy(() => import("../components/JoinEntrepreneurs"));
const Reviews = lazy(() => import("../components/Reviews"));
const Videos = lazy(() => import("../components/Videos"));
const OurOffices = lazy(() => import("../components/OurOffices"));
// const ContactForm = lazy(() => import("../components/ContactForm"));

const items = [
  {
    id: 1,
    title: "Client Management",
    description:
      "Client management is the process of managing a company's interactions with clients and potential clients to build and maintain good relationships.",
    img: img1,
  },
  {
    id: 2,
    title: "Marketing Services",
    description:
      "Marketing services are the activities involved in promoting and selling a company's services to the public. The goal of marketing services is to increase sales and brand awareness, and to build relationships with customers to encourage loyalty.",
    img: img2,
  },
  {
    id: 3,
    title: "Branding",
    description:
      "Branding is the process of creating and disseminating the brand name, its qualities and personality. Branding could be applied to the entire corporate identity as well as to individual products and services or concepts.",
    img: img3,
  },
  {
    id: 4,
    title: "Expert Mentorship",
    description:
      "A mentor can help your business significantly by sharing valuable lessons from his failures and successes.",
    img: img4,
  },
];

const accesses = [
  { title: "AI-Driven Design", img: access1 },
  { title: "Personalized Content", img: access2 },
  { title: "Optimized for Conversions", img: access3 },
  { title: "Predictive Analytics", img: access4 },
  { title: "Automated Marketing", img: access5 },
  { title: "Continuous Optimization", img: access6 },
];

const workFlow = [
  {
    id: 1,
    title: "Step 1: Ideation & Planning",
    img: flowImg1,
    howWeDo: [
      "Identify a Market Problem: Find a problem that can be solved effectively using AI and determine your target audience.",
      "Develop Your AI Concept: Define how your AI solution will provide value, and validate your idea by researching competitors and customer needs.",
      "Create a Business Plan: Develop a clear business model, outline your target audience, and establish goals for growth.",
    ],
  },
  {
    id: 2,
    title: "Step 2: Build & Launch Your AI Product",
    img: flowImg2,
    howWeDo: [
      "Assemble Your Team: Hire data scientists, developers, and business strategists.",
      "Develop an MVP (Minimum Viable Product): Build a working prototype of your AI solution, gather feedback, and iterate to improve it.",
      "Launch the Product: Test your AI product with a small audience, adjust based on feedback, and launch to the broader market with a strong marketing campaign.",
    ],
  },
  {
    id: 3,
    title: "Step 3: Growth & Scaling",
    img: flowImg3,
    howWeDo: [
      "Customer Acquisition: Develop and execute marketing strategies to attract customers.",
      "Optimize & Improve: Continuously enhance your AI model by retraining with new data and adding features to increase its effectiveness.",
      "Scale Operations: Expand to new markets, grow your team, and build partnerships to further develop and distribute your AI solution.",
    ],
  },
];

const LandingPage = () => {
  const [introVidIsPlaying, setIntroVidIsPlaying] = useState(false);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="landing-page" id="home">
      <div className="wrapper">
        <Banner
          introVidIsPlaying={introVidIsPlaying}
          setIntroVidIsPlaying={setIntroVidIsPlaying}
        />
      </div>
      <div className="wrapper">
        <section
          id="features"
          className="flex flex-col items-center justify-center gap-10 text-center section-pt"
        >
          <div className="flex flex-col gap-2 items-center">
            <p
              data-aos="fade-up"
              className="tracking-widest text-lg font-light text-secondary/70"
            >
              Top-Notch Features
            </p>
            <h2
              data-aos="fade-up"
              className="text-4xl font-bold text-secondary"
            >
              Access to 2500+ comprehensive portfolio
            </h2>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mt-5 text-secondary"
          >
            {items.map(({ id, title, description, img }) => (
              <div
                className="p-8 rounded-md bg-[#131B23] flex flex-col items-center gap-4 text-center"
                key={id}
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 justify-center">
                  <img
                    src={crmImg}
                    className="h-[2.5rem] object-contain"
                    alt=""
                  />
                  <h4 className="text-2xl font-bold">{title}</h4>
                </div>
                <p className="md:min-h-[7rem]">{description}</p>
                {/* <p className="text-secondary/70 text-sm">Manage your site</p> */}
                <div className="h-[13rem]">
                  <img src={img} className="h-full object-cover" alt="" />
                </div>
                {/* <Link rel="noreferrer" target="_blank" to="https://boostmysites.com/aiexpert/" className="secondary-btn">
                  Learn More
                </Link> */}
              </div>
            ))}
          </div>
        </section>

        <section className="section-pt flex flex-col items-center justify-center text-center gap-10">
          <h1
            data-aos="zoom-in"
            className=" text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center"
          >
            Launch the company <br />
            {"you've always envisioned."}
          </h1>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 w-full justify-center items-center"
          >
            <Link
              className="primary-btn font-medium w-[20rem] flex justify-center py-3"
              to="/ai-expert/contact"
            >
              Start your own AI company
            </Link>
            <JoinEntrepreneurs />
          </div>
          <div className="mt-2 text-secondary" data-aos="fade-up">
            {/* <h6 className="text-2xl font-medium">UNLEASH YOUR AI WEBSITE</h6> */}
            <p className="text-secondary/70 max-w-[40rem] text-sm">
              We are constantly adding new technology and creation methods that
              we couldn’t previously disclose. Join{" "}
              <span className="text-secondary font-medium">Bootmysites</span>{" "}
              and level up now.
            </p>
            {/* <div className="my-10 flex justify-center">
              <img src={aiImg} className="h-[5rem] object-contain" alt="" />
            </div> */}
          </div>
        </section>

        <section id="reviews" className="pt-[4rem] text-center text-secondary">
          <div className="max-w-[40rem] mx-auto">
            {/* <h1
              data-aos="zoom-in"
              className="text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary"
            >
              Boostmysites reviews:
            </h1> */}
            <h1
              data-aos="zoom-in"
              className="text-[2.7rem] leading-[3rem] md:text-5xl font-semibold mt-2"
            >
              Wall Of Love <BsHeartFill className="text-red-500 inline ml-1" />
            </h1>
            <h1
              data-aos="fade-up"
              className="text-2xl font-medium mt-[1rem] text-primary"
            >
              <span className="font-bold">Latest Reviews</span> from our
              Customers
            </h1>
          </div>
          <Reviews />
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 w-full justify-center items-center section-pt"
          >
            <Link
              className="primary-btn font-medium w-[20rem] flex justify-center py-3"
              to="/ai-expert/contact"
            >
              Start your own AI company
            </Link>
            <JoinEntrepreneurs />
          </div>
        </section>

        <section
          className="section-pt keen-slider max-w-[50rem] mx-auto"
          ref={sliderRef}
          data-aos="fade-up"
          id="success-stories"
        >
          <div className="keen-slider__slide">
            <h3 className="text-primary font-bold text-xl mb-7 text-center">
              InnovateAI: Revolutionizing Healthcare with AI
            </h3>
            <p className="text-secondary font-light">
              <span className="font-bold">John Smith</span> had a bold vision to
              use AI to improve diagnostic accuracy in healthcare, but he needed
              guidance to turn his idea into reality. With the help of
              Boostmysites, he launched InnovateAI, a cutting-edge AI company
              that integrates diagnostic tools into hospitals. Within six
              months, InnovateAI was adopted by over 30 healthcare facilities,
              reducing diagnostic errors significantly. Today, InnovateAI
              continues to grow, offering revolutionary AI healthcare solutions.
            </p>
          </div>
          <div className="keen-slider__slide">
            <h3 className="text-primary font-bold text-xl mb-7 text-center">
              {"VisionaryAI: Transforming Retail with AI Insights"}
            </h3>
            <p className="text-secondary font-light">
              <span className="font-bold"> Sarah Patel </span>
              {
                "always wanted to leverage AI to transform retail operations through predictive analytics. With Boostmysites’ support, she launched VisionaryAI, a platform that helps retailers optimize inventory and enhance customer engagement. Within one year, VisionaryAI's clients saw a 25% revenue increase and streamlined operations, positioning Sarah as a rising leader in the AI retail space."
              }
            </p>
          </div>
          <div className="keen-slider__slide">
            <h3 className="text-primary font-bold text-xl mb-7 text-center">
              AutoMinds: Automating Logistics with AI*
            </h3>
            <p className="text-secondary font-light">
              <span className="font-bold">Rajesh Kumar</span> aimed to use AI to
              solve complex logistics challenges, but lacked the technical
              foundation. Partnering with Boostmysites, he created AutoMinds, an
              AI-driven platform that automates logistics processes. With
              Boostmysites’ assistance in development and marketing, AutoMinds
              now serves major logistics firms, increasing efficiency and
              lowering operational costs by 20%.
            </p>
          </div>
          <div className="keen-slider__slide">
            <h3 className="text-primary font-bold text-xl mb-7 text-center">
              DataGenius: AI-Powered Insights for Businesses
            </h3>
            <p className="text-secondary font-light">
              <span className="font-bold">Maria Lopez</span> had the idea for
              DataGenius, an AI-powered business intelligence platform, but
              needed expert support to execute it. With Boostmysites’ guidance,
              she built a user-friendly, scalable platform that attracted major
              corporate clients within the first year. DataGenius now helps
              companies leverage AI to drive smarter decision-making.
            </p>
          </div>
        </section>

        <section className="text-center section-pt">
          <h1 className=" text-[2.7rem] mb-14 leading-[3rem] md:text-5xl font-semibold text-primary max-w-[40rem] mx-auto">
            Turn your vision into the company of your dreams.
          </h1>
          {/* <h2 className="font-medium text-secondary my-14 text-3xl">
            with BootmySite.com
          </h2> */}
          <Videos
            introVidIsPlaying={introVidIsPlaying}
            setIntroVidIsPlaying={setIntroVidIsPlaying}
          />
        </section>

        <section
          id="courses"
          data-aos="fade-up"
          className="section-pt text-secondary"
        >
          <h2 className=" text-[2.7rem] leading-[3rem] md:text-5xl text-center uppercase md:flex justify-center gap-5">
            <FaUnlockAlt className="text-4xl inline" /> You Will Get{" "}
            <span className="font-semibold">Access To</span>
          </h2>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10 max-w-3xl mx-auto">
            {accesses.map((access) => (
              <div
                key={access.title}
                style={{ backgroundImage: `url(${encodeURI(access.img)})` }}
                className="relative bg-center group overflow-hidden hover:scale-105 bg-cover cursor-pointer transition-all duration-200 rounded-md p-5 text-xl sm:text-2xl flex justify-center items-center text-center w-full aspect-square"
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 h-full w-full"></div>
                <p className="z-10 font-semibold">{access.title}</p>
              </div>
            ))}
          </div>
          <div data-aos="fade-up" className="section-pt">
            <h1 className=" text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center">
              Build the company <br />
              {"you've always dreamed of."}
            </h1>
            <div className="flex flex-col gap-3 w-full justify-center items-center mt-14">
              <Link
                className="primary-btn font-medium w-[20rem] flex justify-center py-3"
                to="/ai-expert/contact"
              >
                Start your own AI company
              </Link>
              <JoinEntrepreneurs />
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="section-pt">
          <div className="grid grid-cols-1 gap-10 md:gap-24 text-secondary max-w-6xl mx-auto">
            {workFlow.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row ${
                  step.id % 2 === 0 && "md:flex-row-reverse"
                } gap-5 md:gap-10`}
              >
                {/* <div className="w-full md:w-[50%]">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full max-h-[60vh] h-full md:max-h-full object-contain md:object-cover rounded-lg"
                  />
                </div> */}
                <div className="w-full md:w-[50%] flex flex-col gap-4">
                  <h5 className="text-lg font-medium">{step.title}</h5>
                  <ul className="border flex flex-col gap-5 h-fit border-dashed border-[#9747FF] rounded-md p-4">
                    {step.howWeDo.map((step) => (
                      <li className="bg-[#131B23] p-4 rounded-md" key={step}>
                        &#x2022; {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <h1 className=" text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center mt-20">
            Bring your dream company to life.
          </h1>
        </section>
      </div>

      <section className="py-14">
        <FeaturedIn />
      </section>
      <div className="wrapper">
        <section data-aos="fade-up" className="">
          <FAQ />
        </section>
        <div className="mt-20">
          <div className="flex flex-col gap-3 w-full justify-center items-center mt-14">
            <Link
              className="primary-btn font-medium w-[20rem] flex justify-center py-3"
              to="/ai-expert/contact/step1"
            >
              Start your own AI company
            </Link>
            <JoinEntrepreneurs />
          </div>
        </div>

        {/* <section data-aos="fade-up" className="section-pt">
          <ContactForm />
        </section> */}

        <section data-aos="fade-up" className="section-pt">
          <OurOffices />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;