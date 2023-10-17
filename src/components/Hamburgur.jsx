import React from 'react'
import useMenu from '../contexts/menuProvider'

const Hamburgur = () => {
    const {isMenuOpen, setIsMenuOpen} = useMenu()
  return (
    <div className="md:hidden relative py-3 ">
        <button className="text-primary w-10 h-10 relative focus:outline-none " onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-6 rounded-2xl bg-primary transform transition duration-500 ease-in-out  
              ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
            ></span>
            <span
              aria-hidden="true"
              className={
                `block absolute  h-0.5 w-6 bg-current   transform transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0":"opacity-100"}`
              }
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-6 bg-current transform  transition duration-500 ease-in-out
                ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}
                `}
            ></span>
          </div>
        </button>
      </div>
  )
}

export default Hamburgur