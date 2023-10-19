import React from "react";

const FeatureCard = ({data}) => {
    const {title, description, iconUrl} = data;
  return (
    <div className="basis-full md:basis-1/3 ">
      <div className=" flex flex-col gap-4 p-4 sm:p-6 md:p-10 xl:p-14 font-Poppins">
        <div className="w-12 h-12">
          <img src={iconUrl} alt="plate" className="w-full h-full" />
        </div>
        <h1 className="font-bold text-lg">{title}</h1>
        <span>
            {description}
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
