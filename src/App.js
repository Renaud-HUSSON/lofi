import { useContext } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Player from "./components/Player";
import { MenuContext } from "./context/Menu";
import Routes from "./Routes";

function App() { 
  const [menu, ] = useContext(MenuContext)

  return (
    <div className="transition-colors duration-500 dark:bg-black overflow-x-hidden">
      <div className={`transition duration-500 font-montserrat flex dark:text-white text-black ${menu ? 'transform -translate-x-56 md:-translate-x-72' : ''}`}>
        <div className="w-screen">
          <Header />
          <main className="md:px-20 px-5 no-scrollbar overflow-y-auto">
            <Routes />
          </main>
          <Player />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default App;

