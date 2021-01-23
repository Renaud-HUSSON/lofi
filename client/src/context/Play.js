import { createContext, useContext, useEffect, useState } from "react";
import { PlayerContext } from "./Player";

export const PlayContext = createContext()

export const PlayProvider = ({children}) => {
  const [play, setPlay] = useState(false)

  const [player, ] = useContext(PlayerContext)

  useEffect(() => {
    if(player){
      if(play){
        player.play()
      }else{
        player.stop()
      }
    }
  }, [player, play])
  
  return <PlayContext.Provider value={[play, setPlay]}>
    {children}
  </PlayContext.Provider>
}