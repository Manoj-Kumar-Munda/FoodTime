import React, { useState } from "react";
import Header from "./Header";

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative">
      {isMenuOpen && (
        <div className="absolute inset-0 bg-slate-900/30 z-20"></div>
      )}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      
    </div>
  );
};

export default Main;
