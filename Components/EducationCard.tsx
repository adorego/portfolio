import { CourseModel } from "../data/education"
import Image from "next/image"
import classes from "./EducationCard.module.css"

export interface EducationCardProps{
    data:CourseModel
}
const EducationCard = (props:EducationCardProps) =>{
    if(props.data.image){
        return(
            <div className={classes.container}>
                {/* <h6><span className={classes.titleLabel}>Degree:</span><span className={classes.titleContent}>{props.data.title}</span></h6> */}
                <div className={classes.cardContent}>
                        <h6><span className={classes.titleContent}>{props.data.title}</span></h6>
                        {props.data?.years && <p className={classes.years}><span className={classes.yearsLabel}>Years:</span><span className={classes.yearsContent}>{props.data.years}</span></p>}
                        <p>{props.data.description}</p>
                        <p><span className={classes.universityLabel}>University:</span><span className={classes.universityContent}>{props.data.university}</span></p>
                        <p><span className={classes.countryLabel}>Country:</span><span className={classes.countryContent}>{props.data.country}</span></p>
                </div>
                {props.data.image && <div className={classes.cardImage}>
                    <div className={classes.imageContainer}>
                        <Image className={classes.image} priority={true} src={props.data.image} alt={props.data.description}
                        layout="fill" /> 
                    </div>
                 </div>}
                
            </div>
        )
    }else{
        return(
            <div className={classes.containerBlock}>
                <h6><span className={classes.titleContent}>{props.data.title}</span></h6>
                {props.data?.years && <p className={classes.years}><span className={classes.yearsLabel}>Years:</span><span className={classes.yearsContent}>{props.data.years}</span></p>}
                <p>{props.data.description}</p>
                <p><span className={classes.universityLabel}>University:</span><span className={classes.universityContent}>{props.data.university}</span></p>
                <p><span className={classes.countryLabel}>Country:</span><span className={classes.countryContent}>{props.data.country}</span></p>
            </div>
        )
    }
    
}

export default EducationCard;