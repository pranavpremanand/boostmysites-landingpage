import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiSpinnerGapLight } from "react-icons/pi";
import "react-country-phone-input/lib/style.css";
import { useNavigate } from "react-router-dom";
import { BiCaretLeft } from "react-icons/bi";
import { SpinnerContext } from "../../components/SpinnerContext";

const ContactFormStep2 = ({ emailIdToSendMail, pathToRedirect }) => {
  console.log(pathToRedirect);
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("contactForm")) {
      navigate(`${pathToRedirect}/contact/step1`);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    resetField,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      businessType: "E-Commerce", // Default selected business type
      expectedEarnings: "25 lakhs per annum", // Default selected earnings
      primaryGoal: "Financial independence", // Default selected goal
      investmentCapital: "Less than ₹4,00,000", // Default selected capital
      timeline: "1-3 months", // Default selected timeline
      primaryGoalText: "", // Track the custom input separately
    },
  });
  const watchPrimaryGoal = watch("primaryGoal");
  const watchPrimaryGoalText = watch("primaryGoalText");

  const handleInputFocus = () => {
    setValue("primaryGoal", "");
    resetField("primaryGoal"); // Clear radio buttons when text input is focused
  };

  // Handle text input change
  const handleTextInputChange = (e) => {
    const value = e.target.value;
    setValue("primaryGoal", value); // Set text input value as the primary goal
  };

  // Handle radio button change and clear text input when a radio button is selected
  const handleRadioChange = (value) => {
    setError("primaryGoal", null);
    setValue("primaryGoal", value); // Set radio button value as the primary goal
    resetField("primaryGoalText"); // Clear text input when a radio button is selected
  };

  // Handle form submission
  const onSubmit = async (values) => {
    if (!values.primaryGoal && !values.primaryGoalText) {
      // Trigger an error if both the radio and input are empty
      setError("primaryGoal", {
        type: "manual",
        message: "Please select or specify your primary goal.",
      });
      return;
    }
    const contactForm =
      JSON.parse(sessionStorage.getItem("contactForm")) || null;

    if (!contactForm) {
      toast.error("Please fill the contact form first");
      return;
    } else {
      values.fullName = contactForm.fullName;
      values.email = contactForm.email;
      values.phone = contactForm.phone;
      values.country = contactForm.country;
      values.state = contactForm.state;
      var emailBody = "Name: " + values.fullName + "\n\n";
      emailBody += "Email: " + values.email + "\n\n";
      emailBody += "Phone Number: " + values.phone + "\n\n";
      emailBody += "Location: " + values.state + ", " + values.country + "\n\n";
      emailBody += "Business Type: " + values.businessType + "\n\n";
      emailBody += "Expected Earnings: " + values.expectedEarnings + "\n\n";
      emailBody += "Primary Goal: " + values.primaryGoal + "\n\n";
      emailBody += "Investment Capital: " + values.investmentCapital + "\n\n";
      emailBody += "Timeline: " + values.timeline + "\n\n";

      // Construct the request payload
      var payload = {
        to: emailIdToSendMail,
        subject: "Lead Form Submission",
        body: emailBody,
      };
      try {
        setSpinner(true);

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
            sessionStorage.removeItem("isoCode");
            sessionStorage.removeItem("contactForm");
            navigate(`${pathToRedirect}/contact/thank-you`);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      } catch (err) {
        toast.error("Something went wrong");
      } finally {
        setSpinner(false);
      }
    }
  };
  return (
    <div className="landing-page max-w-md mx-auto gap-5 text-secondary section-pt px-5">
      <button
        data-aos="fade-right"
        onClick={() => navigate(pathToRedirect + "/contact/step1")}
        className="flex items-center text-white mb-5"
      >
        <BiCaretLeft className="text-4xl" />
        <span className="text-lg font-medium">Previous Step</span>
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-aos="fade-right"
        data-aos-offset="-150"
      >
        {/* <h2 className="font-medium text-3xl mb-4 sm:mb-6 text-center sm:text-start">
          Step 2
        </h2> */}
        <div className="grid grid-cols-1 gap-4 mt-6">
          {/* Business Type Field */}
          <div className="grid grid-cols-1 relative">
            <label className="text-sm">
              What type of business are you planning to start?
            </label>
            <div className="bg-white/70 p-3 rounded-md text-black mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="businessType"
                  value="E-Commerce"
                  {...register("businessType", {
                    required: "Please select a business type",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>E-Commerce</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  name="businessType"
                  value="AI Company"
                  {...register("businessType", {
                    required: "Please select a business type",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>AI Company</label>
              </div>
              {errors.businessType && (
                <small className="text-[#FFAB23]">
                  {errors.businessType.message}
                </small>
              )}
            </div>
          </div>

          {/* Expected Earnings Field */}
          <div className="grid grid-cols-1 relative">
            <label className="text-sm">
              What are your expected annual earnings?
            </label>
            <div className="bg-white/70 p-3 rounded-md text-black mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="expectedEarnings"
                  value="25 lakhs per annum"
                  {...register("expectedEarnings", {
                    required: "Please select your expected earnings",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>25 lakhs per annum</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  name="expectedEarnings"
                  value="50 lakhs per annum"
                  {...register("expectedEarnings", {
                    required: "Please select your expected earnings",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>50 lakhs per annum</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  name="expectedEarnings"
                  value="1 crore per annum"
                  {...register("expectedEarnings", {
                    required: "Please select your expected earnings",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>1 crore per annum</label>
              </div>
              {errors.expectedEarnings && (
                <small className="text-[#FFAB23]">
                  {errors.expectedEarnings.message}
                </small>
              )}
            </div>
          </div>

          {/* Primary Goal Field */}
          <div className="grid grid-cols-1 relative">
            <label className="text-sm">
              What are your primary goals for starting this business?
            </label>
            <div className="bg-white/70 p-3 rounded-md text-black mt-2">
              {/* Radio Options */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Financial independence"
                  {...register("primaryGoal", {
                    // required: "Please select or specify your goal",
                  })}
                  onChange={() => handleRadioChange("Financial independence")}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Financial independence</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  value="Passion for the industry"
                  {...register("primaryGoal", {
                    // required: "Please select or specify your goal",
                  })}
                  onChange={() => handleRadioChange("Passion for the industry")}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Passion for the industry</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  value="Solving a problem"
                  {...register("primaryGoal", {
                    // required: "Please select or specify your goal",
                  })}
                  onChange={() => handleRadioChange("Solving a problem")}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Solving a problem</label>
              </div>

              {/* Custom Input Field */}
              <div className="flex flex-col ml-0 mt-5">
                <label className="text-sm">
                  None of the above? Please specify
                </label>
                <input
                  type="text"
                  name="primaryGoalText"
                  onFocus={handleInputFocus}
                  onChange={handleTextInputChange}
                  className="mt-2 placeholder:text-sm text-sm placeholder:text-black/50 outline-none rounded-[0.2rem] py-2 px-2 text-black bg-white/40"
                />
              </div>

              {errors.primaryGoal && (
                <small className="text-[#862b17]">
                  {errors.primaryGoal.message}
                </small>
              )}
            </div>
          </div>

          {/* Timeline Field */}
          <div className="relative">
            <label htmlFor="" className="text-sm text-white">
              What is your timeline for launching your business?
            </label>
            <select
              {...register("timeline", {
                required: "Please select your timeline",
              })}
              className="text-black rounded-md bg-white/70 outline-none flex justify-between w-full py-3 px-2"
            >
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
            {errors.timeline && (
              <small className="text-[#FFAB23]">
                {errors.timeline.message}
              </small>
            )}
          </div>

          {/* Investment Capital Field */}
          <div className="grid grid-cols-1 relative">
            <label className="text-sm">
              How much capital are you ready to invest in your business
              initially?
            </label>
            <div className="bg-white/70 p-3 rounded-md text-black mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="investmentCapital"
                  value="Less than ₹4,00,000"
                  {...register("investmentCapital", {
                    required: "Please select an investment amount",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>Less than ₹4,00,000</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  name="investmentCapital"
                  value="₹4,00,000-₹5,00,000"
                  {...register("investmentCapital", {
                    required: "Please select an investment amount",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>₹4,00,000-₹5,00,000</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  name="investmentCapital"
                  value="₹5,00,000-₹10,00,000"
                  {...register("investmentCapital", {
                    required: "Please select an investment amount",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>₹5,00,000-₹10,00,000</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="radio"
                  name="investmentCapital"
                  value="₹10,00,000+"
                  {...register("investmentCapital", {
                    required: "Please select an investment amount",
                  })}
                  className="w-[1.2rem] h-[1.2rem] accent-primary cursor-pointer"
                />
                <label>₹10,00,000+</label>
              </div>
              {errors.investmentCapital && (
                <small className="text-[#FFAB23]">
                  {errors.investmentCapital.message}
                </small>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            disabled={spinner}
            type="submit"
            className={`${
              spinner
                ? "bg-primary/80 text-black py-2 px-4 rounded-md transition-all duration-300"
                : "primary-btn"
            } flex justify-center mt-4`}
          >
            {spinner ? (
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

export default ContactFormStep2;
