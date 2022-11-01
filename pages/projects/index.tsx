import ProjectsSection from "../../Layout/ProjectsSection";
import classes from "./Projects.module.css";
import {ProjectsList as projects}  from './projectsList';
import PageLayout from '../../Layout/PageLayout';

const Projects = () =>{
    return(
        <ProjectsSection projects={projects} />
        // <PageLayout>
        // <section>
        //     <p>Projects Section </p>
        // </section>
        // </PageLayout>
    )
}

export default Projects;