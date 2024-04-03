import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    py,
    wp,
    acc,
    figma,
    aws,
    DD,
    BubbleWorld,
    Wergex,
    TBI,
    Ecell,
    FoodApp,
    YouTube,
    Spontent,
    whatsapp,
    twitter,
    instagram,
    G1, G2, G3, G4,
    architects,
    jindalfoams,
    aptusfasteners,
    rishabgoel,
    CokeStore,
    Noorulquran,
    threejs,
    github,
    nctrlogo
} from "../../constants/constants/assets";


const services = [
    {
        title: "Red Teamer",
        icon: 'https://skillicons.dev/icons?i=redhat',
    },
    {
        title: "Mobile App Developer",
        icon: 'https://skillicons.dev/icons?i=androidstudio',
    },
    {
        title: "Flutter Developer",
        icon: 'https://skillicons.dev/icons?i=flutter',
    },
    {
        title: "Web Developer",
        icon: 'https://skillicons.dev/icons?i=react',
    },
];

const experiences = [
    {
        title: "Pentester | Intern",
        company_name: "ReSecurity.",
        icon: 'https://pbs.twimg.com/profile_images/1587642653776039936/k_FYmMaw_400x400.png',
        iconBg: "#f0f0f0",
        date: "March 2024 - Present",
        points: [
            "Engage in a variety of penetration testing assessments including network (internal and external), web application, wireless, red team, and more.",
        ],
    },
    {
        title: "Bug Hunter",
        company_name: "Freelance",
        icon: 'https://www.svgrepo.com/show/473616/freelancer.svg',
        iconBg: "#f0f0f0",
        date: "April 2023 - present",
        points: [
            "Perform external, internal, physical, wireless, and web assessments on various companies",
            "Utilize platforms and tools such as Kali Linux, Metasploit Framework, Burp Suite Pro, and Cobalt Strike.",
            "Interact with clients on high and technical levels to discuss findings and resolutions."
        ],
    },
    {
        title: "Mobile Developer | Mobile Security consultant ",
        company_name: "Nile Center For Technology Research.",
        icon: 'https://media.licdn.com/dms/image/C4D0BAQFCh_oRgIgMYQ/company-logo_100_100/0/1631360515216/nctr_logo?e=1720051200&v=beta&t=n8eD7mjnslNQTfrRtnuk5tI4NDBDsS9OwoV8GSjRCps',
        iconBg: "#f0f0f0",
        date: "Oct 2022 - Oct 2023",
        points: [
            "Developed and maintained cross-platform mobile applications using the Flutter framework, ensuring compatibility and consistency across iOS and Android platforms.",
            "Collaborated closely with designers to translate UI/UX designs into smooth animations and pixel-perfect interfaces.",
            "Integrated mobile apps with backend services and APIs, working alongside backend developers to ensure seamless functionality.",
            "Optimized app performance and responsiveness across various devices and screen sizes, enhancing user experience.",
            "Wrote clean, maintainable code following coding standards and best practices, facilitating future maintenance and updates."
        ],
    },
    {
        title: "Co-Founder & CEO",
        company_name: "Matrix.",
        icon: Spontent,
        iconBg: "#f0f0f0",
        date: "March 2022 - April 2023",
        points: [
            "Develop and communicate the vision, mission, and strategy for Matrix, and ensure all activities align with the company's goals.",
            "Build and maintain relationships with key stakeholders, including investors, and industry leaders.",
            "Foster a culture of creativity and innovation, and identify opportunities to stay ahead of industry trends and technologies.",
        ],
    },
    {
        title: "Teaching Assistent",
        company_name: "Sudan University Of Science and Technology",
        icon: "https://media.licdn.com/dms/image/C4E0BAQHGrX1AWeWgGg/company-logo_100_100/0/1631343761407?e=1720051200&v=beta&t=C4It0E2pu2LKGebXk7Py1cpvCOROcOjaPq16CnKAs5A",
        iconBg: "#f0f0f0",
        date: "March 2022 - Apr 2023",
        points: [
            "Taught over 500 students per semester android native and cross platform development with best practices using clean code, SOLID principles, MVVM Architecture and Design Patterns.",
            "Taught over 70 students the OOP concepts Along with practical classes."
        ],
    },
    
    {
        title: "Mobile Developer",
        company_name: "Stunnternet Co Ltd.",
        icon: 'https://www.svgrepo.com/show/521206/placeholder.svg',
        iconBg: "#f0f0f0",
        date: "Oct 2018 - Jan 2022",
        points: [
            "Collaborated with backend developers to integrate mobile apps with backend services and APIs, ensuring seamless functionality and data flow.",
            "Implemented backend functionalities in mobile applications, optimizing performance and enhancing user experience.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to exploit a website as secure as our website, but Ayman proved me wrong.",
        name: "Basil Ahmed",
        designation: "Pentester",
        company: "DTS Solutions",
        image: "https://media.licdn.com/dms/image/D4D03AQGfrgCGHjDLlw/profile-displayphoto-shrink_800_800/0/1694092662822?e=1717632000&v=beta&t=-DONIVV3cRQ9u9cbtY7rY4gsgiz6rWiEipPENbj_Svs",
    },
    {
        testimonial:
            "After Ayman optimized our mobile application, our traffic increased by 50%. We can't thank him enough!",
        name: "Sidahmed faisal",
        designation: "Software Engineer",
        company: "NCTR",
        image: "https://media.licdn.com/dms/image/C4E03AQHCWlQUo5Wv4g/profile-displayphoto-shrink_800_800/0/1648894270399?e=1717632000&v=beta&t=Vv_jRoFdnpOOUVHq8BHNK82YNYfUNIxFAqBGSAowzwI",
    },
    {
        testimonial:
            "I've never met a Person who truly cares about their teams' success like Ayman does.",
        name: "Abubakar",
        designation: "pentester",
        company: "Hacker One",
        image: "https://media.licdn.com/dms/image/D5635AQHLG97wwwKvCw/profile-framedphoto-shrink_800_800/0/1691567111765?e=1712746800&v=beta&t=ZxBTEMi2lqIqg-D6XvGmEHBzkx0mOa-syhe1c8RPUR0",
    },
];

const projects = [
    {
        name: "Food Delivery App Clone",
        description:
            "A Semi-Functional React Native Zomato Clone App. Made using React Native, Redux, TailwindCss and SanityCMS",
        tags: [
            {
                name: "ReactNative",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "TailWind",
                color: "pink-text-gradient",
            },
            {
                name: "Sanity CMS",
                color: "blue-text-gradient",
            },
            {
                name: "MobileApp",
                color: "green-text-gradient",
            },
        ],
        image: FoodApp,
        source_code_link: "https://github.com/iamkingarsh/Food-Delivery-App-Clone",
    },
    {
        name: "Restaurant Billing App",
        description:
            "A Frontend Web application project that enables a restaurant to bill their customers and print the bill. Made using HTML, CSS & Vanilla JavaScript",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "Css",
                color: "green-text-gradient",
            },
            {
                name: "JavaSCript",
                color: "pink-text-gradient",
            },
            {
                name: "WebApp",
                color: "green-text-gradient",
            },
        ],
        image: CokeStore,
        source_code_link: "https://cokestoreapp.mohammedarshad.com",
    },
    
    {
        name: "M11 Architects",
        description:
            "",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
        ],
        image: architects,
        source_code_link: "https://m11architects.com/",
    },
    // {
    //     name: "BubbleWorld",
    //     description:
    //         "",
    //     tags: [
    //         // {
    //         //     name: "nextjs",
    //         //     color: "blue-text-gradient",
    //         // },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
    {
        name: "Noor-ul-Quran",
        description:
            "",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
        ],
        image: Noorulquran,
        source_code_link: "https://noor-ul-quran.in/",
    },
    {
        name: "Jindal Foams",
        description:
            "",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
        ],
        image: jindalfoams,
        source_code_link: "https://jindalfoam.in/",
    },
    {
        name: "Aptusfasteners",
        description:
            "",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
        ],
        image: aptusfasteners,
        source_code_link: "https://aptusfasteners.in/",
    },
    // {
    //     name: "Jabalexim",
    //     description:
    //         "",
    //     tags: [
    //         // {
    //         //     name: "nextjs",
    //         //     color: "blue-text-gradient",
    //         // },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
    {
        name: "Rishabh Goel",
        description:
            "",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
        ],
        image: rishabgoel,
        source_code_link: "https://rishabhgoel.in/",
    },

];

const Gallery = [
    {
        image: G1,
    },
    {
        image: G2,
    },
    {
        image: G3,
    },
    {
        image: G4,
    },

];

const socialIcons = [
    {
        name: "Youtube",
        icon: YouTube,
        socialLink: 'https://youtube.com/MohammedArshad_'
    },
    {
        name: "GitHub",
        icon: github,
        socialLink: 'https://github.com/iamkingarsh'
    },
    {
        name: "Instagram",
        icon: instagram,
        socialLink: 'https://instagram.com/iamkingarsh786'
    },
    {
        name: "Twitter",
        icon: twitter,
        socialLink: 'https://twitter.com/Arshad_Ali789'
    },
    {
        name: "WhatsApp",
        icon: whatsapp,
        socialLink: 'https://wa.me/+917013396624'
    },
]

export { services,  experiences, testimonials, projects, Gallery, socialIcons };
