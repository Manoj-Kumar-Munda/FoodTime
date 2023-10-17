import React from "react";
import Header from "./Header";
import useMenu from "../contexts/menuProvider";
import Hero from "./Hero";
import Explore from "./Explore";
import Features from "./Features";
import JoinUs from "./JoinUs";
import Faq from "./Faq";

const Main = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  console.log(isMenuOpen);
  return (
    <div className="relative">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <Explore />
        <Features />
        <JoinUs />
        <Faq />
        
      </main>
    </div>
  );
};

export default Main;
