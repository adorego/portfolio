
export type CourseModel = {
    title:string,
    description:string,
    university:string,
    country:string,
    degree:string,
    years?:string,
    image?:string;
}
export type EducationModel = {
    tag:string;
    data:Array<CourseModel>;
}

export const EducationData:Array<EducationModel> = [
    {
        tag:"master",
        data:[
            {
                title:"Master in Business Direction",
                description:'This is a one and a half year Master Degree in Business Direction ',
                university:"Polytechnic of Madrid",
                country:"Spain",
                degree:"Master in Business Administration",
                years:"2009-2010"
                
            }
        ]
    },
    {
        tag:"undergraduate",
        data:[
            {
                title:"Electronic and Software Engineer",
                description:'This is a two year Specialization in Software and Hardware Engineering',
                university:"Catholic University of Asunción",
                country:"Paraguay",
                degree:"Electronic and Software Engineer",
                years:"2001-2003"
            },
            {
                title:"Electronic and Software Engineering Undergraduate",
                description:'This is a five years Engineering in Software and Hardware Development Program',
                university:"Catholic University of Asunción",
                country:"Paraguay",
                degree:"Electronic and Software Development Graduate",
                years:"1995-2000"
            }

        ]
        
    },
    {
        tag:"web specialization",
        data:[
            {
                title:"Responsive Web Design",
                description:'This is a 300 hours specialization course',
                university:"freeCodeCamp",
                country:"USA",
                degree:"Developer Certificate",
                image:"/images/education/Responsive_WebDesign.png"
            },
            {
                title:"Javascript Algorithms and Data Structure",
                description:'This is a 300 hours specialization course',
                university:"freeCodeCamp",
                country:"USA",
                degree:"Developer Certificate",
                image:"/images/education/Javascript_Algorithms_and_Data_Structures.png"
            },
            {
                title:"Object Oriented Design",
                description:'This is a 300 hours specialization course',
                university:"University of Alberta",
                country:"Canada",
                degree:"Developer Certificate",
                image:"/images/education/ObjectOrientedDesign.png"
            },
            {
                title:"Client Needs and Software Requirements",
                description:'This is a 300 hours specialization course',
                university:"University of Alberta",
                country:"Canada",
                degree:"Developer Certificate",
                image:"/images/education/Client_Needs_and_Software_Requirements.png"
            }
        ]
    }
]

