import React from "react";
import Header from "./Header";
import useMenu from "../contexts/menuProvider";
import Hero from "./Hero";

const Main = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  console.log(isMenuOpen);
  return (
    <div className="relative">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="max-w-7xl mx-auto">
        <Hero />
      </main>
    </div>
  );
};

export default Main;
