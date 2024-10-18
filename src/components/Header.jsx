import logo from "../assets/logo/logo.png";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import { Link as RLink, useLocation } from "react-router-dom";

const options = [
  {
    id: 1,
    title: "Demos",
    path: "#",
  },
  {
    id: 2,
    title: "Pages",
    path: "#",
  },
  {
    id: 3,
    title: "Portfolio",
    path: "#",
  },
  {
    id: 4,
    title: "Blogs",
    path: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Change 100 to whatever scroll position you prefer
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed border-b border-white/5 z-50 py-3 flex justify-center w-full top-0 left-0 ${
          isScrolled ? "backdrop-blur-md bg-tertiary/30" : "bg-tertiary"
        }`}
      >
        <div className="w-full">
          <div className="wrapper flex justify-between items-center w-full">
            <RLink to="/home" className="cursor-pointer">
              <img
                src={logo}
                alt=""
                className="h-[4rem] md:h-[5rem] object-contain -mb-3"
              />
            </RLink>
            <div className="text-sm uppercase hidden lg:flex items-center gap-7">
              {options.map((option) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to={option.path}
                  key={option.id}
                  className="text-secondary link cursor-pointer"
                  activeClass="link-active"
                >
                  {option.title}
                </Link>
              ))}
            </div>
            <RLink to="/contact" className="hidden lg:flex primary-btn1">
              Let's Connect
            </RLink>

            <div
              className="block lg:hidden justify-self-end"
              onClick={toggleDrawer}
            >
              <Hamburger
                color="#FFAB23"
                size="23"
                toggled={isOpen}
                rounded
                toggle={setIsOpen}
              />
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="py-4 px-10 z-10 bg-black text-secondary"
      >
        <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {options.map(({ title, path, id }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-2xl font-medium transition-colors duration-300 link"
              to={path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              {title}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Header;
