import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Github, Layers, Star, ArrowUpRight, Code2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  category: string;
  link?: string;
  github?: string;
  featured?: boolean;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      title: "Client Lead Management System",
      description:
        "A Mini CRM built with React.js, Node.js, Express & SQLite. Supports full CRUD operations, lead status tracking, and backend API integration.",
      image: "/project-images/crm.webp",
      date: "Feb 2026 – Mar 2026",
      category: "Full Stack",
      featured: true,
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
      featured: true,
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
      featured: true,
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

  const filters = ["All", "Full Stack", "AI/ML", "Design", "Frontend"];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const stats = [
    { icon: <Layers className="w-5 h-5 text-royal" />, label: "Total Projects", value: `${projects.length}+` },
    { icon: <Star className="w-5 h-5 text-yellow-400" />, label: "Featured", value: `${projects.filter((p) => p.featured).length}` },
    { icon: <Code2 className="w-5 h-5 text-blue-400" />, label: "Tech Stacks", value: "10+" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Background blobs to match Home page atmosphere */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-royal/5 rounded-full blur-[100px] -z-10 pointer-events-none" />


      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20 flex-grow">

        {/* ───── Header ───── */}
        <header className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal/10 text-royal text-sm font-medium mb-5 border border-royal/20">
            <Layers className="w-3.5 h-3.5" />
            My Work
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-base md:text-xl text-muted-foreground">
            A collection of projects I've built from full-stack apps to creative UI experiments.
          </p>
          <div className="w-16 md:w-24 h-1 bg-royal mx-auto rounded-full mt-6" />
        </header>

        {/* ───── Stats ───── */}
        <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 p-4 rounded-xl border border-border bg-card text-center"
            >
              {s.icon}
              <span className="text-2xl font-bold">{s.value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ───── Filter Tabs ───── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${activeFilter === f
                  ? "bg-royal text-white border-royal shadow-md shadow-royal/30"
                  : "bg-transparent text-muted-foreground border-border hover:border-royal hover:text-royal font-medium"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ───── Grid ───── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl border border-border hover:border-royal transition-all duration-300 overflow-hidden group flex flex-col hover:shadow-lg hover:shadow-royal/10 hover:-translate-y-0.5"
            >
              {/* Image */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold shadow-lg">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>
                )}

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/90 text-black text-[0.65rem] font-bold">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-background/80 backdrop-blur-sm text-[0.65rem] font-medium text-muted-foreground border border-border">
                  {project.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1 space-y-3">
                <h3 className="text-base md:text-lg font-bold leading-snug">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 text-royal" />
                  <span>{project.date}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[0.6rem] md:text-xs bg-orange-500/10 text-orange-500 border border-orange-500/20 px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-royal hover:bg-royal/90 text-white font-medium transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border hover:border-royal text-muted-foreground hover:text-royal transition-colors font-medium"
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Projects;
