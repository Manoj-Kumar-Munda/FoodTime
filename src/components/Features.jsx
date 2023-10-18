import React from 'react'
import plate from "../assets/Vectors/location.svg"
import clock from "../assets/Vectors/clock.svg"
import counter from "../assets/Vectors/counter.svg"

const Features = () => {
  return (
    <section className="w-full px-4 my-6 mx-auto">
            <div class="flex flex-wrap">
              <div class="basis-full md:basis-1/3 ">
                <div class=" flex flex-col gap-4 p-4 sm:p-6 md:p-10 xl:p-14 font-Poppins">
                  <div className="w-12 h-12">
                    <img src={plate} alt="plate" className="w-full h-full" />
                  </div>
                  <h1 className="font-bold text-lg">
                    Wide selection of restaurants
                  </h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ornare massa nunc
                    nibh tristique.
                  </span>
                </div>
              </div>
              <div class="basis-full md:basis-1/3 ">
                <div class="flex flex-col gap-4 font-Poppins p-4 sm:p-6 md:p-10 xl:p-14">
                  <div className="w-12 h-12">
                    <img
                      src={counter}
                      alt="counter"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h1 className="font-bold text-lg">
                    Wide selection of restaurants
                  </h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ornare massa nunc
                    nibh tristique.
                  </span>
                </div>
              </div>
              <div class="basis-full md:basis-1/3 ">
                <div class="flex flex-col gap-4 font-Poppins p-4 sm:p-6 md:p-10 xl:p-14">
                  <div className="w-12 h-12">
                    <img
                      src={clock}
                      alt="clock"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h1 className="font-bold text-lg">
                    Wide selection of restaurants
                  </h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ornare massa nunc
                    nibh tristique.
                  </span>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Features