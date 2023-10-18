import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FaqItem = ({ item, isActive, setActiveIndex, closeItem}) => {
  return (
    <div
      className="basis-full border py-2 px-4 cursor-pointer"
      onClick={() => isActive ? closeItem() : setActiveIndex()}
      
    >
      <div className="flex justify-between items-center gap-2">
        <p className="font-semibold  text-lg font-Poppins">{item?.question}</p>

        <FontAwesomeIcon icon={faPlus} style={{ color: "#0f711f" }} className={`transition-all duration-200 ${isActive?"rotate-45":"rotate-0"}`} />
      </div>
      <div
        className={`overflow-hidden  transition-all duration-300 delay-75 ${
          isActive ? "max-h-32" : "max-h-0"
        }`}
      >
        <p>{item?.ans}</p>
      </div>
    </div>
  );
};

export default FaqItem;
