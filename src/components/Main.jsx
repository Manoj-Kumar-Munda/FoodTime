import React, { useState } from "react";
import Header from "./Header";
import useMenu from "../contexts/menuProvider";

const Main = () => {
  const {isMenuOpen, setIsMenuOpen} = useMenu();
  console.log(isMenuOpen)
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
