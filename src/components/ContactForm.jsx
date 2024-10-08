import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { SpinnerContext } from "./SpinnerContext";
import img from "../assets/images/banner-4.png";
import axios from "axios";

const ContactForm = () => {
  // const { setIsLoading } = useContext(SpinnerContext);
  const [isSending,setIsSending] = useState(false)
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    try {
      var emailBody = "Name: " + name + "\n";
      emailBody += "Email: " + values.email + "\n\n";
      emailBody += "Message:\n" + values.message;
      // Construct the request payload
      var payload = {
        to: "ceo@boostmysites.com",
        subject: values.subject,
        body: emailBody,
      };

      setIsSending(true)

      // setIsLoading(true);
      await fetch("https://smtp-api-tawny.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
            toast.success('Email sent successfully');
            reset();
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error(error.message)
        });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      // setIsLoading(false);
      setIsSending(false)
    }
  };
  return (
    <div id='contact' className="grid md:grid-cols-2 gap-10 text-secondary">
      <form
        ref={form}
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-right"
        data-aos-offset="-150"
      >
        <h2 className="font-medium text-3xl mb-4 sm:mb-6 text-center sm:text-start">
          Get In Touch With Us
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="">
              Full Name
            </label>
            <input
              type="text"
              className="border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black"
              {...register("fullName", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error">{errors.fullName?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="">
              Email
            </label>
            <input
              type="email"
              className="border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error">{errors.email?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="">
              Subject
            </label>
            <input
              type="text"
              className="border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error">{errors.subject?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="">
              Message
            </label>
            <textarea
              type="text"
              rows="3"
              className="border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <small className="error">{errors.message?.message}</small>
          </div>
          <button disabled={isSending} type="submit" className="primary-btn mt-4">
            {isSending ? "Sending Message" : "Send Message"}
          </button>
        </div>
      </form>
      <div className="md:block hidden w-full h-full">
        <img
          src={img}
          className="h-full w-full object-cover rounded-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactForm;
