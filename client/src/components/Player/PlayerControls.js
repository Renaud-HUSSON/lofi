import NextSong from "./NextSong"
import PlaySong from "../shared/PlaySong"
import PreviousSong from "./PreviousSong"
import StopSong from "../shared/StopSong"
import { PlayContext } from "../../context/Play"
import { PlayerContext } from "../../context/Player"
import { useContext } from "react"

const PlayerControls = () => {
  const [player, ] = useContext(PlayerContext)
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