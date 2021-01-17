import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const MenuContext = createContext()

export const MenuProvider = ({children}) => {
  const [menu, setMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenu(false)
  }, [location.key])
  
  return <MenuContext.Provider value={[menu, setMenu]}>
    {children}
  </MenuContext.Provider>
}