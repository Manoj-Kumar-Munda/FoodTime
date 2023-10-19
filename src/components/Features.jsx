import React from "react";

import { features } from "../utils/constants";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="w-full px-4 my-6 mx-auto">
      <div className="flex flex-wrap">
        {features.map((item, index) => (
          <FeatureCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Features;
