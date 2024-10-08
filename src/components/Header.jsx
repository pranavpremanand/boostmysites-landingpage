import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";

const options = [
  {
    id: 1,
    title: "Features",
    path: "/",
  },
  {
    id: 2,
    title: "Client Reviews",
    path: "/",
  },
  {
    id: 3,
    title: "Success Stories",
    path: "/",
  },
  {
    id: 4,
    title: "Courses",
    path: "/",
  },
  {
    id: 5,
    title: "FAQ",
    path: "/",
  },
  {
    id: 6,
    title: "Contact",
    path: "/",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 100) {
  //       // Change 100 to whatever scroll position you prefer
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up event listener on unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div
      className={`sticky z-50 py-2 flex justify-center w-full top-0 left-0 ${
        isScrolled ? "backdrop-blur-md bg-transparent" : "bg-quaternary"
      }`}
    >
      <div className="w-full">
        <div className="wrapper flex justify-between items-center w-full">
          <Link to="/">
            <img src={logo} alt="" className="h-[4rem] md:h-[5rem] object-contain" />
          </Link>
          <div className="text-sm hidden lg:flex items-center gap-7 w-full justify-end">
            {options.map((option) => (
              <Link to={option.path} key={option.id} className="text-secondary">
                {option.title}
              </Link>
            ))}
            <Link to="/" className="text-primary">
              Login
            </Link>
            <Link to="/" className="primary-btn">
              Join Now
            </Link>
          </div>
          
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className="py-4 px-10 z-10 bg-tertiary text-secondary"
          >
            <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary text-[2.2rem]"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {options.map(({ title, link,id }) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={id}
                  className="text-3xl font-medium transition-colors duration-300"
                  to={link}
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
          <div className="block lg:hidden justify-self-end" onClick={toggleDrawer}>
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
  );
};

export default Header;
