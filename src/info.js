import photoI from "./assets/image/yousef-mohseen.png"
import projschool from "./assets/image/school.jpg"
import projskiing from "./assets/image/skiing.jpg"
import projshoesstore from "./assets/image/shoes-store.jpg"
import projdashboard from "./assets/image/dashboard.jpg"
import projposts from "./assets/image/posts.png"


export const info = {
    fname: "Yousef",
    lname: "Mohseen",
    linkcv: "https://drive.usercontent.google.com/u/0/uc?id=1OL0fDe1P6P_z4xxsL3ALaCGhbPB9uiJl&export=download",
    linkgithub:"https://github.com/yousefmohseen",
    photo:photoI,
    desc:"I'm Yousef Mohseen, a creative front-end developer. I've been helping businesses solve their problems through my design for over a year.",
    about: {
        desc: "A Front-end Developer with Over One Year Experience  \
        	Graduate of the Higher Institute of Computer in Damascus - Computer Engineering, \
        	6-month web development trainee in Arab Academy for Information Development, \
        	and 6-month Front-end development trainee in vica web solutions.",
        prog: [
            {
                name: "Html5",
                range: 95,
            },
            {
                name: "Css3",
                range: 95,
            },
            {
                name: "Java script",
                range: 90,
            },
            {
                name: "React",
                range: 90,
            },
        ]
    },
    education: [
        {
            add: "Frontend Developer",
            desc: "A front-end web developer with over 6-month year experience and proficient in the React.JS Framework, \
            	Bootstrap library , vanlilla JavaScript , html and css trainee in vica web solutions.",
        },
        {
            add: "Web Developer",
            desc: "A Web web developer with over 6-month experience and proficient in the PHP , MySQL , \
            	Bootstrap library , vanlilla JavaScript , html and css trainee in Arab Academy for Information Development",
        },
        {
            add: "Computer Engineering",
            desc: "Graduate of the Higher Institute of Computer in Damascus - Computer Engineering",
        },
        {
            add: "experience Front-end",
            desc: "Experience in implementing any project in a smooth and clean code",
        },
    ],
    contact: {
        number: "+963956460817",
        email: "ymy85626@gmail.com",
        address: "Damascus,syria"
    },
    social: [
        {
            link: "https://api.whatsapp.com/send?phone=963956460817&text=Peace%20be%20upon%20you%20I%20need",
            iconclass: "fa-brands fa-whatsapp"
        },
        {
            link: "https://www.facebook.com/share/181FCCPD1P/",
            iconclass: "fa-brands fa-facebook"
        },
        {
            link: "https://www.linkedin.com/in/yousef-mohseen",
            iconclass: "fa-brands fa-linkedin"
        },
        {
            link: "https://t.me/YousefMohseen",
            iconclass: "fa-brands fa-telegram"
        },
        {
            link: "https://www.instagram.com/yousef.mo7seen/",
            iconclass: "fa-brands fa-instagram"
        },
    ],
    projects: [
        {
            id: 1,
            srcImg: projschool,
            add: "Educational Platform",
            desc: "A website specialized in education and displaying lessons, lectures, lecturers, and educational blogs. \
            	If you have a school, university, educational institution, or educational platform, do not hesitate to request a website.",
            basicLang: "Html-Css3-Vanilla javscript",
            framework:"none",
            libraries:"none",
            repoUrl:"https://github.com/yousefmohseen/school",
            demoUrl: "https://yousefmohseen.github.io/school/",
            date:"12-5-2024",
        },
        {
            id: 2,
            srcImg: projskiing,
            add: "Sports Platform",
            desc: "A website specialized in displaying the latest news and sports activities related to skiing sport. If you have a sports club and want to grow it faster, do not hesitate to request the website.",
            basicLang: "Html-Css3",
            framework:"none",
            libraries:"none",
            repoUrl:"https://github.com/yousefmohseen/skiing",
            demoUrl: "https://yousefmohseen.github.io/skiing/",
            date:"16-4-2024",
        },
		{
            id: 3,
            srcImg: projshoesstore,
            add: "Online Store",
            desc: "A website specializing in showcasing the latest shoe models for quick marketing and sales. \
            	If you have products you want to sell quickly, don't hesitate to request a quote from the website.",
            basicLang: "Html-Css3-Vanilla javscript",
            framework:"none",
            libraries:"none",
            repoUrl:"https://github.com/yousefmohseen/shoes-store",
            demoUrl: "https://yousefmohseen.github.io/shoes-store/",
            date:"20-6-2024",
        },
        {
            id: 4,
            srcImg: projposts,
            add: "Dashboard for Posts",
            desc: "A website specializing in adding, editing, and deleting your posts to databases through a simple and easy interactive control interface. Don't hesitate to request a quote from the website.",
            basicLang: "Html-Css3-Vanilla javscript",
            framework:"none",
            libraries:"none",
            repoUrl:"https://github.com/yousefmohseen/posts",
            demoUrl: "https://yousefmohseen.github.io/posts/",
            date:"13-7-2024",
        },
        {
            id: 5,
            srcImg: projdashboard,
            add: "Dashboard for Products",
            desc: "A website specializing in adding, modifying, and deleting products from databases through a simple and easy interactive control interface. If you're looking to manage your online store professionally, don't hesitate to request a quote from the website.",
            basicLang: "Html-Css3-react.js",
            framework:"react",
            libraries:"tailwindcss",
            repoUrl:"https://github.com/yousefmohseen/dashboard",
            demoUrl: "https://yousefmohseen.github.io/dashboard/",
            date:"2-9-2024",
        },
    ]
}