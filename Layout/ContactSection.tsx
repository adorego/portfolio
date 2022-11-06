import { FaEnvelope, FaGit, FaGithub, FaPhone } from 'react-icons/fa'

import BasicCard from '../Components/BasicCard';
import classes from './ContactSection.module.css'

const ContactSection = () =>{
    return(
        <section className={classes.container}>
           <h3 className={classes.contactTitle}>Contact</h3>
            <BasicCard additionalStyle={{width:"100%", maxWidth:"320px", margin:"auto"}}>
            <p><a rel="noreferrer" target='_blank' href={'https://wa.me/+595981365300'}><FaPhone />+595 981 365 300</a></p>
            <p><a rel="noreferrer" target='_blank' href={'mailto:adoregoel@gmail.com'}><FaEnvelope />adoregoel@gmail.com</a></p>
            <p><a rel="noreferrer" target='_blank' href={'https://github.com/adorego?tab=repositories'}><FaGithub />My GitHub Repos</a></p>
            </BasicCard>
        </section>
    )
}

export default ContactSection;