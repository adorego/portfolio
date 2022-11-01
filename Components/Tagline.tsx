import Button from "./Button";
import classes from "./Tagline.module.css";
import {motion} from 'framer-motion';

const Tagline = () =>{
    const variants = {
        visible:{opacity:1},
        hidden:{opacity:0},
    }
    return(
        <div className={classes.container}>
            <motion.h5 
                initial="hidden" 
                animate="visible" 
                transition={{duration:4}} 
                variants={variants}
            >
                Hi, my name is
            </motion.h5>
            <motion.h1 
            initial="hidden" 
            animate="visible" 
            variants={variants}
            transition={{duration:4, delay:1}}>
                Andrés Do Rego Barros
            </motion.h1>
            <motion.h6 
            initial="hidden" 
            animate="visible" 
            variants={variants}
            transition={{duration:4, delay:2}}>
                I am a Software Engineer specialized in Web Development 
                with ReactJS and NextJS with Typescript.
            </motion.h6>
            <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={variants} 
            transition={{duration:4, delay:2}}
            className={classes.buttonContainer}>
                <Button label="Contact Me"
                    animated={false}
                    isAvailable={true}
                    additionalStyle={{backgroundColor:"var(--secondary-color)", 
                    width:"160px", height:"60px", 
                    border:"2px solid var(--primary-color)",
                    fontWeight:"bold",
                    margin:"0px 0px 0px 0px", color:"var(--primary-color)"}}>

                </Button>
            </motion.div>
        </div>
        
    )
}

export default Tagline;