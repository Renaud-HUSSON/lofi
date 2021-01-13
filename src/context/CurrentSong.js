import { createContext, useContext, useEffect, useState } from "react";
import { SongsContext } from "./Songs";

export const CurrentSongContext = createContext()

export const CurrentSongProvider = ({children}) => {
  const [songs, ] = useContext(SongsContext)
  const [currentSong, setCurrentSong] = useState()

  useEffect(() => {
    if(songs){
      let currentSongToSet
  
      const localStorageSong = localStorage.getItem('currentSong')
      
      if(localStorageSong){
        const index = songs.findIndex(element => {
          return element.id.videoId === localStorageSong
        })
  
        currentSongToSet = index !== -1
        ? songs[index]
        : songs[0]
      }else{
        currentSongToSet = songs[0]
      }
      
      setCurrentSong(currentSongToSet)
    }
  }, [songs])
  
  return <CurrentSongContext.Provider value={[currentSong, setCurrentSong]}>
    {children}
  </CurrentSongContext.Provider>
}