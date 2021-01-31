import { createContext, useEffect, useState } from "react";

export const SongsContext = createContext()

export const SongsProvider = ({children}) => {
  const [songs, setSongs] = useState()
  
  useEffect(() => {
    fetch('/api/songs')
    .then(data => data.json())
    .then(json => {
      setSongs(json)
    })
  }, [])

  return <SongsContext.Provider value={[songs, setSongs]}>
    {children}
  </SongsContext.Provider>
}