import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Faq = () => {
  return (
    <div className="w-full px-4 my-8">
      <section className="flex flex-col items-center gap-2 md:gap-4 py-4">
        <span className="font-semibold font-Poppins text-heading-2 text-2xl md:text-4xl">
          Frequently asked questions
        </span>
        <div className="flex justify-between gap-3 flex-wrap ">
          <button className="font-Poppins text-white bg-primary px-8  rounded-[6rem] text-sm md:text-base md:px-primary-btn-large-x py-primary-btn-large-y md:rounded-parimary-lg-btn">
            General
          </button>
          <button className="border border-primary font-Poppins text-paragraph px-8 rounded-[6rem] text-sm md:text-base md:px-primary-btn-large-x py-primary-btn-large-y md:rounded-parimary-lg-btn">
            For business
          </button>
        </div>
      </section>

      <section className="w-full my-4">
        
      </section>
    </div>
  );
};

export default Faq;
