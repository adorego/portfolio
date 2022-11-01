import Button from "../Components/Button";
import Tagline from "../Components/Tagline";
import TechList from "./TechList";
import classes from './FirstSection.module.css';
import {motion} from 'framer-motion';

const FirstSection = () =>{
    
    
    return(
        <section className={classes.section}>
            <div className={classes.button}>
                <Button 
                isAvailable={true}
                label={"Resume"}
                animated={true}
                additionalStyle={{
                backgroundColor:"var(--primary-color)",
                border:"1px solid var(--primary-color)",
                color:"var(--text-on-primary-color)", width:"8rem", height:"41px"}} />
            </div>
            
            <div className={classes.tagline}>
                <Tagline />
            </div>
            {/* <div className={classes.techlist}>
                <TechList />
            </div> */}
        </section>
    )
}

export default FirstSection;