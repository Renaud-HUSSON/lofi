import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'

export const MenuContext = createContext()

export const MenuProvider = ({children}) => {
  const [menu, setMenu] = useState(false)
  const location = useRouter()

  useEffect(() => {
    setMenu(false)
  }, [location])
  
  return <MenuContext.Provider value={[menu, setMenu]}>
    {children}
  </MenuContext.Provider>
}