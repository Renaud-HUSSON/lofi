import { useState } from "react"
import NextSong from "./NextSong"
import PlaySong from "../shared/PlaySong"
import PreviousSong from "./PreviousSong"
import StopSong from "../shared/StopSong"
import { useContext } from "react/cjs/react.development"
import { PlayContext } from "../../context/Play"

const PlayerControls = ({player}) => {
  const [play, setPlay] = useContext(PlayContext)
  
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