import { useState } from "react";
import { projects } from "@/data/portfolioData";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import ScrollReveal3D from "@/components/ScrollReveal3D";
import TiltCard from "@/components/TiltCard";
import { Calendar, ExternalLink, Github, Layers, Star, ArrowUpRight, Code2, BookOpen, ScrollText } from "lucide-react";

type Paper = {
  title: string;
  projectRef: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
};


const papers: Paper[] = [
  {
    title: "Research Paper: Work in Progress",
    projectRef: "Smart-Infra: AI Infrastructure & Monitoring System",
    description:
      "I am currently writing a comprehensive research paper based on this project. It will detail the core methodologies, architecture, and findings. Check back soon for the published version!",
    date: "In Progress",
    link: "#", // Add your link here when ready
    tags: ["Research", "Drafting", "Coming Soon"],
  },
];

const filters = ["All", "Full Stack", "AI/ML", "Design", "Frontend"];

const stats = [
  { icon: <Layers className="w-5 h-5 text-royal" />, label: "Total Projects", value: `${projects.length}+` },
  { icon: <ScrollText className="w-5 h-5 text-orange-500" />, label: "Research Papers(In Progress)", value: papers.length.toString() },
  { icon: <Code2 className="w-5 h-5 text-blue-400" />, label: "Tech Stacks", value: "10+" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Projects & Research</h1>
          <p className="text-base md:text-xl text-muted-foreground">
            A collection of projects I've built and my academic research work.
          </p>
          <div className="w-16 md:w-24 h-1 bg-royal mx-auto rounded-full mt-6" />
        </header>

        {/* ───── Stats ───── */}
        <div className="flex justify-center flex-wrap gap-4 mb-10 max-w-xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1.5 p-4 rounded-xl border border-border bg-card text-center min-w-[140px]"
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
              type="button"
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
            <ScrollReveal3D key={project.title}>
              <TiltCard
                className="bg-card rounded-2xl border border-border hover:border-royal transition-all duration-300 overflow-hidden group flex flex-col hover:shadow-lg hover:shadow-royal/10 h-full"
              >
                {/* Image */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-950 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
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
              </TiltCard>
            </ScrollReveal3D>
          ))}
        </div>

        {/* ───── Research Papers Section ───── */}
        <div className="mt-24 md:mt-32 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center border border-royal/20">
              <ScrollText className="w-5 h-5 text-royal" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">Research & Publications</h2>
          </div>
          
          <div className="flex flex-col gap-6">
            {papers.map((paper) => (
              <ScrollReveal3D key={paper.title}>
                <div 
                  className="bg-card rounded-2xl border border-border hover:border-royal transition-all duration-300 p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:shadow-xl hover:shadow-royal/10 group"
                >
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-royal transition-colors">
                      {paper.title}
                    </h3>
                    <div className="px-3 py-1 text-[0.65rem] md:text-xs font-semibold rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                      Based on: {paper.projectRef}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {paper.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4 text-royal" />
                    <span>Published: {paper.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {paper.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-royal/5 text-royal border border-royal/10 px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col items-center justify-center md:border-l border-border/50 md:pl-8 mt-4 md:mt-0">
                  {paper.link !== "#" ? (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-royal to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-royal/30 transition-all hover:-translate-y-0.5 w-full md:w-auto justify-center"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Paper
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-muted-foreground font-medium w-full md:w-auto justify-center cursor-not-allowed">
                      <BookOpen className="w-4 h-4 opacity-50" />
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal3D>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Projects;
