import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DropdownNav } from "./Navbars";
import Hamburgur from "./Hamburgur";

const Header = () => {
  return (
    <header className="relative bg-white z-50 px-4 md:px-[5%]  md:py-4  border-b border-primary">

      {/* For sm-devices */}
      <DropdownNav />
      
      <div className="relative flex justify-between items-center">
        <Hamburgur />
        {/* <div
          className="md:hidden menu-icon cursor-pointer w-12 h-12 px-3 transition-colors hover:bg-slate-200 flex flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bars bg-primary"></div>
          <div className="bars bg-primary"></div>
          <div className="bars bg-primary"></div>
        </div> */}

        <div className="relative">
          <h1 className="text-2xl text-primary ">
            <span className="font-Marienda font-bold">Food</span>
            <span className="font-Poppins font-semibold">Time</span>
          </h1>
          {/* <div className="absolute -right-3 top-0">
            <img src={} alt="title-svg" />
          </div> */}
        </div>

        <div className="flex justify-between gap-[6.12rem]">
          <nav className="hidden md:flex justify-between items-center font-Poppins md:gap-12 lg:gap-16">
            <span>
              <a
                href="#"
                className="text-slate-900 transition-colors font-[500] hover:text-primary"
              >
                Home
              </a>
            </span>
            <span>
              <a
                href="#"
                className="text-slate-900 transition-colors font-[500] hover:text-primary"
              >
                Blog
              </a>
            </span>
            <span>
              <a
                href="#"
                className="text-slate-900 transition-colors font-[500] hover:text-primary"
              >
                About Us
              </a>
            </span>
            <span>
              <a
                href="#"
                className="text-slate-900 transition-colors font-[500] hover:text-primary"
              >
                Contact
              </a>
            </span>
          </nav>

          <div className="flex justify-between gap-6">
            <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
              <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
