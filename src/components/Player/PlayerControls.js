import { useContext, useState } from "react"
import { DarkContext } from "../../context/Dark"

const PlayerControls = () => {
  const [dark, ] = useContext(DarkContext)
  const [play, setPlay] = useState(false)

  const handleClick = () => {
    setPlay(play => !play)
  }
  
  return <div className="z-50 flex mx-auto">
    {/* Previous */}
    <div className="cursor-pointer p-2">
      <svg width="19" height="30" viewBox="0 0 27 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="23.145" y1="40.791" x2="2.52349" y2="20.1694" stroke={dark ? '#FFF' : '#161616'} strokeWidth="5"/>
        <line x1="24.4608" y1="1.76777" x2="3.76775" y2="22.4608" stroke={dark ? '#FFF' : '#161616'} strokeWidth="5"/>
      </svg>
    </div>

    {
      play
      /* Stop */
      ?<div className="cursor-pointer p-2 mx-12" onClick={handleClick}>
        <svg width="23" height="30" viewBox="0 0 31 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="11" height="43" fill={dark ? '#FFF' : '#161616'}/>
          <rect x="20" width="11" height="43" fill={dark ? '#FFF' : '#161616'}/>
        </svg>
      </div>
      /* Play */
      :<div className="cursor-pointer p-2 mx-12" onClick={handleClick}>
        <svg width="23" height="30" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 20.5L0.749998 40.8516L0.75 0.148402L36 20.5Z" fill={dark ? '#FFF' : '#161616'}/>
        </svg>
      </div>

    }

    {/* Next */}
    <div className="cursor-pointer p-2">
      <svg width="19" height="30" viewBox="0 0 27 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3.76777" y1="2.23223" x2="24.3893" y2="22.8538" stroke={dark ? '#FFF' : '#161616'} strokeWidth="5"/>
        <line x1="2.45202" y1="41.2554" x2="23.145" y2="20.5624" stroke={dark ? '#FFF' : '#161616'} strokeWidth="5"/>
      </svg>
    </div>
  </div>
}

export default PlayerControls