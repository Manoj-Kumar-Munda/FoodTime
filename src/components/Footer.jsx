import React from "react";
import { footerItems } from "../utils/constants";
import FooterSections from "./FooterSections";

const Footer = () => {
  return (
    <section className="w-full px-4 mt-8 bg-footer text-white">
      <div className="main">
        <div className="flex flex-col lg:flex-row justify-between py-16 gap-8 lg:gap-0">
          <div className="flex flex-col gap-4 max-w-lg ">
            <h1 className="text-4xl">
              <span className="font-Marienda">Food</span>
              <span className="font-Poppins">Time</span>
            </h1>
            <p className="text-lg font-Poppins">
              Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor
              convallis. Bibendum sapien suspendisse ipsum urna malesuada elit.
              Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
            </p>
          </div>

          <div className="flex-1 flex justify-between lg:justify-around">

            {
                footerItems.map( (item ,index) => <FooterSections key={index} data={item} />)
            }
    
          </div>
        </div>

        <div className="flex justify-center pb-8">
          <span>©️ Created with ❤️ by Manoj</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
