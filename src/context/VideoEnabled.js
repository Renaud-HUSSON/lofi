import { createContext, useState } from "react";

export const VideoEnabledContext = createContext()

export const VideoEnabledProvider = ({children}) => {
  const [videoEnabled, setVideoEnabled] = useState(true)

  console.log(videoEnabled)
  
  return <VideoEnabledContext.Provider value={[videoEnabled, setVideoEnabled]}>
    {children}
  </VideoEnabledContext.Provider>
}