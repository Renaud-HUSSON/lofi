import { createContext, useState } from "react";

export const PlayContext = createContext()

export const PlayProvider = ({children}) => {
  const [play, setPlay] = useState(false)
  
  return <PlayContext.Provider value={[play, setPlay]}>
    {children}
  </PlayContext.Provider>
}