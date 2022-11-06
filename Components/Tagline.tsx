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
            className={classes.listContainer}
            initial="hidden" 
            animate="visible" 
            variants={variants}
            transition={{duration:4, delay:2}}>
                <ul>
                <li>15+ years of commercial experience in Software Engineering</li>
                <li>2+ years of commercial experience with React and NextJS</li>
                </ul>
            </motion.div>
            <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={variants} 
            transition={{duration:4, delay:2}}
            className={classes.buttonContainer}>
                <a className={classes.buttonLink} 
                   rel="noreferrer" target='_blank' 
                   href={'https://wa.me/+595981365300'} >
                 Contact Me
                </a>
            </motion.div>
        </div>
        
    )
}

export default Tagline;