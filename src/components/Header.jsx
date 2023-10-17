import React from "react";
import { DefaultNav, DropdownNav } from "./Navbars";
import Hamburgur from "./Hamburgur";
import clockTick from "../assets/Vectors/titleVector.svg";

const Header = () => {
  return (
    <header className="relative bg-white z-50 px-4 md:px-[5%]  md:py-4  border-b border-primary">
      {/* For sm-devices */}
      <DropdownNav />

      <div className="relative flex justify-between items-center">
        <Hamburgur />

        <div className="relative">
          <h1 className="text-2xl text-primary ">
            <span className="font-Marienda font-bold">Food</span>
            <span className="font-Poppins font-semibold">Time</span>
          </h1>
          <div className="absolute -right-3 top-0">
            <img src={clockTick} alt="title-svg" />
          </div>
        </div>

        {/* Nav for lg-devices */}
        <DefaultNav />
      </div>
    </header>
  );
};

export default Header;
