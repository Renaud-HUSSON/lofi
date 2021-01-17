import { createContext, useEffect, useState } from "react";
import data from '../data.json'

export const SongsContext = createContext()

export const SongsProvider = ({children}) => {
  const [songs, setSongs] = useState(data.items)
  
  useEffect(() => {
    // const api_key = process.env.REACT_APP_YOUTUBE_API_KEY
    // const limit = 25

    // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=${limit}&order=viewCount&q=lofi&type=video&key=${api_key}`)
    // .then(data => data.json())
    // .then(json => {
    //   console.log(json)
    //   setSongs(json.items)
    // })

  }, [songs])

  return <SongsContext.Provider value={[songs, setSongs]}>
    {children}
  </SongsContext.Provider>
}