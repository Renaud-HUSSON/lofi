import { useContext } from 'react'
import { MenuContext } from '../context/Menu'
import Header from './Header'
import Player from './Player'
import Menu from './Menu'

const Layout = ({children}) => {
  const [menu, ] = useContext(MenuContext)
  
  return <div className="transition-colors duration-500 dark:bg-black overflow-hidden">
    <div className={`transition duration-500 font-montserrat flex dark:text-white text-black ${menu ? 'transform -translate-x-56 md:-translate-x-72' : ''}`}>
      <div className="w-screen">
        <Header />
        <main className="md:px-20 px-5 no-scrollbar overflow-y-auto">
          {children}
        </main>
        <Player />
      </div>
      <Menu />
    </div>
  </div>
}

export default Layout