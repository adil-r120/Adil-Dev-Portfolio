import Navigation from "@/components/Navigation";
import { Calendar, IdCard, ExternalLink, BookOpen, Code2, Database, Cloud, Brain, Globe, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Certification = {
  title: string;
  issuer: string;
  issuerIcon: React.ReactNode;
  issued?: string;
  credentialId?: string;
  skills?: string[];
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


const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Git Training",
      issuer: "EduPyramids, SINE, IIT Bombay",
      issuerIcon: <span className="text-xl">🐙</span>,
      issued: "Nov 2025",
      skills: ["Git"],
      link: "/certificates/git.pdf",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur",
      issuerIcon: <Cloud className="w-5 h-5 text-sky-500" />,
      issued: "Oct 2025",
      credentialId: "NPTEL25CS107S252601106",
      skills: ["Cloud Computing"],
      link: "/certificates/NPTEL.pdf",
    },
    {
      title: "DBMS — Master Fundamental & Advanced Concepts",
      issuer: "Scaler",
      issuerIcon: <Database className="w-5 h-5 text-purple-500" />,
      issued: "Oct 2025",
      skills: ["Database Management System (DBMS)"],
      link: "/certificates/DBMS.png",
    },
    {
      title: "Symposium on Data for Public Good",
      issuer: "Indian Institute of Science (IISc)",
      issuerIcon: <Brain className="w-5 h-5 text-emerald-500" />,
      issued: "Oct 2025",
      skills: ["Python", "Data Science", "Cloud Computing"],
      link: "/certificates/iisc.pdf",
    },
    {
      title: "SQL Bootcamp",
      issuer: "LetsUpgrade",
      issuerIcon: <Database className="w-5 h-5 text-orange-500" />,
      issued: "Sep 2025",
      skills: ["SQL"],
      link: "/certificates/sql.pdf",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      issuerIcon: <span className="text-xl">🟠</span>,
      issued: "Jul 2025",
      skills: ["Amazon Web Services (AWS)"],
      link: "/certificates/awsa.pdf",
    },
    {
      title: "AWS SimuLearn: Cloud Computing Essentials",
      issuer: "Amazon Web Services (AWS)",
      issuerIcon: <Cloud className="w-5 h-5 text-orange-400" />,
      issued: "Jul 2025",
      skills: ["Cloud Computing"],
      link: "/certificates/aws training.pdf",
    },
    {
      title: "Google Cloud Arcade Facilitator",
      issuer: "Google",
      issuerIcon: <span className="text-xl">🌐</span>,
      issued: "Apr 2025",
      skills: ["Google Cloud Platform (GCP)"],
      link: "https://www.cloudskillsboost.google/public_profiles/66042bf4-1de9-4045-9c85-de693b5d7287/badges/14604966",
    },
    {
      title: "HTML",
      issuer: "Great Learning",
      issuerIcon: <Globe className="w-5 h-5 text-red-500" />,
      issued: "Aug 2024",
      skills: ["HTML"],
      link: "/certificates/html.jpg",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class",
      issuerIcon: <span className="text-xl">🐍</span>,
      issued: "Jun 2024",
      skills: ["Python for Data Science"],
      link: "/certificates/PYTHON2.pdf",
    },
    {
      title: "Data Science 101",
      issuer: "Cognitive Class",
      issuerIcon: <Brain className="w-5 h-5 text-blue-500" />,
      issued: "May 2024",
      skills: ["Data Science"],
      link: "/certificates/IBM.a.pdf",
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      issuerIcon: <Code2 className="w-5 h-5 text-blue-600" />,
      issued: "May 2024",
      skills: ["Python for Data Science"],
      link: "/certificates/Python_for_Data_Science_Badge.pdf",
    },
  ];

  const hackathons: Hackathon[] = [
    {
      title: "Quantum_X Hackathon 2025",
      description: "A 24-hour hackathon organized by NHCE computer science department. Our team developed a real-time application.",
      image: "/project-images/hackathon-quantumx.png",
      date: "10-12th April 2025",
      link: "/certificates/hackathon.png"
    },
    {
      title: "Pixel Pursuit Event 2024",
      description: "A Pixel Pursuit event organized by Mobile Development Club at NHCE campus.",
      image: "/project-images/hackathon-pixel.png",
      date: "19th November 2024",
      link: "/certificates/pixel.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold">Certifications</h1>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mb-16 md:mb-20">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link || "#"}
              target={cert.link && cert.link !== "#" ? "_blank" : undefined}
              rel={cert.link && cert.link !== "#" ? "noopener noreferrer" : undefined}
              className="bg-card p-4 md:p-6 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all block card-glow group"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  {cert.issuerIcon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold mb-1 leading-tight text-sm md:text-base">{cert.title}</h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-orange-500 transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{cert.issuer}</p>

                  {cert.issued && (
                    <div className="flex items-center gap-1 text-[0.6rem] md:text-xs text-muted-foreground mb-1">
                      <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span>Issued {cert.issued}</span>
                    </div>
                  )}

                  {cert.credentialId && (
                    <div className="flex items-center gap-1 text-[0.6rem] md:text-xs text-muted-foreground mb-2">
                      <IdCard className="w-2.5 h-2.5 md:w-3 md:h-3 flex-shrink-0" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}

                  {cert.skills && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-[0.6rem] md:text-xs bg-orange-500/10 text-orange-500 px-1.5 py-0.5 md:px-2 md:py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>


        {/* Hackathon Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-16">
            <Trophy className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
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
                <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain rounded group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg md:text-xl font-bold">{hackathon.title}</h3>
                    {hackathon.position && (
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

                  {hackathon.tags && (
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
      </main >
    </div >
  );
};

export default Certifications;