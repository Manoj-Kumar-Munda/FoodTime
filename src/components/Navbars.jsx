import useMenu from "../contexts/menuProvider";

export const DropdownNav = () => {

    const {isMenuOpen} = useMenu()
  return (
    <div className="absolute sm:hidden left-0 right-0 bottom-0 top-full w-full">
      <ul className={isMenuOpen ? "flex flex-col" : "hidden"}>
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
  );
};

export const DefaultNav = () => {};
