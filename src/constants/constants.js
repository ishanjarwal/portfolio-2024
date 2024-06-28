import { AxiosIcon, BehanceIcon, CSSIcon, CanvaIcon, CodepenIcon, DribbbleIcon, ExpressIcon, FigmaIcon, FreeCodeCampIcon, GFGIcon, GraphQLIcon, HTMLIcon, InstagramIcon, JSIcon, MongoIcon, NextIcon, NodeIcon, ReactIcon, ReduxIcon, SQLIcon, StackOverflowIcon, TailwindIcon, YoutubeIcon } from "@/icon_components/Icons";
import { FaGithub, FaInstagram, FaLink, FaRegQuestionCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { IoDiamondSharp } from "react-icons/io5";
import { GiBullseye } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";

export const socialLinks = [
    {
        name: "Github",
        img: "/social/github.png",
        icon: <FaGithub />,
        link: "https://www.github.com/ishanjarwal"
    },
    {
        name: "Instagram",
        img: "/social/instagram.png",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/ishanjarwal"
    },
    {
        name: "Facebook",
        img: "/social/facebook.png",
        icon: <SlSocialFacebook />,
        link: "https://www.facebook.com/profile.php?id=100082865800854"
    },
    {
        name: "LinkedIn",
        img: "/social/linkedin.png",
        icon: <PiLinkedinLogo />,
        link: "https://www.linkedin.com/in/ishan-jarwal-7a2356265/"
    },
    {
        name: "Twitter",
        img: "/social/twitter.png",
        icon: <FaXTwitter />,
        link: "https://x.com/ishanjarwal"
    },
]

export const navLinks = [
    {
        page: "",
        icon: <SiAboutdotme />,
        display: "about",
        link: '/'
    },
    {
        page: "skills",
        icon: <IoDiamondSharp />,
        display: "skills",
        link: '/skills'
    },
    {
        page: "projects",
        icon: <GiBullseye />,
        display: "projects",
        link: '/projects'
    },
    {
        page: "contact",
        icon: <FaLink />,
        display: "contact",
        link: '/contact'
    },
    {
        page: "faqs",
        icon: <FaRegQuestionCircle />,
        display: "faqs",
        link: '/faqs'
    },
]

export const skills = [
    {
        heading: "Front-End Development",
        bullets: [
            {
                technology: "HTML5",
                icon: <HTMLIcon />,
                color: "#E34F26"
            },
            {
                technology: "CSS3",
                icon: <CSSIcon />,
                color: "#1572B6"
            },
            {
                technology: "JavaScript",
                icon: <JSIcon />,
                color: "#F7DF1E"
            },
            {
                technology: "React",
                icon: <ReactIcon />,
                color: "#61DAFB"
            },
            {
                technology: "Next.js",
                icon: <NextIcon />,
                color: "#000000"
            },
            {
                technology: "Redux Toolkit",
                icon: <ReduxIcon />,
                color: "#764ABC"
            },
            {
                technology: "TailwindCSS",
                icon: <TailwindIcon />,
                color: "#06B6D4"
            }
        ]
    },
    {
        heading: "Back-End Development",
        bullets: [
            {
                technology: "Node.js",
                icon: <NodeIcon />,
                color: "#5FA04E"
            },
            {
                technology: "MongoDB",
                icon: <MongoIcon />,
                color: "#47A248"
            },
            {
                technology: "ExpressJS",
                icon: <ExpressIcon />,
                color: "#000000"
            },
            {
                technology: "Axios",
                icon: <AxiosIcon />,
                color: "#5A29E4"
            },
            {
                technology: "GraphQL",
                icon: <GraphQLIcon />,
                color: "#E10098"
            },
            {
                technology: "MySQL",
                icon: <SQLIcon />,
                color: "#4479A1"
            },
        ]
    },
    // {
    //     heading: "Full-Stack Development",
    //     bullets: [
    //         {
    //             technology: "MERN Stack",
    //             icon: null,
    //             color: null
    //         },
    //         {
    //             technology: "GraphQL",
    //             icon: null,
    //             color: null
    //         },
    //         {
    //             technology: "Serverless Architecture",
    //             icon: null,
    //             color: null
    //         }
    //     ]
    // },
    // {
    //     heading: "DevOps & Tools",
    //     bullets: [
    //         {
    //             technology: "Version Control",
    //             icon: null,
    //             color: null
    //         },
    //         {
    //             technology: "CI/CD",
    //             icon: null,
    //             color: null
    //         },
    //         {
    //             technology: "Containerization",
    //             icon: null,
    //             color: null
    //         },
    //         {
    //             technology: "Cloud Services",
    //             icon: null,
    //             color: null
    //         }
    //     ]
    // },
    {
        heading: "Design and Inspiration",
        bullets: [
            {
                technology: "Figma",
                icon: <FigmaIcon />,
                color: null
            },
            {
                technology: "Canva",
                icon: <CanvaIcon />,
                color: null
            },
            {
                technology: "Dribbble",
                icon: <DribbbleIcon />,
                color: "#EA4C89"
            },
            {
                technology: "Behance",
                icon: <BehanceIcon />,
                color: "#1769FF"
            },
            {
                technology: "Instagram",
                icon: <InstagramIcon />,
                color: "#E4405F"
            }
        ]
    },
    {
        heading: "Resources I use",
        bullets: [
            {
                technology: "Youtube",
                icon: <YoutubeIcon />,
                color: "#FF0000"
            },
            {
                technology: "StackOverflow",
                icon: <StackOverflowIcon />,
                color: "#F58025"
            },
            {
                technology: "Dribbble",
                icon: <DribbbleIcon />,
                color: "#EA4C89"
            },
            {
                technology: "Behance",
                icon: <BehanceIcon />,
                color: "#1769FF"
            },
            {
                technology: "CodePen",
                icon: <CodepenIcon />,
                color: "#000000"
            },
            {
                technology: "Geeks For Geeks",
                icon: <GFGIcon />,
                color: "#2F8D46"
            },
            {
                technology: "FreeCodeCamp.org",
                icon: <FreeCodeCampIcon />,
                color: "#0A0A23"
            }
        ]
    },
    {
        heading: "Soft Skills",
        bullets: [
            {
                technology: "Fluent Communication",
                icon: null,
                color: null
            },
            {
                technology: "Project Management",
                icon: null,
                color: null
            },
            {
                technology: "Continuous Learning",
                icon: null,
                color: null
            }
        ]
    }
];

export const projects = [
    {
        title: "Full Stack Ecommerce Platform with Admin Panel",
        description: "A comprehensive ecommerce platform featuring a user-friendly interface, integrated payment gateways, and a powerful admin panel for managing products, orders, and users.",
        technologies: [
            "ReactJS", "NodeJS", "Redux Toolkit", "HeadlessUI", "Express", "MongoDB", "Stripe", "Multer", "Express-Validator", "TailwindCSS", "FancyBoxUI", "SwiperJS", "Axios", "Bcrypt", "mongoose"
        ],
        thumbnails: [
            "ecommerce_laptop.png",
            "ecommerce_phone.png"
        ],
        images: [
            "ecommerce_1.png", "ecommerce_2.png", "ecommerce_3.png", "ecommerce_4.png", "ecommerce_5.png", "ecommerce_6.png", "ecommerce_7.png", "ecommerce_8.png", "ecommerce_9.png",
        ],
        highlights: [
            "Well managed state using Redux Toolkit",
            "Filter and Sorting Functionality",
            "Different prices for different variants and sizes",
            "size and quantity updating feature in cart and checkout",
            "User authentication with JWT Cookies",
            "Fully functionable Admin Dashboard for all CRUD operations",
            "Wishlist feature",
            "Multiple file uploads for products",
            "Import existing product feature",
            "Stripe payment integration",
        ],
        live: null,
        github: "github.com/ishanjarwal/mern-sneaker-store"
    },
    {
        title: "My Portfolio (2024 Version)",
        description: "A clean portfolio to showcase my skills, projects and to tell people about myself.",
        technologies: [
            "NextJS", "HeadlessUI", "TailwindCSS", "SwiperJS", "Axios", "Framer Motion"
        ],
        thumbnails: [
            "portfolio_laptop.png",
            "portfolio_phone.png"
        ],
        images: [
            "portfolio_1.png", "portfolio_2.png", "portfolio_3.png", "portfolio_4.png", "portfolio_5.png", "portfolio_6.png", "portfolio_7.png", "portfolio_8.png", "portfolio_9.png", "portfolio_10.png", "portfolio_11.png"
        ],
        live: "https://jarwal.vercel.app",
        github: "github.com/ishanjarwal/portfolio-2024"
    },
    {
        title: "Travel Booking Web App",
        description: "A travel booking platform allowing users to book Travel Packages. Features include user reviews, trip itenary, advanced search functionality etc.",
        technologies: [
            "NextJS", "NodeJS", "Express", "MongoDB", "Framer-motion", "TailwindCSS",
        ],
        thumbnails: [
            "travel_laptop.png", "travel_phone.png"
        ],
        images: [
            "travel_1.png", "travel_2.png", "travel_3.png", "travel_4.png", "travel_5.png", "travel_6.png", "travel_7.png", "travel_8.png", "travel_9.png", "travel_10.png", "travel_11.png", "travel_12.png",
        ],
        live: null,
        github: "github.com/ishanjarwal/tabclub",
    },
    {
        title: "Full Stack Blog Application",
        description: "A multi author, multi category full stack blog application to publish news, events etc.",
        technologies: [
            "ReactJS", "NodeJS", "Express", "MongoDB", "Multer", "Express-Validator", "TailwindCSS", "Axios", "Bcrypt", "mongoose"
        ],
        thumbnails: [
            "blog_laptop.png",
            "blog_phone.png"
        ],
        images: [
            "blog_1.png", "blog_2.png", "blog_3.png", "blog_4.png", "blog_5.png", "blog_6.png", "blog_7.png", "blog_8.png", "blog_9.png", "blog_10.png",
        ],
        highlights: [
            "User Authentication with JWT cookies",
            "Input fields validation at the backend with Express-Validator",
            "SEO optimized url for blogpost"
        ],
        live: null,
        github: "https://github.com/ishanjarwal/fullstack-mern-blog-application"
    },
    {
        title: "Digital Agency Website for Lead Generation",
        description: "A Framer-Motion animated website for my own agency called webify.co.in to showcase projects, with features of blog application and lead generating contact forms",
        technologies: [
            "ReactJS", "ExpressJS", "NodeJS", "Framer Motion", "Tailwind CSS", "Resend"
        ],
        thumbnails: [
            "webify_laptop.png",
            "webify_phone.png"
        ],
        images: [
            "webify_1.png", "webify_2.png", "webify_3.png", "webify_4.png", "webify_5.png", "webify_6.png", "webify_7.png", "webify_8.png",
        ],
        highlights: [
            "Animated Elements on Scroll",
            "Appealing User Interface",
            "All features of a blog website",
            "Email sending contact form using Resend"
        ],
        live: "https://webify.co.in"
    },
    {
        title: "Personal Portfolio Website (2023 Version)",
        description: "A personal portfolio website to showcase projects, skills, and experience. Includes a blog section and contact form.",
        technologies: [
            "ReactJS", "NodeJS", "Express", "TailwindCSS", "Axios", "Framer-Motion"
        ],
        thumbnails: [
            "old_portfolio_laptop.png",
            "old_portfolio_phone.png"
        ],
        images: [
            "old_portfolio_1.png", "old_portfolio_2.png", "old_portfolio_3.png", "old_portfolio_4.png", "old_portfolio_5.png", "old_portfolio_6.png", "old_portfolio_7.png"
        ],
        live: "https://old-jarwal.vercel.app",
        github: "github.com/ishanjarwal/portfolio"
    },
    {
        title: "Gym Website Theme",
        description: "A fitness center portfolio website to showcase services, equipments, mentors etc.",
        technologies: [
            "React", "TailwindCSS", "Framer-Motion", "React-Tilt"
        ],
        thumbnails: [
            "gym_laptop.png",
            "gym_phone.png"
        ],
        images: [
            "gym_1.png", "gym_2.png", "gym_3.png", "gym_4.png", "gym_5.png", "gym_6.png",
        ],
        live: null,
        github: "github.com/ishanjarwal/gym-theme-2024"
    }
];

export const fadeUp = {
    initial: {
        y: "100%",
        opacity: "0%"
    },
    animate: {
        y: "0%",
        opacity: "100%"
    }
}