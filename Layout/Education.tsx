import { EducationData } from "../data/education"
import EducationTab from "../Components/EducationTab"
import classes from './Education.module.css'

const Education = () =>{
    return(
        <section className={classes.container}>
            <h3 className={classes.educationTitle}>Education</h3>
            <EducationTab data={EducationData} />   
        </section>
        
    )
}

export default Education;