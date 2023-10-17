import React from 'react'
import leaf from "../assets/leaf.png"
import mark from "../assets/mark.svg"
import search from "../assets/Vectors/SearchOutline.svg"
import FoodPlate from "../assets/food.png"
import tick from "../assets/Vectors/tick.svg"

const Hero = () => {
  return (
    <section className="relative px-4 py-8">
            <div className="hidden xl:block absolute w-72 h-72 rotate-[25deg] -left-16 -top-14  z-0">
              <img src={leaf} alt="leaf" className="p-6 blur-sm" />
            </div>

            <div className=" flex flex-wrap md:justify-between items-center space-y-6 ">
              {/* Main text */}
              <div className="basis-full shrink-0 flex-grow lg:basis-3/5 relative flex flex-col justify-center items-center lg:items-start gap-4 md:gap-7 z-10">
                <h1 className="shrink-0 max-w-2xl text-center sm:text-center lg:text-start text-5xl md:text-6xl font-Marienda text-primary font-bold">
                  Order food online from your favourite local restaurants
                  <span className="text-secondary">.</span>
                </h1>

                <p className=" font-Poppins text-lg md:text-2xl text-paragraph font-semibold">
                  Freshly made food delivered to your door.
                </p>

                <div className="max-w-3xl self-center xl:self-auto w-full flex box-border border border-r-0 rounded-[6rem]">
                  <div className="flex-1 flex gap-2 sm:gap-4 pl-2 py-2  items-center">
                    <div className="bg-secondary p-2 rounded-full hidden sm:block">
                      <img src={mark} alt="mark" className="w-6 h-6" />
                    </div>

                    <input
                      type="text"
                      name="search"
                      className="bg-transparent outline-none border-none font-Poppins pl-4"
                      placeholder="Enter your location"
                    />
                  </div>

                  {/* <button className="border border-primary flex gap-2 justify-center items-center bg-primary rounded-[6rem] px-10"> */}
                  <button className="search__btn bg-primary">
                    <img src={search} alt="search" />
                    <span className="text-white  font-Poppins">Search</span>
                  </button>
                </div>
              </div>

              {/* Food Plate */}
              <div className="basis-full shrink-0 flex-grow lg:basis-2/5 max-w-lg relative mx-auto">
                {/* glassmorphism-effect-card */}
                <div className="glass__btn border">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex items-center gap-2">
                      <span>
                        <img src={tick} alt="tick" />
                      </span>
                      <span className="text-2xl md:text-4xl text-secondary font-bold font-Poppins">
                        200K+
                      </span>
                    </div>
                    <span className="text-paragraph text-center font-Poppins text-base md:text-lg font-semibold ">
                      People delivered
                    </span>
                  </div>
                </div>

                <div className="hidden xl:block absolute w-72 h-72 rotate-[15deg] -right-16 -top-24  z-0">
                  <img
                    src={leaf}
                    alt="leaf"
                    className="p-6 blur-[2.5px]"
                    loading="lazy"
                  />
                </div>
                <img
                  src={FoodPlate}
                  alt="foodPlate"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
  )
}

export default Hero