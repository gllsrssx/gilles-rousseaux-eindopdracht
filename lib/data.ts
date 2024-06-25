import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import angular from "@/public/logos/angular.svg";
import flutter from "@/public/logos/flutter.svg";
import react from "@/public/logos/react.svg";
import typescript from "@/public/logos/typescript.svg";
import css from "@/public/logos/css.svg";
import html from "@/public/logos/html.svg";
import javascript from "@/public/logos/javascript.svg";
import node from "@/public/logos/node.svg";
import java from "@/public/logos/java.svg";
import python from "@/public/logos/python.svg";
import spring from "@/public/logos/spring.svg";
import postgres from "@/public/logos/postgres.svg";
import firebase from "@/public/logos/firebase.svg";
import framerMotion from "@/public/logos/framer-motion.svg";
import mysql from "@/public/logos/mysql.svg";
import docker from "@/public/logos/docker.svg";
import heroku from "@/public/logos/heroku.svg";
import postman from "@/public/logos/postman.svg";
import mongodb from "@/public/logos/mongodb.svg";
import bash from "@/public/logos/bash.svg";
import next from "@/public/logos/next.svg";
import aws from "@/public/logos/aws.svg";
import ionic from "@/public/logos/ionic.svg";
import cplusplus from "@/public/logos/c++.svg";
import csharp from "@/public/logos/csharp.svg";
import dotnet from "@/public/logos/dotnet.svg";
import vercel from "@/public/logos/vercel.svg";
import netlify from "@/public/logos/netlify.svg";
import s3 from "@/public/logos/amazon-s3.svg";
import git from "@/public/logos/git.svg";
import vscode from "@/public/logos/vscode.svg";
import { BsCode } from "react-icons/bs";

export const skillsData = [
    {
        title: "Web Development",
        skills: [
            { name: "React", svg: react },
            { name: "Next.js", svg: next },
            // { name: "Angular", svg: angular },
            { name: "Typescript", svg: typescript },
            { name: "Flutter", svg: flutter },
            // { name: 'Framer Motion', svg: framerMotion },
            // { name: 'Javascript', svg: javascript },
            // { name: 'HTML5', svg: html },
            // { name: 'CSS3', svg: css },
            // { name: 'Ionic', svg: ionic },
        ],
    },
    {
        title: "Programming & Scripting",
        skills: [
            { name: "Java", svg: java },
            // { name: "C#", svg: csharp },
            // { name: "ASP.NET", svg: dotnet },
            { name: "Node.js", svg: node },
            // { name: 'C++', svg: cplusplus },
            // { name: 'Spring', svg: spring },
            { name: 'Shell Scripting', svg: bash },
            { name: 'Python', svg: python },
            // { name: "C", svg: c },
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
            // { name: "Amazon S3", svg: s3 },
        ],
    },
    {
        title: "Tools & Misc.",
        skills: [
            { name: "AWS", svg: aws },
            { name: "Docker", svg: docker },
            { name: "Git", svg: git },
            { name: "Visual studio code", svg: vscode }
            // { name: "Postman", svg: postman },
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
    Title: "Gilles Rousseaux Full Stack Developer",
    Description:
        "Gilles Rousseaux is a Full Stack Developer who is passionate about web development. He graduated from Thomas More University with a degree in Software Development.",
};
