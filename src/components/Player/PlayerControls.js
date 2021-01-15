import { useState } from "react"
import NextSong from "./NextSong"
import PlaySong from "./PlaySong"
import PreviousSong from "./PreviousSong"
import StopSong from "./StopSong"

const PlayerControls = ({player}) => {
  const [play, setPlay] = useState(false)
  
  return <div className="z-50 flex mx-auto">
    <PreviousSong player={player} setPlay={setPlay}/>

    {
      play
      /* Stop */
      ?<StopSong player={player} setPlay={setPlay}/>
      /* Play */
      :<PlaySong player={player} setPlay={setPlay}/>
    }

    <NextSong player={player} setPlay={setPlay}/>
    
  </div>
}

export default PlayerControls