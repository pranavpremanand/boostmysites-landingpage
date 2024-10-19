import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex backdrop-blur-sm flex-col gap-4 md:items-center justify-center py-[4rem] text-secondary mt-14 border-t border-gray-800/70">
      <div className="wrapper w-full flex md:flex-row flex-col items-start justify-between gap-7">
        <img src={logo} alt="logo" className="h-[5rem] object-contain" />
        <div className="flex flex-col gap-3">
          <h5 className="font-light tracking-wide uppercase">Contact</h5>
          <ul className="flex flex-col gap-1 text-sm text-white/70 font-light">
            <li>
              <Link
                href="tel:+24563432445"
                className="flex items-center gap-1 link"
              >
                <BiPhone className="text-xl" />{" "}
                <span className="text-">+2 456 (343) 24 45</span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:ceo@boostmysites.com"
                className="flex items-center gap-1 link"
              >
                <CgMail className="text-xl" />{" "}
                <span className="text-">ceo@boostmysites.com</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-light tracking-wide uppercase">useful links</h5>
          <ul className="flex flex-col gap-1 text-sm text-white/70 font-light">
            {[
              {
                id: 1,
                title: "AI & IT Development",
                path: "https://dev.boostmysites.com",
              },
              {
                id: 2,
                title: "Start Your AI Company",
                path: "/ai-expert",
              },
              {
                id: 3,
                title: "Start Your Ecommerce Company",
                path: "https://boostmysites.store",
              },
              {
                id: 4,
                title: "Contact Us",
                path: "/ai-expert/contact",
              },
            ].map((item) => (
              <li key={item.id}>
                <Link
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="link"
                  to={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {/* <li>
              <Link className="link" to="#">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="#">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="link" to="#">
                Services
              </Link>
            </li>
            <li>
              <Link className="link" to="#">
                Contact Us
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="mt-2 flex items-center gap-5">
            <Link
              to="https://www.linkedin.com/company/boostmysitescom"
              target="_blank"
              rel="noreferrer"
              className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 rounded-full border border-white/40 flex justify-center items-center"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.instagram.com/boostmysites"
              target="_blank"
              rel="noreferrer"
              className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 rounded-full border border-white/40 flex justify-center items-center"
            >
              <FaInstagram />
            </Link>
            <Link className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 p-3 rounded-full border border-white/40 flex justify-center items-center">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
