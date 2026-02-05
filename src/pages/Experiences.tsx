import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

// Define the type for experiences
type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  link?: string;
  //   role?: string;
};

const Experiences = () => {
  const experiences: Experience[] = [
    {
      title: "Volunteer – Technical Team",
      company: "New Horizon College of Engineering",
      period: "Oct 2025 - Present",
      location: "Bengaluru, Karnataka, India",
      description: "Volunteered as a Technical Team Member during the National Level 48-Hour Hackathon organized under Silver Spectrum Techfest 2025 by the Departments of CSE and AIML at New Horizon College of Engineering, Supported participants with technical troubleshooting, GitHub deployment. Worked closely with student teams and mentors to ensure smooth event operations and project presentations.Strengthened skills in team coordination, system setup, and real-time problem solving.",
      skills: ["Team Collaboration", "Technical Event Management", "Communication Skills", "Participant Assistance", "Leadership & Responsibility"],
      link: "/certificates/hack_v.pdf"
    },
    /*{
      title: "Web Developer",
      company: "Digital Creations Agency",
      period: "Jan 2024 - May 2024",
      location: "Remote",
      description: "Developed responsive websites for clients in various industries. Implemented modern UI/UX designs and optimized site performance, resulting in 30% faster load times.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "SEO"],
      link: "https://digitalcreations.com"
    },
    {
      title: "Open Source Contributor",
      company: "Community Project",
      period: "Sep 2023 - Dec 2023",
      location: "Remote",
      description: "Contributed to open-source projects on GitHub, focusing on bug fixes and feature enhancements. Collaborated with developers worldwide to improve documentation and user experience.",
      skills: ["Git", "Python", "Documentation", "Collaboration"],
      link: "https://github.com"
    }*/
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20 flex-grow">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">My Experiences</h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through my professional and educational experiences
            </p>
            <div className="w-16 md:w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
          </header>

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card p-6 md:p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all relative"
              >
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-0"
                    aria-label={`Visit ${exp.company}`}
                  ></a>
                )}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold">{exp.title}</h2>
                    <h3 className="text-lg md:text-xl text-orange-500 font-medium mt-1">{exp.company}</h3>
                  </div>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-900 dark:text-blue-400 hover:text-blue-700 transition-colors shrink-0 relative z-10"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-base md:text-muted-foreground mb-5 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs md:text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experiences;