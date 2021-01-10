import { useContext } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { MenuContext } from "./context/Menu";

function App() {
  const [menu, ] = useContext(MenuContext)
  
  return (
    <div className="overflow-x-hidden">
      <div className={`transition duration-500 font-montserrat flex text-black ${menu ? 'transform -translate-x-56 md:-translate-x-72' : ''}`}>
        <div className="w-screen">
          <Header />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default App;
