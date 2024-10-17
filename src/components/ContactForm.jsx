import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { SpinnerContext } from "./SpinnerContext";
import { PiSpinnerGapLight } from "react-icons/pi";
import PhoneInput from 'react-country-phone-input'
import 'react-country-phone-input/lib/style.css'
import { parsePhoneNumberFromString, getCountryCallingCode } from "libphonenumber-js";

const ContactForm = () => {
  // const { setIsLoading } = useContext(SpinnerContext);
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState("IN"); // Track the selected country
  const [isSending, setIsSending] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    try {
      var emailBody = "Name: " + values.fullName + "\n\n";
      emailBody += "Email: " + values.email + "\n\n";
      emailBody += "Phone Number: " + values.phone + "\n\n";
      emailBody += "Message:\n" + values.message;
      // Construct the request payload
      var payload = {
        // to: "ceo@boostmysites.com",
        to: "mpranavprem@gmail.com",
        subject: values.subject,
        body: emailBody,
      };

      setIsSending(true);

      // setIsLoading(true);
      await fetch("https://smtp-api-tawny.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Email sent successfully");
          reset();
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error(error.message);
        });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      // setIsLoading(false);
      setIsSending(false);
    }
  };
  return (
    <div
      id="contact"
      className="max-w-md mx-auto gap-5 text-secondary section-pt"
    >
      <form
        ref={form}
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-right"
        data-aos-offset="-150"
      >
        <h2 className="font-medium text-3xl mb-4 sm:mb-6 text-center sm:text-start">
          Get In Touch With Us
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Full Name
            </label>
            <input
              type="text"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
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
              placeholder="Enter your full name"
            />
            <small className="error">{errors.fullName?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <input
              type="email"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
              placeholder="Enter your email"
            />
            <small className="error">{errors.email?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Phone Number
            </label>
            {/* <input
              type="phone"
              className="border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[6-9]\d{9}$/i,
                  message: "Entered phone number is invalid",
                },
              })}
            /> */}
            <PhoneInput
              placeholder="Enter your phone number"
              value={getValues("phone")}
              onChange={(val) => {
                setPhone(val);
                setValue("phone", val || ""); // Update phone field with full phone number
                trigger("phone"); // Trigger validation
              }}
              country='in'
              inputProps={{
                name: 'phone',
                required: true,
              }}
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
            />

            <input
              type="hidden"
              {...register("phone", {
                required: "Phone is required",
                // pattern: {
                //   value: /^[6-9]\d{9}$/i,
                //   message: "Entered phone number is invalid",
                // },
              })}
            />

            <small className="error">{errors.phone?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Subject
            </label>
            <input
              type="text"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
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
              placeholder="Enter your subject"
            />
            <small className="error">{errors.subject?.message}</small>
          </div>
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Message
            </label>
            <textarea
              type="text"
              rows="3"
              className="placeholder:text-[1rem] placeholder:text-black/50 border border-[#2d2e32] outline-none rounded-[0.2rem] py-3 px-2 text-black bg-white/70"
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
              placeholder="Enter your message"
            />
            <small className="error">{errors.message?.message}</small>
          </div>
          <button
            disabled={isSending}
            type="submit"
            className={`${
              isSending
                ? "bg-primary/80 text-black py-2 px-4 rounded-md transition-all duration-300"
                : "primary-btn"
            } flex justify-center mt-4`}
          >
            {isSending ? (
              <div className="shadow-none">
                <PiSpinnerGapLight className="rotate-animation text-2xl" />
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
      {/* <div className="md:block hidden w-full h-full">
        <img
          src={img}
          className="h-full w-full object-cover rounded-lg"
          alt=""
          loading="lazy"
        />
      </div> */}
    </div>
  );
};

export default ContactForm;
