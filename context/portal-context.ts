import React, { ReactNode } from "react";

import AppDemo from "../Components/AppDemo";

const PortalContext = React.createContext({
    showPortal:false,
    modalComponent:{} as ReactNode
})

export default PortalContext;