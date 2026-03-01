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
  link?: string;
};

// Define the type for hackathons
type Hackathon = {
  title: string;
  description: string;
  image: string;
  date: string;
  tags?: string[];
  position?: string;
  link?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Client Lead Management System",
      description: "Developed a Client Lead Management System (Mini CRM) using React.js, Node.js, Express, and sql lite. The application supports full CRUD operations, lead status tracking, and backend API integration, demonstrating my ability to build and integrate complete full-stack web applications.",
      image: "👥",
      date: "Feb 2026 - March 2026",
      tags: ["React", "TypeScript", "Node.js", "SQL Lite", "Tailwind CSS", "CRM"],
      link: "future-fs-02-crm.vercel.app"
    },
    {
      title: "Local Business Website",
      description: "Designed and deployed a responsive website for a local business using React.js, focusing on modern UI, mobile responsiveness, and improved online visibility to enhance customer engagement.",
      image: "☕",
      date: "Feb 2026 - March 2026",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "UI/UX"],
      link: "future-fs-03-b-b.vercel.app"
    },
    {
      title: "SalesPulse:Interactive Data Analytics Dashboard",
      description: "An AI-powered sales dashboard featuring real-time stock market integration, predictive analytics, and an intelligent chatbot assistant. Built with a modern tech stack for seamless data visualization and user interaction.",
      image: "📈",
      date: "Nov 2025 - Present",
      tags: ["React", "Python", "RestApi", "TypeScript", "MYSQL/PostgreSQL", "LLM", "AI/ML", "Tailwind CSS", "Socket.io"],
      // link: "https://github.com/adil-r120/SalesPulse"
      link: "https://salespulse.vercel.app/"
    },
    {
      title: "E-commerce Design",
      description: "A full-featured e-commerce Air Jordan website design built with figma, wireframe, and prototype. Features include user login/signup, product search, shopping cart, and payment processing.",
      image: "🛍️",
      date: "March 2025 - April 2025",
      tags: ["Figma", "Ui/Ux design", "WireFrame", "Protoptype"],
      link: "https://github.com/adil-r120/E-Commerce-Website-Design"
    },
    {
      title: "Personal Expense Tracker",
      description: "A productivity application for managing tasks and projects with real-time collaboration features. Built with java and javaframe work, MYSQL databases.",
      image: "📋",
      date: "Sep 2025 - Jan 2025",
      tags: ["Java", "Reactjs", "MYSQL databases", "RestApi"],
      link: "https://github.com/adil-r120/Personal-Expense-Tracker"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
      image: "🌟",
      date: "December 2023 - January 2024",
      tags: ["React", "Tailwind CSS", "Nodejs"],
      // link: "https://github.com/adil-r120/Adil-Dev-Portfolio"
      link: "https://adil-dev-portfolio.vercel.app/"
    },
    {
      title: "Real-time Weather Detector",
      description: "A weather application that provides real-time weather information using REST API integration.",
      image: "🌦️",
      date: "Sep 2023 - Jan 2023",
      tags: ["HTML", "CSS", "JavaScript", "REST API"],
      // link: "https://github.com/adil-r120/Weather-App"
      link: "https://weather-dekho-app.vercel.app/"
    },
    {
      title: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game implementation with an interactive user interface.",
      image: "⭕",
      date: "Feb 2024 - June 2024",
      tags: ["HTML", "CSS", "JavaScript"],
      // link: "https://github.com/adil-r120/Tic-Tac-Toe-Game"
      link: "https://tic-tac-toe-game-demo.vercel.app/"
    },
    {
      title: "Amazon-Clone",
      description: "Amazon Clone – Website This is a Amazon Clone a frontend UI project built using HTML and CSS only. It replicates the modern and minimal design of the popular Amazon website, showcasing how an elegant and responsive layout can be created without JavaScript or frameworks",
      image: "🛒",
      date: "Aug 2024 - Sep 2024",
      tags: ["HTML", "CSS"],
      // link: "https://github.com/adil-r120/Amazon-Clone"
      link: "https://amazon-clone-146.vercel.app/"
    },
    {
      title: "Zepto-Clone",
      description: "Zepto Clone – Grocery Delivery Website This is a Zepto Clone a frontend UI project built using HTML and CSS only. It replicates the modern and minimal design of the popular Zepto grocery delivery platform, showcasing how an elegant and responsive layout can be created without JavaScript or frameworks.",
      image: "🛒",
      date: "Feb 2024 - Mar 2024",
      tags: ["HTML", "CSS"],
      // link: "https://github.com/adil-r120/Zepto-Clone"
      link: "https://zepto-clone-sigma.vercel.app/zepto.html"
    },
    {
      title: "Snatix – Photography Website",
      description: "Snatix – Photography Website is a full-stack photography portfolio. It allows photographers to showcase their work, manage galleries, and connect with clients through a seamless, responsive, and modern web interface.",
      image: "📸",
      date: " Jan 2025 - Oct 2025",
      tags: ["HTML", "TypeScript", "JavaScript", "MYSQL", "Photography"],
      // link: "https://github.com/adil-r120/Snatix"
      link: "https://snatix.vercel.app/"
    }
  ];

  const hackathons: Hackathon[] = [
    {
      title: "Quantum_X Hackathon 2025",
      description: "A 24-hour hackathon organized by NHCE computer science department. Our team developed a real-time application.",
      image: "🏆",
      date: "10-12th April 2025",
      // tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      // position: "1st Place Winner",
      link: "/certificates/hackathon.png"
    },
    {
      title: "Pixel Pursuit Event 2024",
      description: "A Pixel Pursuit event organized by Mobile Development Club at NHCE campus.",
      image: "🌱",
      date: "19th November 2024",
      // tags: ["Mobile Development", "Android", "Java"],
      // position: "Top 5 Finalists",
      link: "/certificates/pixel.jpeg"
    }
    /*{
      title: "Startup Weekend Hackathon",
      description: "A weekend-long event where multidisciplinary teams create a startup from concept to pitch. Developed a mental health support platform for students.",
      image: "💡",
      date: "September 2024",
      tags: ["React Native", "Firebase", "Express.js", "Machine Learning"],
      position: "Best Social Impact Award",
      link: "#"
    }*/
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link && project.link !== "#" ? "_blank" : undefined}
              rel={project.link && project.link !== "#" ? "noopener noreferrer" : undefined}
              className="bg-card rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all overflow-hidden group block"
            >
              <div className="h-40 md:h-48 bg-gradient-to-br from-blue-900/20 to-transparent flex items-center justify-center text-5xl md:text-7xl group-hover:scale-110 transition-transform">
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
            </a>
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
              <a
                key={hackathon.title}
                href={hackathon.link}
                target={hackathon.link && hackathon.link !== "#" ? "_blank" : undefined}
                rel={hackathon.link && hackathon.link !== "#" ? "noopener noreferrer" : undefined}
                className="bg-card rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all overflow-hidden group block"
              >
                <div className="h-40 md:h-48 bg-gradient-to-br from-blue-900/20 to-transparent flex items-center justify-center text-5xl md:text-7xl group-hover:scale-110 transition-transform">
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
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;