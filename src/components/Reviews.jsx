// import { useEffect, useState } from "react";
// import profileImg from "../assets/images/profile-image.png";

// const reviews = [
//   {
//     id: 1,
//     name: "SARAH",
//     designation: "Co-Founder",
//     thought:
//       "Sarah’s Thoughts: \n Boostmysites helped me accelerate my launch. From refining my business model to ensuring a smooth launch, their guidance allowed VisionaryAI to achieve results fast.",
//   },
//   {
//     id: 2,
//     name: "RAJESH",
//     designation: "Co-Founder",
//     thought:
//       "Rajesh’s Thoughts: \n Boostmysites made the complex process of launching an AI company straightforward. Their hands-on support was critical in getting my company off the ground quickly.",
//   },
//   {
//     id: 3,
//     name: "JOHN",
//     designation: "Co-Founder",
//     thought:
//       'John’s Thoughts: \n The Welcome experience has been 10 out of 10. When our sponsors like Facebook are considering sponsoring our events, Welcome is our "secret weapon"',
//   },
//   {
//     id: 4,
//     name: "MARIA",
//     designation: "Co-Founder",
//     thought:
//       "Maria’s Thoughts: \n Boostmysites provided everything I needed to succeed, from technical development to marketing strategies. They were the catalyst for turning my idea into a thriving business.",
//   },
// ];

// const ReviewSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Change the current index every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//     }, 3000);

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Get the indices of the three reviews (left, center, right)
//   const getThreeReviews = () => {
//     const left = (currentIndex - 1 + reviews.length) % reviews.length;
//     const center = currentIndex;
//     const right = (currentIndex + 1) % reviews.length;

//     return [reviews[left], reviews[center], reviews[right]];
//   };

//   const [leftReview, centerReview, rightReview] = getThreeReviews();

//   return (
//     <div data-aos="fade-up" className="h-[25rem] md:h-[18rem] flex relative mt-20 text-tertiary md:w-[80%] mx-auto">
//       <div className="h-full bg-secondary/90 rounded-lg p-3 md:p-8 flex flex-col gap-2 items-center justify-center">
//         <img
//           src={profileImg}
//           className="h-[5rem] w-[5rem] object-cover rounded-full"
//           alt=""
//         />
//         <h4 className="text-2xl font-medium text-tertiary">{leftReview.name}</h4>
//         <p className="font-light">{leftReview.designation}</p>
//         <p className="text-tertiary/70 text-sm whitespace-pre-line">
//           {leftReview.thought}
//         </p>
//       </div>
//       <div className="absolute w-10/12 sm:w-3/5 min-h-[110%] shadow-large top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-secondary rounded-lg p-3 md:p-8 flex flex-col gap-2 items-center justify-center">
//         <img
//           src={profileImg}
//           className="h-[5rem] w-[5rem] object-cover rounded-full"
//           alt=""
//         />
//         <h4 className="text-2xl font-medium text-tertiary">
//           {centerReview.name}
//         </h4>
//         <p>{centerReview.designation}</p>
//         <p className="text-tertiary/70 text-sm whitespace-pre-line">
//           {centerReview.thought}
//         </p>
//       </div>
//       <div className="h-full bg-secondary/90 rounded-lg p-3 md:p-8 flex flex-col gap-2 items-center justify-center">
//         <img
//           src={profileImg}
//           className="h-[5rem] w-[5rem] object-cover rounded-full"
//           alt=""
//         />
//         <h4 className="text-2xl font-medium text-tertiary">
//           {rightReview.name}
//         </h4>
//         <p className="font-light">{rightReview.designation}</p>
//         <p className="text-tertiary/70 text-sm whitespace-pre-line">
//           {rightReview.thought}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ReviewSlider;

import avt1 from "../assets/images/Ellipse 39.png";
import avt2 from "../assets/images/Ellipse 40.png";
import avt3 from "../assets/images/Ellipse 41.png";
import avt4 from "../assets/images/Ellipse 42.png";
import avt5 from "../assets/images/Ellipse 43.png";
import avt6 from "../assets/images/Ellipse 44.png";
import ReactStars from "react-rating-stars-component";

const reviews = [
  {
    id: 1,
    name: "Pratik Srivashtav",
    img: avt1,
    desc: "“I recently worked with Boostmysites to start my own AI company, and I couldn’t be happier with the experience. From the very beginning, they provided expert guidance on everything from developing a solid business plan to understanding the technical aspects of AI. Their team was incredibly knowledgeable, patient, and genuinely invested in my success. They offered valuable resources, support, and even connected me with potential clients worldwide. Thanks to Boostmysites, I felt confident and well-prepared to launch my AI business. Highly recommended for anyone looking to enter the AI industry with a strong foundation!”",
  },
  {
    id: 2,
    name: "Ahan R",
    img: avt3,
    desc: "“I started my AI company with zero coding experience, and Boostmysites made it possible. They provided all the tools, resources, and step-by-step guidance I needed to bring my vision to life without any technical background. Their team was incredibly supportive, helping me navigate the process and connect with the right people to build a successful AI business. Thanks to Boostmysites, I now have a thriving company, even without coding skills. Highly recommend them for anyone looking to break into the AI field!”",
  },
  {
    id: 3,
    name: "Manish Yadav",
    img: avt4,
    desc: "“Working with Boostmysites to start my AI company was incredibly affordable. I was amazed at how little investment was needed to get my business off the ground. They provided everything I needed—guidance, resources, and connections—all at a fraction of what I expected. Despite the low cost, the quality of support was top-notch, and I felt fully equipped to launch and grow my AI company. If you’re looking to start in AI with minimal investment, Boostmysites is the way to go!”",
  },
  {
    id: 4,
    name: "Janvi Singh",
    img: avt6,
    desc: "“As a woman entrepreneur starting in AI, Boostmysites was exactly what I needed. They provided all the support and guidance to help me understand the industry and launch my business with confidence. The team was incredibly encouraging, making everything easy to navigate, even without a tech background. With minimal investment, I was able to start my AI company thanks to Boostmysites. I’d recommend them to any woman looking to break into tech!”",
  },
  {
    id: 5,
    name: "Arpit and Navya",
    img: avt5,
    desc: "“My spouse and I decided to start our AI company together, and Boostmysites made the whole process so much easier. They provided clear guidance, valuable resources, and great support at every step. We had minimal tech experience, but their team helped us feel confident and prepared to launch. Starting a business as a married couple can be challenging, but Boostmysites really helped us turn our idea into a reality. Highly recommend for any couple looking to break into AI!”",
  },
  {
    id: 6,
    name: "Hassam Khan",
    img: avt2,
    desc: "Boostmysites made starting my AI company a seamless experience. Their expert guidance, resources, and connections helped me get up and running quickly. They truly care about their clients’ success, and I couldn’t be happier with the support I received. Highly recommend!”",
  },
];

const Reviews = () => {
  return (
    <div
      data-aos="fade-up"
      className="mt-14 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
    >
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full min-h-[22rem] h-full bg-secondary/90 rounded-lg p-3 md:p-6 flex flex-col gap-2 items-center">
      <img
        src={review.img}
        className="h-[4rem] w-[4rem] object-cover rounded-full"
        alt={review.name}
      />
      <h4 className="text-lg leading-none font-bold text-tertiary">{review.name}</h4>
      <ReactStars
        edit={false}
        value={5}
        count={5}
        size={28}
        activeColor="#FFAB23"
      />
      <p className="text-tertiary/70 text-sm whitespace-pre-line leading-normal">
        {review.desc}
      </p>
    </div>
  );
};
