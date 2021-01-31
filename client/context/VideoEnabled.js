import { createContext, useEffect, useRef, useState } from "react";

export const VideoEnabledContext = createContext()

export const VideoEnabledProvider = ({children}) => {
  const initial = useRef(true)
  const [videoEnabled, setVideoEnabled] = useState()
  
  useEffect(() => {
    if(initial.current){
      const isVideoEnabled = localStorage.getItem('videoEnabled') 
        ? localStorage.getItem('videoEnabled') === 'false'
          ? false
          : true
        : true
  
      setVideoEnabled(isVideoEnabled)  

      initial.current = false
    }
      
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