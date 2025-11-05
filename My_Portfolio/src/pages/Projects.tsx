import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Trophy } from "lucide-react";

// Define the type for projects
type Project = {
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
};

// Define the type for hackathons
type Hackathon = {
  title: string;
  description: string;
  image: string;
  date: string;
  tags?: string[];
  position?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Design",
      description: "A full-featured e-commerce Air Jordan website design built with figma, wireframe, and prototype. Features include user login/signup, product search, shopping cart, and payment processing.",
      image: "🛍️",
      date: "March 2025 - May 2025",
      tags: ["Figma", "Ui/Ux design", "WireFrame", "Protoptype"]
    },
    {
      title: "Personal Expense Tracker",
      description: "A productivity application for managing tasks and projects with real-time collaboration features. Built with java and javaframe work, MYSQL databases.",
      image: "📋",
      date: "sep 2025 - Jan 2025",
      tags: ["Java", "Reactjs", "MYSQL databases","RestApi"]
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
      image: "🌟",
      date: "December 2023 - January 2024",
      tags: ["React", "Tailwind CSS", "Nodejs"]
    },
    {
      title: "Real-time Weather Detector",
      description: "A weather application that provides real-time weather information using REST API integration.",
      image: "🌦️",
      date: "Sep 2023 - Jan 2023",
      tags: ["HTML", "CSS", "JavaScript", "REST API"]
    },
    {
      title: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game implementation with an interactive user interface.",
      image: "⭕",
      date: "Feb 2024 - June 2024",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "E-commerce Webpage",
      description: "A frontend implementation of an Amazon-style e-commerce webpage.",
      image: "🛒",
      date: "Aug 2024 - Sep 2024",
      tags: ["HTML", "CSS"]
    }
  ];

  const hackathons: Hackathon[] = [
    {
      title: "Quantum_X Hackathon 2025",
      description: "A 24-hour hackathon organized by NHCE computer science department. Our team developed a real-time application.",
      image: "🏆",
      date: "10-12th April 2025",
      // tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      // position: "1st Place Winner"
    },
    {
      title: "Pixel Pursuit Event 2024",
      description: "A Pixel Pursuit event organized by Mobile Development Club.",
      image: "🌱",
      date: "19th November 2024",
      // tags: ["Mobile Development", "Android", "Java"],
      // position: "Top 5 Finalists"
    }
    /*{
      title: "Startup Weekend Hackathon",
      description: "A weekend-long event where multidisciplinary teams create a startup from concept to pitch. Developed a mental health support platform for students.",
      image: "💡",
      date: "September 2024",
      tags: ["React Native", "Firebase", "Express.js", "Machine Learning"],
      position: "Best Social Impact Award"
    }*/
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all overflow-hidden group"
            >
              <div className="h-40 md:h-48 bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-5xl md:text-7xl group-hover:scale-110 transition-transform">
                {project.image}
              </div>
              
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  <span>{project.date}</span>
                </div>

                <div className="flex flex-wrap gap-1 md:gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[0.6rem] md:text-xs bg-orange-500/10 text-orange-500 border-orange-500/20 px-2 py-0.5 md:px-2.5 md:py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Section */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center">Hackathons</h2>
          </div>
          <p className="text-base md:text-lg text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
            Showcasing my participation and achievements in various hackathons and coding competitions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.title}
                className="bg-card rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all overflow-hidden group"
              >
                <div className="h-40 md:h-48 bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center text-5xl md:text-7xl group-hover:scale-110 transition-transform">
                  {hackathon.image}
                </div>
                
                <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg md:text-xl font-bold">{hackathon.title}</h3>
                    {'position' in hackathon && hackathon.position && (
                      <Badge 
                        variant="secondary" 
                        className="text-[0.6rem] md:text-xs bg-orange-500/10 text-orange-500 border-orange-500/20 whitespace-nowrap px-2 py-0.5 md:px-2.5 md:py-1"
                      >
                        {hackathon.position}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {hackathon.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{hackathon.date}</span>
                  </div>

                  {'tags' in hackathon && hackathon.tags && (
                    <div className="flex flex-wrap gap-1 md:gap-2 pt-2">
                      {hackathon.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[0.6rem] md:text-xs bg-orange-500/10 text-orange-500 border-orange-500/20 px-2 py-0.5 md:px-2.5 md:py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;