import { useCallback, useContext } from "react"
import { DarkContext } from "../../context/Dark"
import { PlayContext } from "../../context/Play"

const PlaySong = ({className, theme = true, onClick = () => {}}) => {
  const [, setPlay] = useContext(PlayContext)
  const [dark, ] = useContext(DarkContext)
  
  const playVideo = useCallback((e) => {
    e.stopPropagation()
    
    setPlay(play => !play)

    onClick()
  }, [setPlay, onClick])

  return <div className={`${className} cursor-pointer p-2 mx-12`} onClick={playVideo}>
  <svg width="23" height="30" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 20.5L0.749998 40.8516L0.75 0.148402L36 20.5Z" fill={theme ? dark ? '#FFF' : '#161616' : '#FFF'}/>
  </svg>
</div>
}

export default PlaySong