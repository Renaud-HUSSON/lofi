import { createContext, useEffect, useRef, useState } from "react";

export const DarkContext = createContext()

export const DarkProvider = ({children}) => {
  const initial = useRef(true)
  const [dark, setDark] = useState()
  
  useEffect(() => {
    if(initial.current){
      const matchesDark = window.matchMedia('(prefers-color-scheme: dark)')
      const isDark = matchesDark.matches || (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'dark')
      
      matchesDark.addEventListener('change', (e) => {
        e.matches ? setDark(true) : setDark(false)
      })
  
      setDark(isDark)
      initial.current = false
    }
    
    if(dark){
      document.querySelector('html').classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      document.querySelector('html').classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return <DarkContext.Provider value={[dark, setDark]}>
    {children}
  </DarkContext.Provider>
}