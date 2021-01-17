import { useCallback, useContext } from "react"
import { DarkContext } from "../../context/Dark"
import { PlayContext } from "../../context/Play"

const StopSong = ({className}) => {
  const [dark, ] = useContext(DarkContext)
  const [, setPlay] = useContext(PlayContext)
  
  const stopVideo = useCallback((e) => {
    e.stopPropagation()
    
    setPlay(play => !play)
  }, [setPlay])
  
  return <div className={`${className} cursor-pointer p-2 mx-12`} onClick={stopVideo}>
  <svg width="23" height="30" viewBox="0 0 31 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="11" height="43" fill={dark ? '#FFF' : '#161616'}/>
    <rect x="20" width="11" height="43" fill={dark ? '#FFF' : '#161616'}/>
  </svg>
</div>
}

export default StopSong