//imgae upload site https://img.doerig.dev


import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import flutter from "@/public/logos/flutter.svg";
import react from "@/public/logos/react.svg";
import typescript from "@/public/logos/typescript.svg";
import css from "@/public/logos/css.svg";
import html from "@/public/logos/html.svg";
import java from "@/public/logos/java.svg";
import python from "@/public/logos/python.svg";
import postgres from "@/public/logos/postgres.svg";
import firebase from "@/public/logos/firebase.svg";
import mysql from "@/public/logos/mysql.svg";
import docker from "@/public/logos/docker.svg";
import postman from "@/public/logos/postman.svg";
import mongodb from "@/public/logos/mongodb.svg";
import bash from "@/public/logos/bash.svg";
import aws from "@/public/logos/aws.svg";
import cplusplus from "@/public/logos/c++.svg";
import csharp from "@/public/logos/csharp.svg";
import s3 from "@/public/logos/amazon-s3.svg";
import git from "@/public/logos/git.svg";
import vscode from "@/public/logos/vscode.svg";

export const skillsData = [
    {
        title: "Web Development",
        skills: [
            { name: "React", svg: react },
            // { name: "Next.js", svg: next },
            // { name: "Angular", svg: angular },
            { name: "Flutter", svg: flutter },
            // { name: 'Framer Motion', svg: framerMotion },
            { name: "Typescript", svg: typescript },
            // { name: 'Javascript', svg: javascript },
            { name: 'HTML5', svg: html },
            { name: 'CSS3', svg: css },
            // { name: 'Ionic', svg: ionic },
        ],
    },
    {
        title: "Programming & Scripting",
        skills: [
            { name: 'Shell Scripting', svg: bash },
            { name: "Java", svg: java },
            { name: "C#", svg: csharp },
            // { name: "ASP.NET", svg: dotnet },
            // { name: "Node.js", svg: node },
            { name: 'C++', svg: cplusplus },
            // { name: 'Spring', svg: spring },
            // { name: "C", svg: c },
            { name: 'Python', svg: python },
        ],
    },
    {
        title: "Database Management",
        skills: [
            { name: "Firebase", svg: firebase },
            { name: "MySQL", svg: mysql },
            { name: "MongoDB", svg: mongodb },
            { name: "PostgreSQL", svg: postgres },
            // { name: "MySQL", svg: mysql },
            { name: "Amazon S3", svg: s3 },
        ],
    },
    {
        title: "Tools & Misc.",
        skills: [
            { name: "AWS", svg: aws },
            { name: "Docker", svg: docker },
            { name: "Git", svg: git },
            { name: "Postman", svg: postman },
            { name: "Visual studio code", svg: vscode },
            // { name: "Heroku", svg: heroku },
            // { name: "Vercel", svg: vercel },
            // { name: "Netlify", svg: netlify },
            ,
        ],
    },
] as const;

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Education",
        hash: "#education",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
    // {
    //     name: "Resume",
    //     hash: "#resume",
    // },
] as const;

export const workExperience = [
    {
        title: "Full Stack Developer Intern",
        company: "Cubitec",
        location: "Antwerpen",
        description: [
            "Joined a team of developers to build a full stack application",
            "Worked with Java, Javascript, SQL, Docker, and AWS",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "November 2023 - June 2024",
    },
    {
        title: "Project Coordinator",
        company: "Kanryo BVBA",
        location: "Antwerpen",
        description: [
            "Supervised a team to set up and manage VIP campings on festivals",
            "Supervised a team to set up and manage a stand on festivals",
            "Woodwork",
            "Art logistics",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "June 2018 - March 2020",
    },
    {
        title: "Hospitality",
        company: "Various",
        location: "Antwerpen/Gent",
        description: [
            "Bars",
            "Restaurants",
            "Hotels",
            "Events",
            "Deliveroo",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "2012 - 2018",
    },
] as const;

export const education = [
    {
        title: "Graduate Full Stack Developer",
        company: "Thomas More University",
        location: "Antwerpen",
        description: [
            "Frontend Development",
            "Backend Development",
            "Database Management",
            "Agile Software Development",
            "Soft Skills",
        ],
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2021 - Aug 2024",
    },
    {
        title: "Duurzaam wonen",
        company: "Steinerschool",
        location: "Lier",
        description: [
            "Construction",
            "Sustainability",
        ],
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2014 - Aug 2017",
    },
] as const;

export const projectImages = [
    // 0 Portfolio 
    [
        {
            image: "https://i.imgur.com/XEZBh81.jpeg",
            alt: "Next Portfolio dark",
        },
        {
            image: "https://i.imgur.com/SrilXXE.jpeg",
            alt: "Next Portfolio light",
        },
    ],
    // 1 action cars 
    [
        {
            image: "https://i.imgur.com/JnVq48J.jpeg",
            alt: "car main",
        },
        {
            image: "https://i.imgur.com/zPpC51G.jpeg",
            alt: "car pic",
        },
        {
            image: "https://i.imgur.com/pKCBFCM.jpeg",
            alt: "car detail",
        },
    ],
    // 2 flutter meal planner app
    [
        {
            image: "https://i.imgur.com/n4ZBjef.jpeg",
            alt: "flutter meal planner app main",
        },
    ],
    // 3 Stremio live iptv addon
    [
        {
            image: "https://i.imgur.com/hm3fGlC.jpeg",
            alt: "vtm",
        },
        {
            image: "https://i.imgur.com/TLC2A99.jpeg",
            alt: "catalog",
        }
    ],
    // 4 MT5 trading bots & indicators
    [
        {
            image: "https://i.imgur.com/iKFVX55.png",
            alt: "mt5",
        },
    ],
    // 5 Growth management appsmith
    [
        {
            image: "https://i.imgur.com/rPMqAl9.jpeg",
            alt: "appsmith",
        },
    ],
    // 6 Fifa quiz
    [
        {
            image: "data:image/jpeg;base64,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",
            alt: "fifa quiz",
        },
    ],
    // 7 Grid
    [
        {
            image:"https://i.imgur.com/KyWyA8c.png",
            alt:"C# trading bot",
        },
    ],
    // 8 QR race
    [
        {
            image:"https://i.imgur.com/Ybqz673.png",
            alt:"QR Race",
        },
    ],
] as const;

export const videos = [

    [
        {
            video: "https://youtu.be/3GpVEnTpWSI",
            alt: "Flutter meal planner app demo",
        },
    ],
] as const;

export const projectsData = [
    {
        title: "Gilles Rousseaux's Portfolio ",
        tech: ["React", "Next.js", "Tailwind", "Typescript"],
        description: `This is my portfolio website that showcases my technical knowledge and application.  The website is styled with responsive design in mind and uses Next.js for server side rendering.  The website is also styled with Tailwind CSS.`,
        codeURL: "https://github.com/gllsrssx/gilles-rousseaux-eindopdracht",
        liveDemoURL: "https://rssx.eu/",
        carouselImage: projectImages[0],
    },
    {
        title: "Auction car scraper",
        tech: ["Python", "Django", "Render", "html", "scraping", "Bootstrap"],
        description: `Scrapes cars from a couple of auction site with personal filters to find a good deal car in benelux/de.`,
        codeURL: "https://github.com/gllsrssx/auctionCarsScraper",
        liveDemoURL: "https://auctionscraper.onrender.com/",
        carouselImage: projectImages[1],
    },
    {
        title: "Flutter Mobile Application",
        tech: [
            "Flutter",
            "Dart",
            "Firebase",
        ],
        description: `This is a mobile application that allows users to plan their meals for each day. The application is written in Next.js and Typescript and styled with Tailwind CSS and uses Firebase for authentication and data storage.`,
        codeURL: "https://github.com/gllsrssx/flutter",
        videoDemoURL: "https://youtu.be/3GpVEnTpWSI",
        carouselImage: projectImages[2],
    },
    {
        title: "Stremio Live IPTV Addon",
        tech: ["Javascript", "Node.js", "stremio-addon-sdk", "IPTV"],
        description: `Stremio IPTV Add-on is a powerful extension that brings a wide range of Internet Protocol Television (IPTV) channels to your Stremio app. It leverages the iptv-org API, providing a vast selection of live channels across different genres and regions.`,
        codeURL: "https://github.com/gllsrssx/IPTV-stremio-addon",
        liveDemoURL: "https://iptv-stremio-addon.onrender.com/",
        carouselImage: projectImages[3],
    },
    {
        title: "MT5 Trading Bots & Indicators",
        tech: ["MQL5", "MetaTrader 5", "C++"],
        description: `This is my collection of trading bots and indicators for the MetaTrader 5 platform. The bots and indicators are written in MQL5 and can be used to automate trading strategies and analyze market data.`,
        codeURL: "https://github.com/gllsrssx/MQL5/tree/master",
        liveDemoURL: "https://www.mql5.com/en/market/product/113923?source=Site+Profile+Seller",
        carouselImage: projectImages[4],
    },
    {
        title: "Growth Management Appsmith",
        tech: ["Appsmith", "Javascript", "MongoDB", "SMTP", "AWS"],
        description: `Growth Management Appsmith is a web application that helps businesses manage their growth strategies. It is built with Appsmith, a low-code development platform, and uses MongoDB for data storage, data manipulation with JS, SMTP for email notifications, and AWS for cloud hosting`,
        codeURL: "https://github.com/gllsrssx/groeiplan",
        liveDemoURL: "https://app.appsmith.com/app/gap/home-65a6a855701d3251fda0bd2f",
        carouselImage: projectImages[5],
    },
    {
        title: "Fifa quiz",
        tech: ["Typescript", "EJS", "CSS", "API"],
        description: `This is a quiz application that tests your knowledge of the FIFA World Cup. Demo is down due to Heroku's new policy.`,
        codeURL: "https://github.com/gllsrssx/fifa-quiz",
        liveDemoURL: "https://fifa-quiz.herokuapp.com/",
        carouselImage: projectImages[6],
    },
    {
        title: "Grid bot",
        tech: ["C#", "cTrader"],
        description: `A C# coded trading bot using a grid based system in cAlgo cTrader.`,
        codeURL: "https://github.com/gllsrssx/CBot/blob/master/Grid/Grid.cs",
        liveDemoURL: "https://ctrader.com/u/gilles1996/",
        carouselImage: projectImages[7],
    },
    {
        title: "QRace",
        tech: ["Java", "Javascript", "HTML", "CSS"],
        description: `QRace is a web application that allows users to create and participate in QR code scavenger hunts. The application is built with Java, Javascript, HTML, and CSS and uses QR codes to create and solve puzzles.`,
        codeURL: "https://github.com/22-project-programmeren-thomasmore/QRace",
        liveDemoURL: "https://qrace.onrender.com/",
        carouselImage: projectImages[8],
    }
] as const;

export const showMoreProjectsList = [
    {
        title: "Gilles Rousseaux's Portfolio ",
        tech: ["React", "Next.js", "Tailwind", "Typescript"],
        description: `This is my portfolio website that showcases my technical knowledge and application.  The website is styled with responsive design in mind and uses Next.js for server side rendering.  The website is also styled with Tailwind CSS.`,
        codeURL: "https://github.com/gllsrssx/gilles-rousseaux-eindopdracht",
        liveDemoURL: "https://rssx.eu/",
        // carouselImage: projectImages[0],
    },
] as const;

export const useInViewSettings = {
    // threshold: 0.8,
    // initialInView: true,
    // triggerOnce: true,
    rootMargin: "-40% 0% -40% 0%",
} as const;

export const MetadataValues = {
    Title: "R. Gilles",
    Description:
        "Gilles Rousseaux is a Full Stack Developer who is passionate about web development. He graduated from Thomas More University with a degree in Software Development.",
};
