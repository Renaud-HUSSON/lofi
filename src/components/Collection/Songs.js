import { useCallback, useContext } from "react"
import { CurrentSongContext } from "../../context/CurrentSong"
import { PlayContext } from "../../context/Play"
import PlaySong from "../shared/PlaySong"

const Song = ({song, index}) => {
  const [currentSong, setCurrentSong] = useContext(CurrentSongContext)
  const [play, setPlay] = useContext(PlayContext)

  const isCurrentSong = 
    currentSong
    ?currentSong.song === song
    :false

  const handleClick = useCallback(() => {
    console.log('click')
    
    setCurrentSong({
      index: index,
      song: song
    })
    setPlay(true)
  }, [setCurrentSong, song, index])
  
  return <div className="song cursor-pointer" onClick={handleClick}>

    <img className="w-full" src={song.snippet.thumbnails.medium.url} alt={song.snippet.title}/>
  </div>
}

export default Song