import { Link } from "react-router-dom"

const Menu = () => {
  return <nav className="relative flex flex-col justify-center min-h-screen font-bangers text-4xl bg-black text-white">
    <ul className="w-56 md:w-72 ">
      <li className="text-center my-3"><Link className="p-3" to="/">ABOUT</Link></li>
      <li className="text-center my-3"><Link className="p-3" to="/collection">COLLECTION</Link></li>
    </ul>
    <div className="absolute left-5 bottom-5">
      <a className=" flex" href="https://github.com/Renaud-HUSSON/lofi" target="_blank" rel="noreferrer">
        <img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="Github Icon"/>
        <p className="text-2xl ml-2">Github</p>
      </a>
    </div>
  </nav>
}

export default Menu