import { useEffect } from "react"
import { initGA, logPageView } from '../utils/analytics'

const Ga= ({children}) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return <>
    {children}
  </>
}

export default Ga

