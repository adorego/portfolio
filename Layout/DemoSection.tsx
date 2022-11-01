import { ReactNode, useRef, useState } from "react";

import AppDemo from "../Components/AppDemo";
import BasicCard from "../Components/BasicCard";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import MiniCardKey from "../Components/MiniCardKey";
import PageLayout from "./PageLayout";
import PortalContainer from "./PortalContainer";
import classes from './DemoSection.module.css';

export type DemoModel = {
    demoId:string;
    title:string;
    description:string;
    stack:string[];
    features:string[];
    video:string;
    gitUrl:string;
}

export interface DemoSectionProps{
    demosList:Array<DemoModel>;
}
const DemoSection = (props:DemoSectionProps) =>{

    const appDemoRef = useRef<ReactNode>(null);
    const [showPortal,setShowPortal] = useState<boolean>(false);
    
    const onClosePortalHandler = () =>{
        setShowPortal(false);
    }
    
    const onPlayDemoCardHandler = (demoId:string) =>{
        // console.log('projectId:', projectId);
        const demo = props.demosList.filter((item) => item.demoId === demoId)
        appDemoRef.current = <AppDemo 
        videoToShow={demo[0].video}
        onCloseHandler={onClosePortalHandler} />
        setShowPortal(true);

    }
    return(
        <PageLayout title='Demos' description='My Demos List '>
            {showPortal && <PortalContainer>
                {appDemoRef.current}
            </PortalContainer>}
            <section className={classes.container}>
                <div className={classes.photoContainer}>
                    <Image className={classes.sectionPhoto} src={'/images/projects_image.jpeg'} 
                    alt={'My photo'} priority={true} layout="responsive" width={2400} height={1800}/>
                </div>
                <div className={classes.demosContent}>
                    <h3 className={classes.demosTitle}>Demos</h3>
                    <div className={classes.demosListContainer}>
                        {props.demosList.map(
                            (demo, index) => {
                                return(
                                    <BasicCard key={index} 
                                    identificationId={demo.demoId}
                                    onPlayHandler={onPlayDemoCardHandler}
                                    additionalStyle={{width:"220px",height:"auto", minWidth:"220px", 
                                    minHeight:"250px",position:"relative"}}>
                                        <h5 className={classes.cardTitle}>{demo.title}</h5>
                                        <h6 className={classes.cardDescription}>{demo.description}</h6>
                                        <hr />
                                        <div className={classes.urlSection}>
                                            <a className={classes.cardUrl}
                                            target={'_blank'} 
                                            rel={"noreferrer"} 
                                            href={demo.gitUrl}
                                            ><FaGithub></FaGithub>Source Code</a>
                                            
                                            
                                        </div>
                                        <hr />
                                        <div className={classes.techListContainer}>
                                            {demo.stack.map(
                                                (techLabel, index) => <MiniCardKey key={index} label={techLabel} />
                                            )}
                                        </div>
                                        <div className={classes.techListContainer}>
                                            {demo.features.map(
                                                (featureLabel, index) => <MiniCardKey key={index} label={featureLabel} />
                                            )}
                                        </div>
                                    
                                    
                                    </BasicCard>
                                )
                            }
                        )}
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default DemoSection;