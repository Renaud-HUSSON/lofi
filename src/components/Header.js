import { useContext } from "react"
import { MenuContext } from "../context/Menu"

const Header = () => {
  const [, setMenu] = useContext(MenuContext)
  
  const HandleClick = () => {
    setMenu(menu => !menu)
  }
  
  return <header className="font-bangers flex justify-between w-screen md:px-20 md:py-10 p-5">
    <p className="text-5xl">LOFI.</p>
    <img onClick={HandleClick} className="cursor-pointer p-3" src={`${process.env.PUBLIC_URL}/images/burger.svg`} alt="Burger Menu" />
  </header>
}

export default Header