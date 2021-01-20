import { createContext, useContext, useEffect, useState } from "react";
import YoutubeVideo from "../Models/YoutubeVideo";
import { SongsContext } from "./Songs";

export const PlayerContext = createContext()

export const PlayerProvider = ({children}) => {
  const [songs, ] = useContext(SongsContext)
  
  const [player, setPlayer] = useState(undefined)
  const [initialize, setInitialize] = useState(false)

  useEffect(() => {
    /* 
      Initialize the youtube video object, only once when the initial song is ready
      Same logic as the currentSongContext to find the initial index
      (Couldn't find a way not to duplicate it)
    */
    if(songs && !initialize){
      let currentSongToSet
  
      const localStorageSong = localStorage.getItem('currentSong')
      
      //Set the initial video to the one in localstorage if it exists and is valid
      if(localStorageSong){
        const index = songs.findIndex(element => {
          return element.videoId === localStorageSong
        })
  
        currentSongToSet = index !== -1
        ? {index: index, song: songs[index]}
        : {index: 0, song: songs[0]}
      }else{
        currentSongToSet = {index: 0, song: songs[0]}
      }

      setPlayer(new YoutubeVideo({
        videoId: currentSongToSet.song.video
      }))
      setInitialize(true)
    }
  }, [initialize, songs])

  return <PlayerContext.Provider value={[player, setPlayer]}>
    {children}
  </PlayerContext.Provider>
}