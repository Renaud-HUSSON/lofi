import { useCallback, useContext } from "react"
import { CurrentSongContext } from "../../context/CurrentSong"
import { PlayContext } from "../../context/Play"
import PlaySong from "../shared/PlaySong"
import StopSong from "../shared/StopSong"

const Song = ({song, index}) => {
  const [currentSong, setCurrentSong] = useContext(CurrentSongContext)
  const [play, setPlay] = useContext(PlayContext)

  const isCurrentSong = 
    currentSong
    ?currentSong.song === song
    :false

  const handleClick = useCallback(() => {
    if(currentSong.song !== song){
      setCurrentSong({
        index: index,
        song: song
      })
      setPlay(true)
    }else{
      setPlay(play => !play)
    }
  }, [setCurrentSong, song, index, setPlay, currentSong])

  return <div className="song cursor-pointer relative" onClick={handleClick}>
    <div className={`transition duration-200 absolute w-full h-full bg-black song--hover hover:opacity-80 ${!isCurrentSong ? 'opacity-0' : 'opacity-80'}`}>
      {
        isCurrentSong
        ?play
          ?<StopSong className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-0" theme={false}/>
          :<PlaySong className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-0" theme={false}/>
        :<PlaySong className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-0" onClick={handleClick} theme={false}/>
      }
    </div>
    <img className="w-full" src={song.snippet.thumbnails.medium.url} alt={song.snippet.title}/>
  </div>
}

export default Song