import React from "react";

const JoinUs = () => {
  return (
    <section className="w-full px-4 my-8 font-Poppins">
      <div className="relative aspect-video rounded-3xl lg-image overflow-hidden ">
        <div className="absolute inset-0 flex flex-col justify-end items-center gap-3 pb-6 md:gap-4 md:pb-8">
          <h1 className=" text-center text-2xl md:text-4xl  text-white font-bold">
            Want to be a part of FoodTime?
          </h1>
          <p className="text-[#ededed] text-center font-semibold leading-8 hidden md:block">
            List your restaurant or shop on foodtime.
          </p>

          <button className="btn__primary__large bg-secondary text-white">
            <span className="">Get started</span>
            <span>&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
