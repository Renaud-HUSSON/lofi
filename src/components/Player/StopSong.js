import { useCallback, useContext } from "react"
import { DarkContext } from "../../context/Dark"

const StopSong = ({setPlay, player}) => {
  const [dark, ] = useContext(DarkContext)
  
  const stopVideo = useCallback(() => {
    setPlay(play => !play)
    player.stop()
  }, [player, setPlay])
  
  return <div className="cursor-pointer p-2 mx-12" onClick={stopVideo}>
  <svg width="23" height="30" viewBox="0 0 31 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="11" height="43" fill={dark ? '#FFF' : '#161616'}/>
    <rect x="20" width="11" height="43" fill={dark ? '#FFF' : '#161616'}/>
  </svg>
</div>
}

export default StopSong