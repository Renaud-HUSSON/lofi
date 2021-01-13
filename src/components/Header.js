import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkContext } from "../context/Dark"
import { MenuContext } from "../context/Menu"

const Header = () => {
  const [, setMenu] = useContext(MenuContext)
  const [dark, ] = useContext(DarkContext)
  
  const HandleClick = () => {
    setMenu(menu => !menu)
  }
  
  return <header className="relative h-32 z-10 font-bangers flex justify-between items-center w-screen md:pl-20 md:pr-16 md:py-10 pl-5 pr-1">
    <p className="text-4xl sm:text-6xl"><Link to="/">LOFI.</Link></p>
    <div className="p-4 cursor-pointer" onClick={HandleClick}>
      <svg viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9.44449C4.07407 6.22227 8.47778 0.744489 17.5 4.61116C26.5222 8.47782 30.9259 5.14816 32 3" stroke={`${dark ? '#FFF' : '#161616'}`} strokeWidth="5"/>
        <path d="M3 19.1112C4.07407 15.889 8.47778 10.4112 17.5 14.2778C26.5222 18.1445 30.9259 14.8149 32 12.6667" stroke={`${dark ? '#FFF' : '#161616'}`} strokeWidth="5"/>
        <path d="M3 28.7778C4.07407 25.5556 8.47778 20.0778 17.5 23.9445C26.5222 27.8111 30.9259 24.4815 32 22.3333" stroke={`${dark ? '#FFF' : '#161616'}`} strokeWidth="5"/>
      </svg>
    </div>
  </header>
}

export default Header