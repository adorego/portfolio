import SideNavButton, { ButtonNavDirections } from "./SideNavButton"

import Link from "next/link"
import classes from './SideNavigation.module.css';
import {navLinks} from "../Layout/NavBarMenu";
import { useState } from "react";

export interface SideNavigationProps{
    onNavigationChange:(selectedPage:number) => void;
}


const SideNavigation = (props:SideNavigationProps) =>{
    
    const [sideNavButtonsIndex, setSideNavButtonsIndex] = useState<number>(0);
    const onSideNavButtonClickHandler =(side:string) =>{
        if(side === "right"){
            if(sideNavButtonsIndex === navLinks.length - 1){
                setSideNavButtonsIndex(0);
            }else{
                setSideNavButtonsIndex(state => state + 1);
            }
        }else if(side === "left"){
            if(sideNavButtonsIndex === 0){
                setSideNavButtonsIndex(navLinks.length - 1);
            }else{
                setSideNavButtonsIndex(state => state - 1);
            }
        }
    }
    const getLeftNavLink = () =>{
        if(sideNavButtonsIndex === 0){
            return navLinks[navLinks.length - 1];
        }else{
            return navLinks[sideNavButtonsIndex - 1];
        }
    }

    const getRightNavLink = () =>{
        if(sideNavButtonsIndex === navLinks.length - 1){
            return navLinks[0];
        }else{
            return navLinks[sideNavButtonsIndex + 1]
        }
    }

    return(
        <>
            <div className={classes.sideButtonNavLeft}>
                    <Link href={getLeftNavLink().url}>
                        <a onClick={() => onSideNavButtonClickHandler("left")}>
                            <SideNavButton direction={ButtonNavDirections.left} label={getLeftNavLink().label} />
                        </a>
                    </Link>
            </div>
            <div className={classes.sideButtonNavRight}>
                    <Link href={getRightNavLink().url}>
                        <a onClick={() => onSideNavButtonClickHandler("right")}>
                            <SideNavButton direction={ButtonNavDirections.right} label={getRightNavLink().label} />
                        </a>
                    </Link>
            </div>
        </>
    )
}

export default SideNavigation;