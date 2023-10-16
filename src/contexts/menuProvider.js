import { createContext, useContext } from "react";

export const MenuContext = createContext({
    isMenuOpen : false
})

export const MenuProvider = MenuContext.Provider

export default function useMenu(){
    return useContext(MenuContext)
}