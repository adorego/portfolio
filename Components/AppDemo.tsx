import { FaCircleNotch, FaRegTimesCircle, FaStopCircle } from 'react-icons/fa';

import Image from 'next/image';
import classes from './AppDemo.module.css';
import { useState } from 'react';

type AppDemoProps = {
    videoToShow:string;
    onCloseHandler:() => void,
}
const AppDemo = (props:AppDemoProps) =>{
    
    
    return(
        <div className={classes.container}>
            <div className={classes.closeLinkContainer}>
                {/* <a className={classes.closeLink} onClick={props.onCloseHandler}>X</a> */}
                <FaRegTimesCircle className={classes.closeLink} onClick={props.onCloseHandler} />
            </div>
            <video width={320} height={300} autoPlay controls >
                <source src={props.videoToShow} type="video/mp4" />
            </video>
        </div>
    )
}

export default AppDemo;