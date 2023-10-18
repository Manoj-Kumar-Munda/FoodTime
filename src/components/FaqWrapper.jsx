import React, { useState } from "react";
import { qna } from "../utils/constants";
import { splitArray } from "../utils/helper";
import FaqItem from "./FaqItem";

const FaqWrapper = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [arr1, arr2] = splitArray(qna);

  return (
    <div className="">
      <div className="flex flex-wrap gap-x-4">
        <div className="flex-1 basis-[49%]">
          <div className="flex flex-col gap-y-4 mb-4">
            {arr1.map((item) => (
              <FaqItem
                key={item?.id}
                item={item}
                isActive={activeItem === item.id}
                setActiveIndex={() => setActiveItem(item.id)}
                closeItem={() => setActiveItem(null)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 basis-[49%]">
          <div className="flex flex-col gap-y-4">
            {arr2.map((item) => (
              <FaqItem
                key={item?.id}
                item={item}
                isActive={activeItem === item.id}
                setActiveIndex={() => setActiveItem(item.id)}
                closeItem={() => setActiveItem(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqWrapper;