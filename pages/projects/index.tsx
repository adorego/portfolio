import PageLayout from '../../Layout/PageLayout';
import ProjectsSection from "../../Layout/ProjectsSection";
import classes from "./Projects.module.css";
import {ProjectsList as projects}  from '../../data/projectsList';

const Projects = () =>{
    return(
        <ProjectsSection projects={projects} />
       
    )
}

export default Projects;