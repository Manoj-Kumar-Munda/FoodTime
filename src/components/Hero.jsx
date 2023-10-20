import React from 'react'
import leaf from "../assets/leaf.png"
import mark from "../assets/mark.svg"
import search from "../assets/Vectors/SearchOutline.svg"
import FoodPlate from "../assets/food.png"
import tick from "../assets/Vectors/tick.svg"

const Hero = () => {
  return (
    <section className="relative px-2 py-6 w-full">
            <div className="hidden xl:block absolute w-72 h-72 rotate-[25deg] -left-16 -top-14  z-0">
              <img src={leaf} alt="leaf" className="p-6 blur-sm" />
            </div>

            <div className=" flex flex-wrap px-2 md:px-0 justify-center md:justify-between items-center space-y-6 ">
              {/* Main text */}
              <div className="basis-full flex-grow lg:basis-3/5 relative flex flex-col lg:justify-center items-center lg:items-start gap-y-4 md:gap-y-7 z-10">
                <h1 className=" max-w-2xl text-center lg:text-start text-5xl md:text-6xl font-Marienda text-primary font-bold">
                  Order food online from your favourite local restaurants
                  <span className="text-secondary">.</span>
                </h1>

                <p className=" font-Poppins text-base md:text-lg text-paragraph font-semibold text-center">
                  Freshly made food delivered to your door.
                </p>

                <div className="max-w-2xl w-full  sm:px-0 self-center xl:self-auto  flex border border-r-0 rounded-[6rem] overflow-hidden">
                  <div className="flex-1 flex sm:gap-4 pl-2 py-2 items-center">
                    <div className="bg-secondary p-2 rounded-full hidden sm:block">
                      <img src={mark} alt="mark" className="w-6 h-6" />
                    </div>

                    <input
                      type="text"
                      name="search"
                      className="bg-transparent outline-none border-none font-Poppins pl-2 md:pl-4 w-full"
                      placeholder="Enter your location"
                    />
                  </div>

                 
                  <button className="shrink-0 inline-flex justify-center items-center rounded-r-full rounded-l-full gap-x-2 bg-primary px-4 py-3  ">
                    <img src={search} alt="search" className='hidden sm:block' />
                    <span className="text-white  font-Poppins text-sm sm:text-base">Search</span>
                  </button>
                </div>
              </div>

              {/* Food Plate */}
              <div className="basis-full sm:shrink-0 flex-grow lg:basis-2/5 max-w-lg relative mx-auto">
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