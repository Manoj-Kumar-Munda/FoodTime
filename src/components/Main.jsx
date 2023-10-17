import React from "react";
import Header from "./Header";
import useMenu from "../contexts/menuProvider";

const Main = () => {
  const {isMenuOpen, setIsMenuOpen} = useMenu();
  console.log(isMenuOpen)
  return (
    <div className="relative">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      
    </div>
  );
};

export default Main;
