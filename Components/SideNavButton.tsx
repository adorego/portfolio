import Image from 'next/image';
import classes from "./SideNavButton.module.css";
import { motion } from 'framer-motion';
export enum ButtonNavDirections{
    left = 1,
    right
}
export interface SideNavButtonProps{
    direction:ButtonNavDirections;
    label:string;
}
const SideNavButton = (props:SideNavButtonProps) =>{
    const variants = {
        visible:{opacity:1},
        hidden:{opacity:0},
        smallScale:{opacity:0, scale:0.8},
        bigScale:{opacity:1, scale:1.2}
    }

    if(props.direction === ButtonNavDirections.left){
        return(
            <motion.div 
            initial="smallScale" animate="bigScale" 
            variants={variants} transition={{duration:6, delay:0,repeatType:"reverse", repeat:Infinity}}
            className={classes.containerButtonNav}>
                <Image 
                src={'/images/double-arrow-left-icon.svg'}
                alt="Left Navigation Button"
                layout='responsive'
                width={60}
                height={60} />
                <p 
                className={classes.labelClass}>{props.label}
                </p>
            </motion.div>

        )
    }else{
        return(
            <motion.div 
            initial="smallScale" animate="bigScale" 
            variants={variants} transition={{duration:6, delay:0,repeatType:"reverse", repeat:Infinity}}
            className={classes.containerButtonNav}>
                <Image 
                src={'/images/double-arrow-right-icon.svg'}
                alt="Right Navigation Button" 
                layout='responsive'
                width={20}
                height={20}/>
                <p 
                className={classes.labelClass}>{props.label}</p>
            </motion.div>

        )
    }
    
}

export default SideNavButton;