import React from "react";
import { Brain, Cloud, Code, Code2, Database, Globe } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  category: string;
  link?: string;
  github?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  issuerIcon: React.ReactNode;
  issued?: string;
  credentialId?: string;
  skills?: string[];
  link?: string;
  category: string;
};

export type Hackathon = {
  title: string;
  description: string;
  image: string;
  date: string;
  tags?: string[];
  position?: string;
  link?: string;
};

export const projects: Project[] = [
    {
      title: "CyberShield X",
      description:
        "A sophisticated phishing detection and security monitoring platform. It leverages a hybrid approach combining Machine Learning (Random Forest), rule-based heuristics, and real-time behavioral analysis to provide explainable risk scoring for suspicious URLs.",
      image: "/project-images/cybershield.png",
      date: "2026",
      category: "Cyber Security",
      tags: ["Security", "React", "Node.js", "Python", "ML", "MySQL"],
      link: "https://github.com/adil-r120/CyberShield-X",
    },
    {
      title: "GYANIBABA (AI Chatbot)",
      description:
        "A production-ready AI chatbot with ChatGPT-4 level intelligence, custom knowledge base (RAG), and beautiful modern UI, designed to assist users with general queries, technical support, and automated responses.",
      image: "/project-images/gyanibaba.png",
      date: "2026",
      category: "AI/ML",
      tags: ["AI/ML", "Groq", "LLM", "Python", "React"],
      link: "https://github.com/adil-r120/GAYANIBABA",
    },
    {
      title: "Client Lead Management System",
      description:
        "A Mini CRM built with React.js, Node.js, Express & SQLite. Supports full CRUD operations, lead status tracking, and backend API integration.",
      image: "/project-images/crm.webp",
      date: "Feb 2026 – Mar 2026",
      category: "Full Stack",
      tags: ["React", "TypeScript", "Node.js", "SQLite", "Tailwind CSS", "CRM"],
      link: "https://future-fs-02-crm.vercel.app",
    },
    {
      title: "SalesPulse: Data Analytics Dashboard",
      description:
        "AI-powered sales dashboard with real-time stock market integration, predictive analytics, and an intelligent chatbot assistant.",
      image: "/project-images/salespulse.webp",
      date: "Nov 2025 – Present",
      category: "AI/ML",
      tags: ["React", "Python", "REST API", "TypeScript", "LLM", "AI/ML", "Tailwind CSS"],
      link: "https://salespulse.vercel.app/",
    },
    {
      title: "Snatix – Photography Website",
      description:
        "Full-stack photography portfolio allowing photographers to showcase their work, manage galleries, and connect with clients through a modern interface.",
      image: "/project-images/snatix.webp",
      date: "Jan 2025 – Oct 2025",
      category: "Full Stack",
      tags: ["HTML", "TypeScript", "JavaScript", "MySQL", "Photography"],
      link: "https://snatix.vercel.app/",
    },
    {
      title: "Local Business Website",
      description:
        "Responsive website for a local business using React.js focused on modern UI, mobile responsiveness, and improved online visibility.",
      image: "/project-images/local-business.webp",
      date: "Feb 2026 – Mar 2026",
      category: "Full Stack",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "UI/UX"],
      link: "https://future-fs-03-b-b.vercel.app",
    },
    {
      title: "E-commerce Design",
      description:
        "Full-featured Air Jordan e-commerce website design wireframes, prototype & user flows built in Figma with login, cart, and payment screens.",
      image: "/project-images/ecommerce.webp",
      date: "Mar 2025 – Apr 2025",
      category: "Design",
      tags: ["Figma", "UI/UX Design", "WireFrame", "Prototype"],
      link: "https://github.com/adil-r120/E-Commerce-Website-Design",
      github: "https://github.com/adil-r120/E-Commerce-Website-Design",
    },
    {
      title: "Personal Expense Tracker",
      description:
        "Productivity app for managing personal finances with real-time tracking, category breakdowns, and Java + React.js + MySQL stack.",
      image: "/project-images/expense-tracker.webp",
      date: "Sep 2024 – Jan 2025",
      category: "Full Stack",
      tags: ["Java", "React.js", "MySQL", "REST API"],
      link: "https://github.com/adil-r120/Personal-Expense-Tracker",
      github: "https://github.com/adil-r120/Personal-Expense-Tracker",
    },
    {
      title: "Real-time Weather Detector",
      description:
        "Weather application providing real-time weather info, forecasts, and location detection through REST API integration.",
      image: "/project-images/weather.webp",
      date: "Sep 2023 – Jan 2024",
      category: "Frontend",
      tags: ["HTML", "CSS", "JavaScript", "REST API"],
      link: "https://weather-dekho-app.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive personal portfolio showcasing projects and skills with modern design, dark mode, and smooth animations.",
      image: "/project-images/portfolio.webp",
      date: "Dec 2023 – Jan 2024",
      category: "Frontend",
      tags: ["React", "Tailwind CSS", "Node.js"],
      link: "https://adil-dev-portfolio.vercel.app/",
    },
    {
      title: "Amazon Clone",
      description:
        "Frontend-only Amazon UI clone built with HTML & CSS replicates the layout, navbar, product grid, and footer of the Amazon homepage.",
      image: "/project-images/amazon.webp",
      date: "Aug 2024 – Sep 2024",
      category: "Frontend",
      tags: ["HTML", "CSS"],
      link: "https://amazon-clone-146.vercel.app/",
    },
    {
      title: "Zepto Clone",
      description:
        "Frontend UI clone of the Zepto grocery delivery platform elegant, responsive layout crafted entirely with HTML & CSS.",
      image: "/project-images/zepto.webp",
      date: "Feb 2024 – Mar 2024",
      category: "Frontend",
      tags: ["HTML", "CSS"],
      link: "https://zepto-clone-sigma.vercel.app/zepto.html",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "Classic Tic Tac Toe with a clean, interactive UI two-player mode, win detection, and score tracking.",
      image: "/project-images/tictactoe.webp",
      date: "Feb 2024 – Jun 2024",
      category: "Frontend",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://tic-tac-toe-game-demo.vercel.app/",
    },
  ];

export const certifications: Certification[] = [
    {
      title: "Python for Machine Learning",
      issuer: " EduPyramids, SINE, IIT Bombay",
      issuerIcon: <Brain className="w-5 h-5 text-purple-500" />,
      issued: "2026",
      skills: ["Python", "Machine Learning", "Scikit-Learn"],
      link: "/certificates/python for Ml.pdf",
      category: "Data Science",
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      issuerIcon: <span className="text-xl">📊</span>,
      issued: "2026",
      skills: ["Data Analysis", "Python", "Pandas", "NumPy", "Matplotlib"],
      link: "https://courses.cognitiveclass.ai/certificates/3ff24e57353b4eae9619c6a6670b0528",
      category: "Data Science",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur",
      issuerIcon: <Cloud className="w-5 h-5 text-sky-500" />,
      issued: "Oct 2025",
      skills: ["Cloud Computing"],
      link: "/certificates/NPTEL.pdf",
      category: "Cloud",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      issuerIcon: <span className="text-xl">🟠</span>,
      issued: "Jul 2025",
      skills: ["Amazon Web Services (AWS)"],
      link: "/certificates/awsa.pdf",
      category: "Cloud",
    },
    {
      title: "AWS SimuLearn: Cloud Computing Essentials",
      issuer: "Amazon Web Services (AWS)",
      issuerIcon: <Cloud className="w-5 h-5 text-royal" />,
      issued: "Jul 2025",
      skills: ["Cloud Computing"],
      link: "/certificates/aws training.pdf",
      category: "Cloud",
    },
    {
      title: "Cloud Computing and Distributed Systems",
      issuer: "NPTEL, IIT Kanpur",
      issuerIcon: <Cloud className="w-5 h-5 text-royal" />,
      issued: "Mar 2026",
      skills: ["Cloud Computing", "Distributed Systems"],
      link: "/certificates/cloud2.pdf",
      category: "Cloud",
    },
    {
      title: "R Programming",
      issuer: "Infosys Springboard",
      issuerIcon: <Code className="w-5 h-5 text-purple-500" />,
      issued: "May 2026",
      skills: ["R Programming"],
      link: "/certificates/R-programming.pdf",
      category: "Programming",
    },
    {
      title: "DBMS — Master Fundamental & Advanced Concepts",
      issuer: "Scaler",
      issuerIcon: <Database className="w-5 h-5 text-purple-500" />,
      issued: "Oct 2025",
      skills: ["Database Management System (DBMS)"],
      link: "/certificates/DBMS.png",
      category: "Data",
    },
    {
      title: "SQL Bootcamp",
      issuer: "LetsUpgrade",
      issuerIcon: <Database className="w-5 h-5 text-orange-500" />,
      issued: "Sep 2025",
      skills: ["SQL"],
      link: "/certificates/sql.pdf",
      category: "Data",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class",
      issuerIcon: <span className="text-xl">🐍</span>,
      issued: "Jun 2024",
      skills: ["Python for Data Science"],
      link: "/certificates/PYTHON2.pdf",
      category: "Data",
    },
    {
      title: "Data Science 101",
      issuer: "Cognitive Class",
      issuerIcon: <Brain className="w-5 h-5 text-blue-500" />,
      issued: "May 2024",
      skills: ["Data Science"],
      link: "/certificates/IBM.a.pdf",
      category: "Data",
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      issuerIcon: <Code2 className="w-5 h-5 text-blue-600" />,
      issued: "May 2024",
      skills: ["Python for Data Science"],
      link: "/certificates/Python_for_Data_Science_Badge.pdf",
      category: "Data",
    },
    {
      title: "Symposium on Data for Public Good",
      issuer: "Indian Institute of Science (IISc)",
      issuerIcon: <Brain className="w-5 h-5 text-emerald-500" />,
      issued: "Oct 2025",
      skills: ["Python", "Data Science", "Cloud Computing"],
      link: "/certificates/iisc.pdf",
      category: "Data",
    },
    {
      title: "Git Training",
      issuer: "EduPyramids, SINE, IIT Bombay",
      issuerIcon: <span className="text-xl">🐙</span>,
      issued: "Nov 2025",
      skills: ["Git"],
      link: "/certificates/git.pdf",
      category: "Development",
    },
    {
      title: "HTML",
      issuer: "Great Learning",
      issuerIcon: <Globe className="w-5 h-5 text-red-500" />,
      issued: "Aug 2024",
      skills: ["HTML"],
      link: "/certificates/html.jpg",
      category: "Development",
    },
  ];

export const hackathons: Hackathon[] = [
    {
      title: "Quantum_X Hackathon 2025",
      description:
        "A 24-hour hackathon organized by the NHCE Computer Science department. Our team developed a real-time infrastructure monitoring application under tight deadlines.",
      image: "/project-images/hackathon-quantumx.png",
      date: "10–12 April 2025",
      tags: ["Team Collaboration", "Problem Solving", "Real-time App"],
      link: "/certificates/hackathon.png",
    },
    {
      title: "Pixel Pursuit Event 2024",
      description:
        "A competitive design and development event organized by the Mobile Development Club at NHCE campus. Focused on UI/UX creativity and rapid prototyping.",
      image: "/project-images/hackathon-pixel.png",
      date: "19 November 2024",
      tags: ["UI/UX", "Rapid Prototyping", "Mobile Dev"],
      link: "/certificates/pixel.jpeg",
    },
  ];
