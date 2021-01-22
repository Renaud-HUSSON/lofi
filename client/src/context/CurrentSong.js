import { createContext, useContext, useEffect, useState } from "react";
import { PlayContext } from "./Play";
import { PlayerContext } from "./Player";
import { SongsContext } from "./Songs";

export const CurrentSongContext = createContext()

export const CurrentSongProvider = ({children}) => {
  const [songs, ] = useContext(SongsContext)
  const [player, ] = useContext(PlayerContext)
  const [, setPlay] = useContext(PlayContext)

  const [currentSong, setCurrentSong] = useState()

  useEffect(() => {
    if(songs){
      let currentSongToSet
  
      const localStorageSong = localStorage.getItem('currentSong')
      
      if(localStorageSong){
        const index = songs.findIndex(element => {
          return element.video === localStorageSong
        })
  
        currentSongToSet = index !== -1
        ? {index: index, song: songs[index]}
        : {index: 0, song: songs[0]}
      }else{
        currentSongToSet = {index: 0, song: songs[0]}
      }
      
      setCurrentSong(currentSongToSet)
    }
  }, [songs])

  useEffect(() => {
    if(currentSong){
      localStorage.setItem('currentSong', currentSong.song.video)
      player.changeVideo(songs[currentSong.index].video)

      setPlay(true)
    }
  }, [currentSong, player, songs])

  return <CurrentSongContext.Provider value={[currentSong, setCurrentSong]}>
    {children}
  </CurrentSongContext.Provider>
}