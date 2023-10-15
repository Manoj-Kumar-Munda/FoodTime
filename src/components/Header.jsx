import React from "react";

const Header = ({ isMenuOpen,setIsMenuOpen }) => {
  return (
    <header className="relative bg-white z-50 px-4 md:px-[5%]  py-4 border-b border-primary">
      <div className="absolute sm:hidden left-0 right-0 bottom-0 top-full w-full">
        <ul className={isMenuOpen ? "menu active" : "menu inactive"}>
          <li>
            <a className="block py-1 text-primary font-semibold font-Poppins text-lg text-center">
              Home
            </a>
          </li>
          <li>
            <a className="block py-1 text-primary font-semibold font-Poppins text-lg text-center">
              Blog
            </a>
          </li>
          <li>
            <a className="block py-1 text-primary font-semibold font-Poppins text-lg text-center">
              About Us
            </a>
          </li>
          <li>
            <a className="block py-1 text-primary font-semibold font-Poppins text-lg text-center">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="relative flex justify-between items-center">
        <div
          className="md:hidden menu-icon cursor-pointer w-12 h-12 px-3 transition-colors hover:bg-slate-200 flex flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bars bg-primary"></div>
          <div className="bars bg-primary"></div>
          <div className="bars bg-primary"></div>
        </div>

        <div className="relative">
          <h1 className="text-2xl text-primary ">
            <span className="font-Marienda font-bold">Food</span>
            <span className="font-Poppins font-semibold">Time</span>
          </h1>
          <div className="absolute -right-3 top-0">
            <img src={TitleVector} alt="title-svg" />
          </div>
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
