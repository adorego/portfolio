import {ExperiencesData} from '../data/experience';
import TimeLineTab from '../Components/TimeLineTab';
import classes from './Experience.module.css';
const Experience = () =>{
    return(
        <section className={classes.container}>
            <h3 className={classes.experienceTitle}>Experience</h3>
            <TimeLineTab data={ExperiencesData} />       
        </section>
    )
}

export default Experience;