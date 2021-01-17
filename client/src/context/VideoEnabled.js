import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const VideoEnabledContext = createContext()

export const VideoEnabledProvider = ({children}) => {
  const isVideoEnabled = localStorage.getItem('videoEnabled') 
    ? localStorage.getItem('videoEnabled') === 'false'
      ? false
      : true
    : true

  const [videoEnabled, setVideoEnabled] = useState(isVideoEnabled)

  useEffect(() => {
    if(videoEnabled){
      localStorage.setItem('videoEnabled', true)
    }else{
      localStorage.setItem('videoEnabled', false)
    }
  }, [videoEnabled])

  return <VideoEnabledContext.Provider value={[videoEnabled, setVideoEnabled]}>
    {children}
  </VideoEnabledContext.Provider>
}