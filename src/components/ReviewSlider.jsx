import { useEffect, useState } from "react";
import profileImg from "../assets/images/profile-image.png";

const reviews = [
  {
    id: 1,
    name: "SARAH",
    designation: "Co-Founder",
    thought:
      "Sarah’s Thoughts: \n Boostmysites helped me accelerate my launch. From refining my business model to ensuring a smooth launch, their guidance allowed VisionaryAI to achieve results fast.",
  },
  {
    id: 2,
    name: "RAJESH",
    designation: "Co-Founder",
    thought:
      "Rajesh’s Thoughts: \n Boostmysites made the complex process of launching an AI company straightforward. Their hands-on support was critical in getting my company off the ground quickly.",
  },
  {
    id: 3,
    name: "JOHN",
    designation: "Co-Founder",
    thought:
      'John’s Thoughts: \n The Welcome experience has been 10 out of 10. When our sponsors like Facebook are considering sponsoring our events, Welcome is our "secret weapon"',
  },
  {
    id: 4,
    name: "MARIA",
    designation: "Co-Founder",
    thought:
      "Maria’s Thoughts: \n Boostmysites provided everything I needed to succeed, from technical development to marketing strategies. They were the catalyst for turning my idea into a thriving business.",
  },
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the current index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Get the indices of the three reviews (left, center, right)
  const getThreeReviews = () => {
    const left = (currentIndex - 1 + reviews.length) % reviews.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % reviews.length;

    return [reviews[left], reviews[center], reviews[right]];
  };

  const [leftReview, centerReview, rightReview] = getThreeReviews();

  return (
    <div data-aos="fade-up" className="min-h-[16rem] flex relative mt-20 text-tertiary md:w-[80%] mx-auto">
      <div className="h-full bg-secondary/90 rounded-lg p-3 md:p-8 flex flex-col gap-2 items-center justify-center">
        <img
          src={profileImg}
          className="h-[5rem] w-[5rem] object-cover rounded-full"
          alt=""
        />
        <h4 className="text-2xl font-medium text-tertiary">{leftReview.name}</h4>
        <p className="font-light">{leftReview.designation}</p>
        <p className="text-tertiary/70 text-sm whitespace-pre-line">
          {leftReview.thought}
        </p>
      </div>
      <div className="absolute w-10/12 sm:w-3/5 min-h-[110%] shadow-large top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-secondary rounded-lg p-3 md:p-8 flex flex-col gap-2 items-center justify-center">
        <img
          src={profileImg}
          className="h-[5rem] w-[5rem] object-cover rounded-full"
          alt=""
        />
        <h4 className="text-2xl font-medium text-tertiary">
          {centerReview.name}
        </h4>
        <p>{centerReview.designation}</p>
        <p className="text-tertiary/70 text-sm whitespace-pre-line">
          {centerReview.thought}
        </p>
      </div>
      <div className="h-full bg-secondary/90 rounded-lg p-3 md:p-8 flex flex-col gap-2 items-center justify-center">
        <img
          src={profileImg}
          className="h-[5rem] w-[5rem] object-cover rounded-full"
          alt=""
        />
        <h4 className="text-2xl font-medium text-tertiary">
          {rightReview.name}
        </h4>
        <p className="font-light">{rightReview.designation}</p>
        <p className="text-tertiary/70 text-sm whitespace-pre-line">
          {rightReview.thought}
        </p>
      </div>
    </div>
  );
};

export default ReviewSlider;
