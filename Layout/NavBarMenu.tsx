import { useEffect, useState } from "react";

import {FaBars} from "react-icons/fa";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import SideNavigation from "../Components/SideNavigation";
import classes from './NavBarMenu.module.css';
import logo from '../public/images/logo.png';

export type NavLinkModel = {
    label:string;
    url:string;
}
//NavLinks Array
export const navLinks:Array<NavLinkModel> = [{label:'Home', url:'/'},
    {label:'About Me',url:'/about'},
    {label:'Projects',url:"/projects"}, 
    {label:'Demos',url:'/demos'}, 
    {label:'Coding Patterns', url:"/coding_patterns"}, 
    {label:'Blog', url:"/blog"},
    {label:'Education', url:"/education"}, 
    {label:'Contact', url:"/contact"}];
const NavBarMenu = () =>{
    const [display, setDisplay] = useState('') ;
    const [showSideBar, setShowSideBar] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(
        () => {
            // console.log('Running useEffect');
            window.innerWidth < 800 ? setDisplay('mobile') : setDisplay('desktop');
            const onResizeWindowEvent = () =>{
                const currentWidth = window.innerWidth;
                if(currentWidth >= 800){
                    setDisplay('desktop');
                }else{
                    setDisplay('mobile');
                }
            }
            window.addEventListener('resize', onResizeWindowEvent);
        },[]
    )

    const onClickBarsHandler = () =>{
        setShowSideBar(!showSideBar);
    }

    const onCloseSideBarHandler = () =>{
        setShowSideBar(false);
    }

    const onPageChangeHandler = (selectedPage:number) =>{
        setCurrentPage(selectedPage);
    }
    
    // console.log("display:", display);
    return(
        <>
        <Head>
                    <meta charSet="UTF-8" />
                    <meta name="keywords" content={'Javascript Developer,Typescript Developer, ReactJS Developer, NextJS Developer, Software Engineer'} />
                    <meta name="author" content="Andrés Do Rego Barros" />
                    <link rel="icon" href={'/images/logo.png'} />
                    <title>{'Andrés Do Rego Barros, ReactJS/NextJS Software Engineer'}</title>
                    <meta name="description" content={'I am a ReactJS/NextJS Software Engineer'} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:url" content={'https://www.andresdorego.dev'} key="ogurl" />
                    <meta property="og:image" itemProp="image" content={'https://www.andresdorego.dev/images/social_adorego-min.jpeg'} key="ogimage" />
                    <meta property="og:type" content="website" />
                    <meta property="og:updated_time" content="1440432930" />
                    <meta property="og:site_name" content={'I am a ReactJS/NextJS Software Engineer'} key="ogsitename" />
                    <meta property="og:title" content={'Andrés Do Rego Barros, ReactJS/NextJS Software Engineer'} key="ogtitle" />
                    <meta property="og:description" content={'I am a ReactJS/NextJS Software Engineer.'} key="ogdesc" />
        </Head>
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <Link href={"/"}>
                    <a href="#">
                        <Image 
                        className={classes.logo}
                        src={logo} alt="" 
                        layout={'fill'} 
                        priority={true}/>
                    </a>
                </Link>
            </div>
            <div className={classes.navBar}>
                {display === 'mobile' && <FaBars className={classes.bars} onClick={onClickBarsHandler} />}
                
                {(display === 'desktop' || showSideBar)  && <div className={classes.menu}>
                    {showSideBar && <a className={classes.closeSideBarLink} onClick={onCloseSideBarHandler}>X</a>}
                    
                    {navLinks.map(
                        (link:NavLinkModel, index) =>{
                            return(
                                <Link key={link.label} href={link.url}>
                                    <a className={index === currentPage ? classes.stateColor : ""}>{link.label}</a>
                                </Link>
                            )
                        }
                    )}
                    
                    
                </div>}
            </div>
            <div className={classes.sideNavigationButtons}>
                <SideNavigation onNavigationChange={onPageChangeHandler} />
            </div>
            
        </div>
        </>
    )
}

export default NavBarMenu;