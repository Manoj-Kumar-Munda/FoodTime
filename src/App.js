import { useState } from "react";
import Main from "./components/Main";
import { MenuProvider } from "./contexts/menuProvider";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuProvider value={{isMenuOpen, setIsMenuOpen}}>
      <div className="">
        <Main />
      </div>
    </MenuProvider>
  );
}

export default App;
