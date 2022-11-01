import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';

import IconButton from '../Components/IconButton';
import classes from './SocialContainer.module.css';

const SocialContainer = () =>{
    return(
        <div className={classes.container}>
            <IconButton icon={<FaEnvelope className={classes.icon} />} />
            <IconButton icon={<FaPhone className={classes.icon} />} />
            <IconButton icon={<FaGithub className={classes.icon} />} />
        
        </div>
    )
}

export default SocialContainer;