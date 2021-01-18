import { useCallback, useContext } from "react"
import { CurrentSongContext } from "../../context/CurrentSong"
import { DarkContext } from "../../context/Dark"
import { SongsContext } from "../../context/Songs"

const NextSong = ({player, setPlay}) => {
  const [currentSong, setCurrentSong] = useContext(CurrentSongContext)
  const [songs, ] = useContext(SongsContext)
  const [dark, ] = useContext(DarkContext)

  const nextSong = useCallback(() => {
    setCurrentSong(song => {
      return {
        index: (song.index + 1) % songs.length,
        song: songs[(song.index + 1) % songs.length]
      }
    })
    player.changeVideo(songs[(currentSong.index + 1) % songs.length].videoId)
    setPlay(true)
  }, [player, setCurrentSong, songs, currentSong, setPlay])
  
  return <div className="cursor-pointer p-2" onClick={nextSong}>
  <svg width="19" height="30" viewBox="0 0 27 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="3.76777" y1="2.23223" x2="24.3893" y2="22.8538" stroke={dark ? '#FFF' : '#161616'} strokeWidth="5"/>
    <line x1="2.45202" y1="41.2554" x2="23.145" y2="20.5624" stroke={dark ? '#FFF' : '#161616'} strokeWidth="5"/>
  </svg>
</div>
}

export default NextSong