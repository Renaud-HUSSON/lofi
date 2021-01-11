import { useContext } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { MenuContext } from "./context/Menu";
import Routes from "./Routes";

function App() {
  const [menu, ] = useContext(MenuContext)
  
  return (
    <div className="overflow-x-hidden">
      <div className={`transition duration-500 font-montserrat flex text-black ${menu ? 'transform -translate-x-56 md:-translate-x-72' : ''}`}>
        <div className="w-screen">
          <Header />
          <main className="md:pl-20 md:pr-24 pl-5 pr-9 overflow-y-auto">
            <Routes />
          </main>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default App;
