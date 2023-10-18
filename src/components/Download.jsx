import React from 'react'
import appleStore from "../assets/Vectors/AppStore.svg"
import playStore from "../assets/Vectors/Google.svg"
import mobileApp from "../assets/download.jpg"

const Download = () => {
  return (
    <section className="w-full px-4 my-8">
            <div className=" flex flex-col lg:flex-row  gap-6 justify-between items-center font-Poppins">
              <div className="basis-5/12 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-primary w-max">
                    Put us in your pocket
                  </h1>
                  <p className="text-base md:text-xl font-semibold text-paragraph">
                    Download our app from google play or app store and you don’t
                    have to be worry about your food anymore.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <div>
                    <img src={appleStore} alt="appStore" />
                  </div>
                  <div>
                    <img src={playStore} alt="playStore" />
                  </div>
                </div>
              </div>
              <div className="flex-1 basis-6/12 aspect-[3/2]">
                <img src={mobileApp} alt="download" className="w-full h-full" />
              </div>
            </div>
          </section>
  )
}

export default Download