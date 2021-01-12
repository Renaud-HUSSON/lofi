import { createContext, useEffect, useState } from "react";

export const DarkContext = createContext()

export const DarkProvider = ({children}) => {
  const matchesDark = window.matchMedia('(prefers-color-scheme: dark)')
  const isDark = matchesDark.matches || (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'dark')

  const [dark, setDark] = useState(isDark)

  useEffect(() => {
    if(dark){
      document.querySelector('html').classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      document.querySelector('html').classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  matchesDark.addEventListener('change', (e) => {
    e.matches ? setDark(true) : setDark(false)
  })

  return <DarkContext.Provider value={[dark, setDark]}>
    {children}
  </DarkContext.Provider>
}