import EducationCard from "./EducationCard";
import { EducationModel } from "../data/education"
import classes from './EducationTab.module.css'
import { useState } from "react";

export interface EducationProps{
    data:Array<EducationModel>;
}
const EducationTab = (props:EducationProps) =>{
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    
    const onCategoryChangeHandler = (index:number) =>{
        setSelectedIndex(index);
    }
    return(
        <div className={classes.container}>
                <div className={classes.tabIndexContainer}>
                    {props.data.map(
                        (category, index) =>{
                            return(
                                <div key={index} 
                                    className={index === selectedIndex ? `${classes.tabIndex} ${classes.selectedIndex}` : classes.tabIndex} 
                                    onClick={() => onCategoryChangeHandler(index)}>
                                    {category.tag.toUpperCase()}
                                </div>
                            )
                        }
                    )}

                </div>
                <div className={classes.contentTabContainer}>
                    {props.data[selectedIndex].data.map(
                        (course, index) =>{
                            return(
                                <EducationCard key={index} data={course} />
                            )
                        }
                    )}
                </div>
        </div>
    )
}

export default EducationTab;