import { FC, ReactNode, useState } from "react";

import classes from './BasicCard.module.css'

export interface BasicCardProps{
    children:ReactNode;
    identificationId:string;
    additionalStyle?:{};
    showPlayOnHover?:boolean;
    onPlayHandler:(id:string) => void;
}
const BasicCard:FC<BasicCardProps> = ({children, ...props}) => {
    
    const [playButtonShow, setPlayButtonShow] = useState<boolean>(false);
    
    const applyPlayClass = playButtonShow === true ? '' : classes.playButtonHidden;
    
    const onHoverHandler = () =>{
        setPlayButtonShow(true);
    }

    const onMouseLeave = () =>{
        setPlayButtonShow(false);
    }

    const onPlayHandler = () =>{
        props.onPlayHandler(props.identificationId)
    }
    return(
        <div 
        onMouseLeave={props.showPlayOnHover  ? onMouseLeave : () => undefined  }
        onMouseOver={props.showPlayOnHover ? onHoverHandler : () => undefined} 
            className={classes.box} 
            style={{...props.additionalStyle}}>
            {children}
           {props.showPlayOnHover && 
           <div className={`${classes.playButton} ${applyPlayClass}`}>
                <svg onClick={onPlayHandler} id="svgelem" className={classes.playCardTriangle}  width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,0 50,25 0,50" className={classes.playCardTriangle}  />
                </svg>
            </div>}
        </div>
    )
}

export default BasicCard;