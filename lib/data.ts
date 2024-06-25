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
    // project 1
    [
        {
            image: "https://i.imgur.com/cRbF7Pf.jpeg",
            alt: "Project 1a",
        },
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "Project 2a",
        },
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "Project 3a",
        },
    ],

    // project 2
    [
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 1b",
        },
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 2b",
        },
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 3b",
        },

    ],
   
    // Project 5
    [
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 1e",
        },
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 2e",
        },
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 3e",
        },
    ],
    // Project 6
    [

        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 1f",
        },
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 2f",
        },
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "project 3f",
        },

    ],
    // Portfolio
    [
        {
            image: "https://i.imgur.com/cRbF7Pf.png",
            alt: "Next Portfolio",
        },
    ],
] as const;

export const videos = [

    [
        {
            video: "https://www.youtube.com/",
            alt: "Youtube Demo",
        },
    ],
] as const;

export const projectsData = [
    {
        title: "Full Stack Application",
        tech: ["Next.js", "React", "MongoDB", "Oauth2", "Tailwind", "CSS"],
        description: `This is a full stack application that allows users to create, read, update, and delete posts.  Users can also login with their google account.  The application is styled with Tailwind CSS and uses Next.js for server side rendering.`,
        codeURL: "https://github.com/gllsrssx/gilles-rousseaux-eindopdracht",
        liveDemoURL: "https://gilles-rousseaux-eindopdracht.vercel.app",
        carouselImage: projectImages[0],
    },
    {
        title: "Flutter Mobile Application",
        tech: [
            "Flutter",
            "Dart",
            "Firebase",
            "TomTom API",
            "Agile Software Development",
        ],
        description: `This is a mobile application that allows users to track their daily commute.  The application uses the TomTom API to track the user's location and display the route on a map.  The application also uses Firebase to store user data and authenticate users.`,
        codeURL: "https://github.com/gllsrssx/flutter",
        videoDemoURL: "https://www.youtube.com/",
        carouselImage: projectImages[1],
    },
    {
        title: "Gilles Rousseaux's Portfolio ",
        tech: ["React", "Next.js", "Tailwind", "Typescript"],
        description: `This is my portfolio website that showcases my technical knowledge and application.  The website is styled with responsive design in mind and uses Next.js for server side rendering.  The website is also styled with Tailwind CSS.`,
        codeURL: "https://github.com/gllsrssx/gilles-rousseaux-portfolio",
        liveDemoURL: "https://gilles-rousseaux-eindopdracht.vercel.app",
        carouselImage: projectImages[2],
    },
] as const;

export const showMoreProjectsList = [
    {
        title: "Portfolio Front End Application",
        tech: ["Next.js", "MaterialUI", "CSS"],
        description: `This portfolio website is coded in Next.js and CSS to showcase my technical
            knowledge and application. The website was styled with responsive design in
            mind.`,
        codeURL: "https://github.com/gllsrssx/gilles-rousseaux-eindopdracht",
        liveDemoURL: "https://www.Gilles.dev/",
        image: "https://i.imgur.com/.png",
    },
    {
        title: "app 2",
        tech: ["Java"],
        description: `This is a project that I worked on with a team of developers.  The project is a full stack application that allows users to create, read, update, and delete posts.  The application is styled with Bootstrap and CSS.`,
        codeURL: "https://github.com/gllsrssx/",
        videoDemoURL: "https://www.youtube.com/",
        image: "https://i.imgur.com/.png",
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
