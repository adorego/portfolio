import { ReactNode } from "react";
import classes from './IconButton.module.css';

export interface IconButtonProps{
    icon:ReactNode;
}

const IconButton = (props:IconButtonProps) =>{
    return(
        <button className={classes.container}>
            {props.icon}
        </button>
    )
}

export default IconButton;