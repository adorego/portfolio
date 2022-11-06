
export type ExperienceModel = {
    companyName:string;
    url:string;
    platformUrls:{description:string, url:string}[];
    country:string;
    roles:string[];
    years:string;
    description:string;
    tasks:string[]
}
export const ExperiencesData:Array<ExperienceModel> = [
    {
        companyName:'LoyaltyAPP S.A.',
        url:'https://www.loyaltyapp.com.py',
        platformUrls:[
            {description:'This is a Client Service prototype personalized for his brand',
            url:'https://loyaltyapp.com.py/ucom'
            }
        ],
        country:'Paraguay',
        roles:[
            'UX/UI Designer',
            'Business Analyst',
            'ReactJS and NextJS Developer',
            'CEO'
        ],
        years:'Feb 2020-Present',
        description:`This is a startup company I founded with two Colleagues 
        in Paraguay. The company sells licenses of a Loyalty and Sales Solution I developed.`,
        tasks:[
            'Analyze and propose a UX solution in Figma for the Software',
            'Prototype UIs and Customer Journey',
            'Develop the Web UI with NextJS and React',
            'Test the Software',
            'Present the solution to the Clients'

        ]
    },
    {
        companyName:'Japanese Bank in Paraguay',
        url:'www.fpj.com.py',
        platformUrls:[
            {
                description:'This is an e-commerce multi-market solution',
                url:'https://www.yasui.com.py'
            },
            {
                description:'This is a travel platform solution',
                url:'https://www.nosvamoos.com/'
            }
        ],
        country:'Paraguay',
        roles:[
            'Technical Leader',
            'Business Analyst',
            'Digital Transformation Director'
            
        ],
        years:'2018-2020',
        description:`This is a Japanese Bank in Paraguay, founded by many japaneses migrants.`,
        tasks:[
            'Analyze trends and propose to Board members, market disruption solutions',
            'Design Customer Journey for every solution',
            'Lead agile technical team of Software Development',
            

        ]
    },
    {
        companyName:'APVAS, Miami',
        url:'http://apvas.com/',
        platformUrls:[
            {
                description:'A Telecom Platform that delivers targeted offers',
                url:'http://apvas.com/'
            }
        ],
        country:'Miami, USA',
        roles:[
            'Technical Consultant',
            'Product Developer Manager',
            'Head of Products'
            
        ],
        years:'2013-2017',
        description:`This is a Telecom VAS Provider based in Miami.`,
        tasks:[
            'Analyze trends and propose to Board members, market disruption solutions',
            'Design Customer Journey for every solution',
            'Lead agile technical team of Software Development',
            'Present solutions to Clients in different countries like USA, El Salvador, Haiti, Bolivia, Colombia, others',
            'Commercial results follow up'
            

        ]
    },
    {
        companyName:'Millicom International',
        url:'https://www.millicom.com/',
        platformUrls:[
            
        ],
        country:'Miami, USA',
        roles:[
            'Global Communication Product Developer Manager',
            'Regional Program Manager',
            
            
        ],
        years:'2011-2013',
        description:`This is a Telecom Provider with 14 operations at that time.`,
        tasks:[
            'Analyze trends and propose to Communication Chief, innovative services for different countries ',
            'Design Customer Journey for every solution',
            'Lead agile technical team of Software Development',
            'Commercial results follow up'
            

        ]
    },
    {
        companyName:'Tigo Paraguay',
        url:'https://www.tigo.com.py/',
        platformUrls:[
            
        ],
        country:'Paraguay',
        roles:[
            'Product Manager',
            'Team Leader',
            
            
        ],
        years:'2007-2010',
        description:`This is Millicom's Operation for Paraguay.`,
        tasks:[
            'Manage telecom platform from technical and commercial perspective',
            'Specify and design new features for all ready existing platforms ',
            'Specify, design, elaborate revenue and transactions forecast for new services',
            'Commercial results follow up'
            

        ]
    },
    {
        companyName:'Concept Engineering S.R.L.',
        url:'',
        platformUrls:[
            {
                description:'I developed the first Web CAR Tracking System, in Java, C++ ',
                url:''
            },
            {
                description:'I developed one of the first Multi-Equipment Building Automation System',
                url:'https://www.linuxjournal.com/article/7258'
            }
        ],
        country:'Paraguay',
        roles:[
            'Software Developer',
            
            
            
        ],
        years:'2004-2007',
        description:`This is a Company I founded with three Colleges.`,
        tasks:[
            'Develop Web Systems',
            'Project Management'
        ]
    },
    {
        companyName:'CONACYT PARAGUAY',
        url:'https://www.conacyt.gov.py/',
        platformUrls:[
            
        ],
        country:'Paraguay',
        roles:[
            'TIC Director',
            
            
            
        ],
        years:'2003-2007',
        description:`This is the Paraguayan Science and Technology Council.`,
        tasks:[
            'Plan and specify TI infrastructure',
            'Develop web site',
            'Develop internal software',
            'Project Management'
            

        ]
    }
]