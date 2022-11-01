import BasicCard from '../Components/BasicCard'
import Button from '../Components/Button';
import Image from 'next/image';
import classes from './TechList.module.css';
const TechList = () =>{
    return(
        <>
            <h3 className={classes.title}>Tech Stack</h3>
            <div className={classes.container} >
                        <div className={classes.icon}>
                            <Image src={'/images/logo_react.png'} 
                            alt={'logo ReactJS'} layout={'responsive'}
                            width={1200} height={630}/>
                        </div>
                        <div className={classes.icon}>
                            <Image src={'/images/logo_nextjs.png'} 
                            alt={'logo NextJS'} layout={'responsive'}
                            width={629} height={629}/>
                        </div>
                        <div className={classes.icon}>
                            <Image src={'/images/logo_javascript.png'} 
                            alt={'logo Javascript'} layout={'responsive'}
                            width={2800} height={1750}/>
                        </div>
                        <div className={classes.icon}>
                            <Image src={'/images/logo_typescript.png'} 
                            alt={'logo React'} layout={'responsive'}
                            width={740} height={405}/>
                        </div>
                        <div className={classes.icon}>
                            <Image src={'/images/logo_html5.webp'} 
                            alt={'logo React'} layout={'responsive'}
                            width={1280} height={1280}/>
                        </div>
                        <div className={classes.icon}>
                            <Image className={classes.imageIcon} src={'/images/logo_CSS3.jpeg'} 
                            alt={'logo CSS3'} layout={'responsive'}
                            width={400} height={400}/>
                        </div>
                        <div className={classes.icon}>
                            <Image src={'/images/logo_nodejs.png'} 
                            alt={'logo NodeJS'} layout={'responsive'}
                            width={1280} height={783}/>
                        </div>
                        <div className={classes.icon}>
                            <Image src={'/images/logo_mongodb.png'} 
                            alt={'logo MongoDB'} layout={'responsive'}
                            width={360} height={360}/>
                        </div>
                
            </div>
        </>
    )
}

export default TechList;