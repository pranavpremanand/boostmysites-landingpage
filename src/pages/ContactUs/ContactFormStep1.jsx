import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { SpinnerContext } from "./SpinnerContext";
import { CgSpinner } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";
import { PiSpinnerGapLight } from "react-icons/pi";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/lib/style.css";
import {
  parsePhoneNumberFromString,
  getCountryCallingCode,
} from "libphonenumber-js";
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";

const ContactFormStep1 = () => {
  // const { setIsLoading } = useContext(SpinnerContext);
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState(
    sessionStorage.getItem("isoCode") || "IN"
  );
  const [stateList, setStateList] = useState(State.getStatesOfCountry("IN"));

  useEffect(()=>{
    setStateList(State.getStatesOfCountry(country));
  },[])

  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const form = useRef();
  const defaultValues =
    JSON.parse(sessionStorage.getItem("contactForm")) || null;
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
      fullName: defaultValues?.fullName || "",
      email: defaultValues?.email || "",
      phone: defaultValues?.phone || "",
      // subject: "",
      // message: "",
      country: defaultValues?.country || "India",
      state: defaultValues?.state || "Kerala",
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

  const setCities = (c) => {
    const states = State.getStatesOfCountry(c);
    const country = Country.getCountryByCode(c);
    setCountry(c);
    sessionStorage.setItem("isoCode", country.isoCode);
    setValue("country", country.name);
    const initialState = State.getStatesOfCountry(c)[0];
    setValue("state", initialState.name);
    setStateList(states);
    console.log(states);
  };

  const nextStep = (values) => {
    console.log(values);
    const data = {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      country: values.country,
      state: values.state,
    };
    sessionStorage.setItem("contactForm", JSON.stringify(data));
    navigate("/contact/step2");
  };
  return (
    <div id="contact" className="max-w-md mx-auto gap-5 text-secondary pt-32 px-5">
      <form
        ref={form}
        onSubmit={handleSubmit(nextStep)}
        data-aos="fade-right"
        data-aos-offset="-150"
      >
        <h2 className="font-medium text-3xl mb-4 sm:mb-6 text-center sm:text-start">
          Tell us a little about yourself{" "}
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="grid grid-cols-1 relative">
            <label htmlFor="" className="text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
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
              country="in"
              inputProps={{
                name: "phone",
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
          <div className="border border-[#2d2e32] rounded-[0.2rem] py-3 px-2 text-black bg-white/70">
            <select
              value={country}
              onChange={(e) => {
                setCities(e.target.value);
              }}
              name="country"
              id=""
              className="bg-transparent outline-none flex justify-between w-full"
            >
              {Country.getAllCountries().map((country) => (
                <option
                  className="hover:bg-primary outline-none"
                  key={country.code}
                  value={country.isoCode}
                >
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="border border-[#2d2e32] rounded-[0.2rem] py-3 px-2 text-black bg-white/70">
            <select name="state" id="" className="bg-transparent outline-none flex justify-between w-full">
              {stateList.length > 0 &&
                stateList.map((state) => (
                  <option
                    className="hover:bg-primary outline-none"
                    key={state.name}
                    value={state.name}
                  >
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
          {/* <div className="grid grid-cols-1 relative">
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
          </div> */}
          {/* <div className="grid grid-cols-1 relative">
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
          </div> */}
          <button type="submit" className="bg-primary primary-btn">
            Next Step
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

export default ContactFormStep1;
