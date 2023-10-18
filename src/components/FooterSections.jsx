import React from "react";

const FooterSections = ({data}) => {
    const {header, links} = data;
  return (
    <div className="flex flex-col gap-4 font-Poppins">
      <h2 className="">{header}</h2>
      <div className="flex flex-col gap-2">
        {
            links.map( (item, index) => <span key={index}>{item}</span>)
        }
    
      </div>
    </div>
  );
};

export default FooterSections;
