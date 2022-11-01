import Image from 'next/image';
import PageLayout from './PageLayout';
import classes from './AboutMeSection.module.css';
const AboutMeSection = () =>{
    return(
        <PageLayout title='About Me' description='My career history '>
            <section className={classes.container}>
                <div className={classes.photoContainer}>
                    <Image src={'/images/foto_whatsapp.jpeg'} 
                    alt={'My photo'} layout="responsive" width={420} height={421}/>
                </div>
                <div className={classes.textContent} lang="en">
                    <h3 className={classes.title}>About Me</h3>

                    <p>In 2006, I got my Degree in Electronics 
                        and Software Engineering, for this, I developed a new system 
                        as a final work for Building Automation:   
                        <a rel="noreferrer" target='_blank' href='https://www.linuxjournal.com/article/7258'> Article of my final work at Linux Journal</a>. </p>
                    <p>This system encompassed:</p>
                        <ul>
                            <li>Java Web interfaces</li>
                            <li>C++ interface in QT Designer</li>
                            <li>Real Time Operating System and Process Management developed in C language</li>
                            <li>Real Time RS485 (an industrial network standard) driver developed in C language</li>
                            <li>Electronic hardware modules for Signal Acquisition and Equipment Control</li>
                        </ul>  
                        
                    <p>I successfully implemented my creation in two Buildings in my mother country Paraguay, it was amazing.</p>
                    <p>In 2007, I started to work as a Product Manager for a big multinational Company whose name is Millicom <a rel="noreferrer" target={'_blank'} href={'https://www.millicom.com/'}>Millicom Home Page</a>.</p>
                    <p>At Millicom, I managed many big transactional platforms, many of them with revenues around 45 millon dollars per month and huge TPM (Transactions Per Minute).</p>
                    <p>I successfully created and launched many services for many Markets around the world, for one of them I was nominated for a Global Innovation Award in Sweden in 2011.</p>
                    <p>In 2020, I started to develop applications with Typescript, React and Next for one Client in Paraguay.</p>
                    <p>Currently I have some live commercial projects with this Stack and keep improving current services and developing new ones.</p>
                </div>
                
            </section>
        </PageLayout>
    )
}

export default AboutMeSection;