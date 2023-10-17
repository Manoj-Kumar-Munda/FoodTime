import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useMenu from "../contexts/menuProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../utils/constants";

export const DropdownNav = () => {
  const { isMenuOpen } = useMenu();
  return (
    <div className="absolute md:hidden left-0 right-0 bottom-0 top-full w-full h-full px-4 py-2 ">
      <ul
        className={`bg-white/40 backdrop-filter backdrop-blur-md  flex flex-col py-5 pl-4 border border-primary/75 rounded-xl overflow-hidden transition ease-in duration-200 transform origin-top-left opacity-100 ${
          !isMenuOpen && "scale-y-0 opacity-0"
        }`}
      >
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a
                href="#"
                className="block py-2 text-primary font-semibold font-Poppins text-lg text-start transition hover:text-green-600"
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const DefaultNav = () => {
  return (
    <div className="flex justify-between gap-[6.12rem]">
      <nav className="hidden md:flex justify-between items-center font-Poppins md:gap-12 lg:gap-16">
        {links.map((link, index) => {
          return (
            <span key={index}>
              <a
                href="#"
                className="text-slate-900 transition-colors font-[500] hover:text-primary"
              >
                {link}
              </a>
            </span>
          );
        })}
      </nav>

      <div className="flex justify-between gap-6">
        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
          <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
        </div>
      </div>
    </div>
  );
};
