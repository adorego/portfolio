import {ProjectModel} from '../Layout/ProjectsSection';

export const ProjectsList:Array<ProjectModel> = [
    {
        idProject:'1',
        name:'LoyaltyAPP University',
        image:{url:'/images/loyaltyapp_logo.png', width:'1386', height:'1507'},
        description:'LoyaltyAPP is a SaaS Service for Loyalty and Sales.',
        url:'https://loyaltyapp.com.py/ucom',
        gitUrl:'https://github.com/adorego/loyalty-app-university.git',
        video:'/videos/loyaltyapp.mp4',
        techStack:['ReactJS', 'NextJS', 'MongoDB', 'reduxjs/toolkit','Next-Auth' ],
        features:['React Hooks','SSR', 'Serverless']
    },
    // {
    //     idProject:'2',
    //     name:'Asados Gourmet',
    //     image:{url:'/images/asados_gourmet_logo.png', width:'100', height:'78'},
    //     description:'Asados Gourmet is a SaaS Food e-Commerce Service.',
    //     url:'https://gourmet.com.py',
    //     video:'/videos/loyaltyapp.mp4',
    //     techStack:['ReactJS', 'NextJS', 'MongoDB' ],
    //     features:['React Hooks','SSR']
    // },
    {
        idProject:'3',
        name:'SmartHousePY',
        image:{url:'/images/smart_house_logo.png', width:'1386', height:'1507'},
        description:'Smart House is the FrontEnd of a IoT Solution to replace TV remote controls in a first phase',
        video:'/videos/smart-house.mp4',
        url:'https://smart-house-gold.vercel.app/',
        gitUrl:'https://github.com/adorego/smart-house.git',
        techStack:['ReactJS', 'NextJS', 'MongoDB' ],
        features:['React Hooks']
    },
    {
        idProject:'4',
        name:'Professional Portfolio',
        image:{url:'/images/logo.png', width:'1386', height:'1507'},
        description:'My professional Portfolio .',
        video:'/videos/loyaltyapp.mp4',
        url:'https://portfolio-31p0hzya4-adorego.vercel.app/',
        gitUrl:'https://github.com/adorego/portfolio.git',
        techStack:['ReactJS', 'NextJS', 'Motion Framer' ],
        features:['React Hooks']
    }
]