import { ReactNode } from "react";
import classes from './KeyWordContainer.module.css';

export interface KeyWordContainerProps{
    children:ReactNode;
}
const KeyWordContainer = (props:KeyWordContainerProps) =>{
    return(
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default KeyWordContainer;