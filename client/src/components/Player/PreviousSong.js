import { useCallback, useContext } from "react"
import { CurrentSongContext } from "../../context/CurrentSong"
import { DarkContext } from "../../context/Dark"
import { SongsContext } from "../../context/Songs"

const PreviousSong = ({player, setPlay}) => {
  const [currentSong, setCurrentSong] = useContext(CurrentSongContext)
  const [songs, ] = useContext(SongsContext)
  const [dark, ] = useContext(DarkContext)
  
  const previousSong = useCallback(() => {
    setCurrentSong(song => {
      return {
        index: (song.index - 1 + songs.length) % songs.length,
        song: songs[(song.index - 1 + songs.length) % songs.length]
      }
    })
    player.changeVideo(songs[(currentSong.index - 1 + songs.length) % songs.length].id.videoId)
    setPlay(true)
  }, [player, setCurrentSong, songs, currentSong, setPlay])
  
  return <div className="cursor-pointer p-2" onClick={previousSong}>
  <svg width="19" height="30" viewBox="0 0 27 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="23.145" y1="40.791" x2="2.52349" y2="20.1694" stroke={dark ? '#FFF' : '#161616'} strokeWidth="5"/>
    <line x1="24.4608" y1="1.76777" x2="3.76775" y2="22.4608" stroke={dark ? '#FFF' : '#161616'} strokeWidth="5"/>
  </svg>
</div>
}

export default PreviousSong