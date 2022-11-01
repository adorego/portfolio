// import { NextSeo } from "next-seo";
import { ReactNode, useState } from "react";

import AppDemo from "../Components/AppDemo";
import NavBarMenu from "./NavBarMenu";
import PortalContainer from "./PortalContainer";
import classes from "./PageLayout.module.css";
import { motion } from "framer-motion";
import { useContext } from "react";

type PortalInfo = {
    showPortal:boolean,
    componentToShow:ReactNode
}

export interface PageLayoutProps{
    children:ReactNode;
    title:string;
    description:string;
    

    
}
const PageLayout = ({children, title, description}:PageLayoutProps):JSX.Element =>{
    
      const variants = {
        enter:{opacity:1, x:0, y:0},
        hidden:{opacity:0, x:-200, y:0},
        exit:{opacity:0, x:0, y: -100},
      }
   
      return(
        
        <motion.main
            className=""
            initial="hidden" 
            animate="enter" 
            exit="exit"
            variants={variants} 
            transition={{type:"linear"}}
        >
            <nav 
                className={classes.navBar}>
                <NavBarMenu />
            </nav>
            
            {children}
        </motion.main>
       
       
        
      )
}

export default PageLayout;