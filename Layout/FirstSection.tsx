import Button from "../Components/Button";
import Tagline from "../Components/Tagline";
import TechList from "./TechList";
import classes from './FirstSection.module.css';
import {motion} from 'framer-motion';
import { useRef } from "react";

const FirstSection = () =>{
    
    return(
        <section className={classes.section}>
            <div className={classes.button}>
                <a className={classes.resumeLink}
                rel="noreferrer" target='_blank'
                href={'/docs/resume.pdf'}>
                    Resume
                </a>
                
            </div>
            
            <div className={classes.tagline}>
                <Tagline />
            </div>
            
        </section>
    )
}

export default FirstSection;