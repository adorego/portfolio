import { FaArrowUp, FaGithub, FaGlobe } from 'react-icons/fa';
import { ReactNode, useRef, useState } from 'react';

import AppDemo from '../Components/AppDemo';
import BasicCard from '../Components/BasicCard';
import Image from 'next/image';
import KeyWordContainer from '../Components/KeyWordContainer';
import MiniCardKey from '../Components/MiniCardKey';
import PageLayout from './PageLayout';
import PlayButton from '../Components/PlayButton';
import PortalContainer from './PortalContainer';
import classes from './ProjectsSection.module.css';

export type ProjectModel = {
    idProject:string
    name:string;
    image:{url:string, width:string, height:string};
    video:string;
    description:string;
    url:string;
    gitUrl:string;
    techStack:string[];
    features:string[];
}

export interface ProjectsSectionProps{
    projects:Array<ProjectModel>;
}
const ProjectsSection = (props:ProjectsSectionProps) =>{
    const appDemoRef = useRef<ReactNode>(null);
    const [showPortal,setShowPortal] = useState<boolean>(false);
    
    const onClosePortalHandler = () =>{
        setShowPortal(false);
    }
    const onPlayProjectCardHandler = (projectId:string) =>{
        console.log('projectId:', projectId);
        const project = props.projects.filter((item) => item.idProject === projectId)
        appDemoRef.current = <AppDemo 
        videoToShow={project[0].video}
        onCloseHandler={onClosePortalHandler} />
        setShowPortal(true);

    }
    return(
        <PageLayout title='Projects' description='My commercial project list '>
            {showPortal && <PortalContainer>
                {appDemoRef.current}
            </PortalContainer>}
            <section className={classes.container}>
                {/* <div className={classes.photoContainer}>
                    <Image className={classes.sectionPhoto} src={'/images/projects_image.jpeg'} 
                    alt={'My photo'} priority={true} layout="responsive" width={2400} height={1800}/>
                </div> */}
                <div className={classes.projectsContent}>
                    <h3 className={classes.projectsTitle}>Projects</h3>
                    <div className={classes.projectsList}>
                        
                        {props.projects.map(
                            (project:ProjectModel, index) =>{
                                // console.log('project:', project);
                                return(
                                    <BasicCard 
                                    key={index}
                                    additionalStyle={{width:"220px",height:"auto", minWidth:"220px", 
                                    minHeight:"250px",position:"relative"}}>
                                        <div className={classes.cardImageContainer}>
                                            <Image className={classes.cardImage} src={project.image.url} layout="fill" width={352} height={525} alt="" />
                                        </div>
                                        <p className={classes.cardProjectDescription}>{project.description}</p>
                                        <hr />
                                        <PlayButton 
                                        identificationId={project.idProject}
                                        onClickHandler={onPlayProjectCardHandler}
                                        containerStyle={{position:"static", top:"-35px", left:"170px", margin:"auto"}} />
                                        <hr />
                                        <div className={classes.linkContainer}>
                                                <FaGithub className={classes.icon} />
                                                <a className={classes.cardUrl}
                                                target={'_blank'} 
                                                rel={"noreferrer"} 
                                                href={project.gitUrl}>Source Code</a>
                                        </div>
                                        <hr /> 
                                        <div className={classes.linkContainer}>
                                                <FaGlobe className={classes.icon} />
                                                <a 
                                                id='urlId' 
                                                target={'_blank'} 
                                                rel={"noreferrer"} 
                                                className={classes.cardUrl} 
                                                href={project.url}>Service URL</a>
                                        </div>
                                            
                                        
                                        <hr />
                                        <div className={classes.techListContainer}>
                                            {project.techStack.map(
                                                (techLabel, index) => <MiniCardKey key={index} label={techLabel} />
                                            )}
                                        </div>
                                        <hr />
                                        <div className={classes.techListContainer}>
                                            {project.features.map(
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

export default ProjectsSection;