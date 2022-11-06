import { ExperienceModel } from "../data/experience";
import classes from './TimeLineTab.module.css';
import { useState } from "react";

export interface TimeLineTabProps{
    data:Array<ExperienceModel>;
}
const TimeLineTab = (props:TimeLineTabProps) =>{
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const onYearChangeHandler = (index:number) =>{
        setSelectedIndex(index);
    }
    return(
        <div className={classes.wrapperContainer}>
            <div className={classes.container}>
                <div className={classes.tabIndexContainer}>
                    {props.data.map(
                        (experience, index) =>{
                            return(
                                <div key={index} 
                                    className={index === selectedIndex ? `${classes.tabIndex} ${classes.selectedIndex}` : classes.tabIndex} 
                                    onClick={() => onYearChangeHandler(index)}>
                                    {experience.years}
                                </div>
                            )
                        }
                    )}
                </div>
                <div className={classes.contentTabContainer}>
                        <h6><span className={classes.companyLabel}>Company Name:</span><span className={classes.companyContent}>{props.data[selectedIndex].companyName}</span></h6>
                        <p className={classes.linkContainer}><a rel="noreferrer" target='_blank' href={props.data[selectedIndex].url}>Company Link</a> </p>
                        <p><span className={classes.countryLabel}> Country:</span><span className={classes.countryContent}>{props.data[selectedIndex].country}</span></p>
                        <p><span className={classes.descriptionLabel}> Description:</span><span className={classes.descriptionContent}>{props.data[selectedIndex].description}</span></p>
                        <p className={classes.listLabel}>Roles:</p>
                        <ul>
                            {props.data[selectedIndex].roles.map(
                                (rol, index) =>{
                                    return(
                                        <li key={index}>{rol}</li>
                                    )
                                }
                            )}
                        </ul>
                        <p className={classes.listLabel}>Tasks:</p>
                        <ul>
                            {props.data[selectedIndex].tasks.map(
                                (task, index) =>{
                                    return(
                                        <li key={index}>{task}</li>
                                    )
                                }
                            )}
                        </ul>
                        {props.data[selectedIndex].platformUrls.length > 0 &&
                            <>
                            <p className={classes.listLabel}>Software Created</p>
                            <ul>
                                {props.data[selectedIndex].platformUrls.map(
                                    (software, index) =>{
                                        return(
                                            <li key={index}>{software.description} <a href={software.url} rel="noreferrer" target='_blank'>Solution Link</a></li>
                                        )
                                    }
                                )}
                            </ul>
                            </>
                        }
                </div>
            </div>
      </div>
    )
}
export default TimeLineTab;