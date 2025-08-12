// import images
import Hero_person from "./assets/images/Hero/person.png";
import person2 from "./assets/images/Hero/person2.png";

import figma from "./assets/images/Skills/figma.png";
import Django from "./assets/images/Skills/django.svg";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import aws from "./assets/images/Skills/aws.svg";
import html from "./assets/images/Skills/html.svg";
import css from "./assets/images/Skills/css.svg";
import javascript from "./assets/images/Skills/javascript.svg";
import bootstrap from "./assets/images/Skills/bootstrap.svg";
import tailwind from "./assets/images/Skills/tailwind.svg";
import vue from "./assets/images/Skills/vue.svg";
import typescript from "./assets/images/Skills/typescript.svg";

import flask from "./assets/images/Skills/flask.png";
import php from "./assets/images/Skills/php.svg";
import csharp from "./assets/images/Skills/csharp.svg";
import cplusplus from "./assets/images/Skills/cplusplus.svg";
import dotnet from "./assets/images/Skills/dotnet.svg";
import java from "./assets/images/Skills/java.svg";
import mysql from "./assets/images/Skills/mysql.svg";
import Postgresql from "./assets/images/Skills/postgresql.svg";
import mongoDB from "./assets/images/Skills/mongoDB.svg";
import sqlite from "./assets/images/Skills/sqlite.svg";

import git from "./assets/images/Skills/git.svg";
import linux from "./assets/images/Skills/linux.svg";
import docker from "./assets/images/Skills/docker.svg";
import kubernetes from "./assets/images/Skills/kubernetes.svg";
import azure from "./assets/images/Skills/azure.svg";
import xamarin from "./assets/images/Skills/xamarin.png";
import androidStudio from "./assets/images/Skills/android.png";
import wordpress from "./assets/images/Skills/wordpress.svg";
import nextJs from "./assets/images/Skills/nextJS.svg";
import nginx from "./assets/images/Skills/nginx.svg";
import grafana from "./assets/images/Skills/grafana.png";
import jira from "./assets/images/Skills/jira.png";


import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "MANSI",
    LastName: "BHARDWAJ",
    btnText: "Contact me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Tech",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },

  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    image: person2,
    skills_content_front: [
      {
        name: "React",
        logo: reactjs,
      },
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
      {
        name: "Javascript",
        logo: javascript,
      },
      {
        name: "Typescript",
        logo: typescript,
      },      
      {
        name: "Vue JS",
        logo: vue,
      },

    ],

    skills_content_back:[
      {
        name: "Node JS",
        logo: nodejs,
      },
      {
        name: "Django",
        logo: Django,
      },
      {
        name: "Python",
        logo: python,
      },
      {
        name: "Flask",
        logo: flask,
      },
      {
        name: "Java",
        logo: java,
      },
      {
        name: "MongoDb",
        logo: mongoDB,
      },
      {
        name: "MySQL",
        logo: mysql,
      },
      {
        name: "Php",
        logo: php,
      },
      {
        name: "PostgreSQL",
        logo: Postgresql,
      },
      {
        name: "sqlite",
        logo: sqlite,
      },
      {
        name: "ASP .NET",
        logo: dotnet,
      },
      {
        name: "C++",
        logo: cplusplus,
      },
      {
        name: "C#",
        logo: csharp,
      },
      {
        name: "MySQL",
        logo: mysql,
      },
      {
        name: "Php",
        logo: php,
      },
    ],

    skills_content_tools:[
      {
        name: "Git",
        logo: git,
      },
      {
        name: "Jira",
        logo: jira,
      },
      {
        name: "Grafana",
        logo: grafana,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "AWS",
        logo: aws,
      },
      {
        name: "Azure",
        logo: azure,
      },
      {
        name: "Docker",
        logo: docker,
      },
      {
        name: "Kubernetes",
        logo: kubernetes,
      },
      {
        name: "Linux",
        logo: linux,
      },
      {
        name: "Next JS",
        logo: nextJs,
      },
      {
        name: "Nginx",
        logo: nginx,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "Wordpress",
        logo: wordpress,
      },
      {
        name: "Xamarin",
        logo: xamarin,
      },
      {
        name: "Android Studio",
        logo: androidStudio,
      },

    ],

    icon: MdArrowForward,
  },
  
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Buttercup Desktop",
        image: project1,
        link: "https://github.com/Mansi-b5/COMP-354_Project",
      },
      {
        title: "Pizza Website",
        image: project2,
        link: "https://github.com/Mansi-b5/.Net-Consulting-Project"
      },
      {
        title: "Tower Hanoi Game",
        image: project3,
        link: "https://github.com/Mansi-b5/COIT13229"
      },
      {
        title: "Smart Farm",
        image: project1,
        link: "https://github.com/Mansi-b5/SmartFarm---App"
      },
      {
        title: "Pizza Android App",
        image: project2,
        link:"https://github.com/Mansi-b5/AppDevII-Final_Project"
      },
      {
        title: "AI face recognition",
        image: project1,
        link:"https://github.com/Klickk/AppliedAI-GroupProject"
      },
     
    ],
  },
  
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    image: person2,
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
