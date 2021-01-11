import { Link } from "react-router-dom"
import ThemeSwitch from "./Menu/ThemeSwitch"

const Menu = () => {
  return <nav className="relative flex flex-col font-bangers text-4xl bg-black text-white">
    <ThemeSwitch />
    <ul className="w-56 md:w-72 mt-10">
      <li className="text-center my-3"><Link className="p-3" to="/">HOME</Link></li>
      <li className="text-center my-3"><Link className="p-3" to="/about">ABOUT</Link></li>
      <li className="text-center my-3"><Link className="p-3" to="/collection">COLLECTION</Link></li>
    </ul>
    <div className="absolute left-4 bottom-4">
      <a className=" flex" href="https://github.com/Renaud-HUSSON/lofi" target="_blank" rel="noreferrer">
        <img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="Github Icon"/>
        <p className="text-2xl ml-2">Github</p>
      </a>
    </div>
  </nav>
}

export default Menu