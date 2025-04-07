import netfliximg from "../src/assets/images/dcl-650-qGUnC07RMIQ-unsplash.jpg"
import amazonimg from "../src/assets/images/abid-shah-cxAV7aUesIQ-unsplash.jpg"
import portfolioimg from "../src/assets/guru.jpg"
import QandA from "../src/assets/images/image.png"
import careerConnector from "../src/assets/images/Screenshot 2025-04-06 142737.png"
import blogApp from "../src/assets/image.png"



const logotext = "RUTH";
const meta = {
    title: "Ruth Yeshitila",
    description: "I’m Ruth Yeshitila SWE student at AAU_ Full stack devloper",
}

const introdata = {
    title: "I’m Ruth Yeshitla",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Software engineering student and fullStack dev also mobile dev  with a strong foundation in programming and technology",
    your_img_url: portfolioimg,
};

const dataabout = {
    title: "About me mySELF",
    aboutme: "  Software engineering student with a strong foundation in programming and technology Experienced in leading initiatives such as organizing the Girls AI Club at Addis Ababa Institute of Technology and serving as a class representative. Skilled in web development, with proficiency in Python, Java, and database management. Passionate about creating innovative digital solutions and enhancing user experiences. Committed to continuous learning and eager to contribute to impactful projects. Aspiring to become a full-stack developer and establish a tech startup focused on improving accessibility and quality of life forunderserved communities. "
};

const worktimeline = [{
        jobtitle: "lecture at GDG club",
        where: "AAU, AAIT",
        date: "2025",
    },
    {
        jobtitle: "student @ AAU ",
        where: "AAU",
        date: "2023",
    },
    {
        jobtitle: "student @ evandagi acadamy ",
        where: "EVANDADI TECH ",
        date: "2024",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Java",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "flutter",
        value: 85,
    },
    {   name: "kotlin",
        value: 85,
    },
    {   name: "DSA",
        value: 85,
    },
];

const services = [{
        title: "web  application ",
        description: "me with my team we do alof web applications the most known and loved one is the career connector application which is mini linkedIn and it is easy to use ",
    },
    {
        title: "Mobile Apps",
        description: "i do amazing mobile apps which impressed everyone in my envronment ",
    },
    {
        title: "volutenree",
        description: "Developed and delivered digital literacy training materials for underserved Developed and delivered digital literacy training materials for underserved communities, enhancing accessibility to essential technology skills Worked with the outreach team to facilitate workshops that empowered individuals with foundational digital knowledge."                 
    },
    {
        title:"side projects ",
        description:"Partnered with other students to develop a fully functional e-banking system receiving positive feedback for its user-friendly interface and efficient design.Created a comprehensive database design for a delivery company, ensuring optimized data"
    }
]

const dataportfolio = 
[
    {
    "img": netfliximg,
    "description": "Netflix Clone - A responsive streaming platform replica with movie browsing, categories, and trailer playback functionality. Built with React, Firebase authentication, and TMDB API integration.",
    "link": "https://netflix-clone-project-udjz.vercel.app/"
  },

  {
    "img":amazonimg,
    "description": "Amazon Clone - E-commerce platform featuring product listings, shopping cart, and user authentication. ",
    "link": "https://amazon-frontend-fawn.vercel.app/"
  },
    {
        img: QandA,
        description: "A full-stack community forum where users can post questions, share answers, and engage in discussions. ",
        link: "https://forum-of-evangadi-bootcamp.vercel.app/",
    },
    {
        img:careerConnector ,
        description: "CareerConnect is a team-built application designed to bridge the gap between job seekers and employers.",
        link: "https://career-connector-system-2024-25-l557.vercel.app/",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433",
        description: "A collection of interactive web apps built with vanilla JavaScript.These projects demonstrate core concepts like DOM manipulation, event handling",
        link: "https://github.com/ruye19/Javascript-basic-projects",
    },
    {
        img: blogApp,
        description: "A blogging platform where users can create, edit, and delete posts. It features user authentication, post categorization",
        link: "https://github.com/ruye19/Blog-application-",
    },
  
];

const contactConfig = {
    YOUR_EMAIL: "ruthye64@gmail.com",
    YOUR_FONE: "(251) 901 851 873",
    description:"hit me up!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_j844ln4",
    YOUR_TEMPLATE_ID: "template_hwaj71u",
    YOUR_USER_ID: "sfvQotFiheJ3OZ5wP",
};

const socialprofils = {
    github: "https://github.com/ruye19",
    facebook: "https://www.instagram.com/ruye124/",
    linkedin: "https://www.linkedin.com/in/ruth-yeshitila-24436534a/",
    twitter: "https://x.com/yeshitila1340",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};