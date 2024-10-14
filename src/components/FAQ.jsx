import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer to help build an AI company?",
    answer:
      "We provide end-to-end services, including AI strategy consultation, product development, business model creation, and market entry support. We guide you from ideation to product launch.",
  },
  {
    question: "Do I need technical knowledge to start an AI company?",
    answer:
      "No, you don’t need technical expertise. Our team of AI experts will handle the technical aspects while you focus on the business vision and strategy.",
  },
  {
    question: "How long does it take to launch an AI product?",
    answer:
      "The timeline varies, but typically it takes 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch process.",
  },
  {
    question: "How do I know if my AI idea is feasible?",
    answer:
      "We offer an initial consultation to evaluate your idea's feasibility, its market potential, and provide feedback on how to refine it for success.",
  },
  {
    question: "What types of AI solutions can you help develop?",
    answer:
      "We help build various AI solutions, including chatbots, recommendation systems, computer vision applications, and more. We tailor each project to your unique needs.",
  },
  {
    question: "What kind of data is required to build an AI solution?",
    answer:
      "AI solutions require high-quality data, depending on the project. We assist in collecting, preprocessing, and using relevant data for training the model.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply schedule a free consultation with us to discuss your idea. We will outline how we can help turn your vision into a successful AI company.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="mx-auto text-secondary flex flex-col items-center justify-center"
    >
      <h3 className="text-3xl text-center">FREQUENTLY ASKED QUESTIONS</h3>
      <div className="mt-10 flex flex-col gap-4 w-full">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-4 bg-[#131B23] rounded-md px-4 py-6 w-full"
    >
      <div className="flex justify-between gap-5 w-full font-medium text-start">
        {faq.question}{" "}
        {isOpen ? (
          <FaMinus className="text-xl" />
        ) : (
          <FaPlus className="text-xl" />
        )}
      </div>
      {isOpen && <p className="p-[.5rem] text-sm text-start">{faq.answer}</p>}
    </button>
  );
};
export default FAQ;
