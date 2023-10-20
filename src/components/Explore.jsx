import React from 'react'
import deliveryGuy from "../assets/deliveryGuy.png"
import city from "../assets/city.png"

const Explore = () => {
  return (
    <section className="w-full px-4 py-4 flex flex-wrap justify-between items-center my-6 bg-secondary/5">
            <div className="shrink-0 flex-grow space-y-4 basis-full lg:basis-2/5 lg:pr-6">
              <h1 className=" text-5xl lg:text-6xl font-Marienda text-primary">
                Expore your favourite city's food.
              </h1>

              <p className="font-Poppins text-base md:text-lg font-normal text-paragraph ">
                Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
                tristique. Non ligula tristique ut ut libero sit convallis
                maecenas. At egestas auctor porta mattis.
              </p>

              <button className="btn__primary__large bg-primary text-white">
                <span className="font-Poppins">Explore</span>
                <span>&#8594;</span>
              </button>
            </div>

            <div className="relative flex-grow basis-full lg:basis-3/5">
              <img
                src={city}
                alt="city"
                className="w-full h-auto absolute mix-blend-darken z-0"
                loading="lazy"
              />
              <img
                src={deliveryGuy}
                alt="delivery-guy"
                className="relative w-full h-auto"
                loading="lazy"
              />
            </div>
          </section>
  )
}

export default Explore