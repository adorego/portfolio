import { ReactNode, useEffect, useState } from "react";

import { createPortal } from "react-dom"

type PortalContainerProps = {
    children:ReactNode,
}
const PortalContainer = ({children} : PortalContainerProps) =>{
    const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector("#my_portal")!)
      : null
}

export default PortalContainer;