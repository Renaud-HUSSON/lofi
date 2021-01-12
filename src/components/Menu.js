import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkContext } from "../context/Dark"
import ThemeSwitch from "./Menu/ThemeSwitch"

const Menu = () => {
  const [dark, ] = useContext(DarkContext)
  
  return <nav className="transition-colors duration-500 relative flex flex-col font-bangers text-4xl dark:bg-white bg-black dark:text-black text-white">
    <ThemeSwitch />
    <ul className="w-56 md:w-72 mt-10">
      <li className="text-center my-3"><Link className="p-3" to="/">HOME</Link></li>
      <li className="text-center my-3"><Link className="p-3" to="/about">ABOUT</Link></li>
      <li className="text-center my-3"><Link className="p-3" to="/collection">COLLECTION</Link></li>
    </ul>
    <div className="absolute left-4 bottom-4">
      <a className=" flex" href="https://github.com/Renaud-HUSSON/lofi" target="_blank" rel="noreferrer">
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 0C6.49358 0 0 6.49238 0 14.5C0 20.9066 4.15425 26.3417 9.91679 28.2593C10.6406 28.3934 10.875 27.9439 10.875 27.5621V24.8627C6.84158 25.7399 6.00179 23.1517 6.00179 23.1517C5.34204 21.4757 4.39108 21.0298 4.39108 21.0298C3.07521 20.1296 4.49137 20.149 4.49137 20.149C5.94742 20.2505 6.7135 21.6437 6.7135 21.6437C8.00642 23.8598 10.1053 23.2193 10.933 22.8484C11.0623 21.9119 11.4381 21.2715 11.8538 20.9102C8.63354 20.5417 5.24779 19.2983 5.24779 13.7436C5.24779 12.1595 5.8145 10.8665 6.74129 9.85154C6.59146 9.48542 6.09483 8.01004 6.88267 6.01388C6.88267 6.01388 8.10067 5.62479 10.8714 7.50012C12.0278 7.17871 13.2675 7.018 14.5 7.01196C15.7325 7.018 16.9735 7.17871 18.1322 7.50012C20.9005 5.62479 22.1161 6.01388 22.1161 6.01388C22.9052 8.01125 22.4085 9.48662 22.2587 9.85154C23.1891 10.8665 23.751 12.1607 23.751 13.7436C23.751 19.3128 20.3592 20.5393 17.1305 20.8981C17.6501 21.3476 18.125 22.2297 18.125 23.583V27.5621C18.125 27.9475 18.357 28.4007 19.0929 28.2581C24.8506 26.338 29 20.9042 29 14.5C29 6.49238 22.5076 0 14.5 0Z" fill={dark ? '#161616' : '#FFF' }/>
        </svg>
        <p className="text-2xl ml-2">Github</p>
      </a>
    </div>
  </nav>
}

export default Menu