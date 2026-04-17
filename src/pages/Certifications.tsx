import { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Calendar, IdCard, ExternalLink, BookOpen, Code2, Database,
  Cloud, Brain, Globe, Trophy, Award, Filter, ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Certification = {
  title: string;
  issuer: string;
  issuerIcon: React.ReactNode;
  issued?: string;
  credentialId?: string;
  skills?: string[];
  link?: string;
  category: string;
};

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
  const [activeFilter, setActiveFilter] = useState("All");

  const certifications: Certification[] = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur",
      issuerIcon: <Cloud className="w-5 h-5 text-sky-500" />,
      issued: "Oct 2025",
      credentialId: "NPTEL25CS107S252601106",
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
      title: "Google Cloud Arcade Facilitator",
      issuer: "Google",
      issuerIcon: <span className="text-xl">🌐</span>,
      issued: "Apr 2025",
      skills: ["Google Cloud Platform (GCP)"],
      link: "https://www.cloudskillsboost.google/public_profiles/66042bf4-1de9-4045-9c85-de693b5d7287/badges/14604966",
      category: "Cloud",
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

  const hackathons: Hackathon[] = [
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

  const filters = ["All", "Cloud", "Data", "Development"];

  const filtered =
    activeFilter === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

  const stats = [
    { icon: <Award className="w-5 h-5 text-royal" />, label: "Certifications", value: `${certifications.length}` },
    { icon: <Trophy className="w-5 h-5 text-yellow-400" />, label: "Hackathons", value: `${hackathons.length}` },
    { icon: <BookOpen className="w-5 h-5 text-blue-400" />, label: "Issuers", value: "8+" },
  ];

  const categoryColor: Record<string, string> = {
    Cloud: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    Data: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Development: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Background blobs to match Home page atmosphere */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-royal/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-royal/10 rounded-full blur-[100px] -z-10 pointer-events-none" />


      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20 flex-grow">

        {/* ───── Header ───── */}
        <header className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-5 border border-orange-500/20">
            <Award className="w-3.5 h-3.5" />
            Credentials & Achievements
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h1>
          <p className="text-base md:text-xl text-muted-foreground">
            Verified credentials from world-class institutions across cloud, data science, and development.
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
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${activeFilter === f
                  ? "bg-royal text-white border-royal shadow-md shadow-royal/30"
                  : "bg-transparent text-muted-foreground border-border hover:border-royal hover:text-royal font-medium"
                }`}
            >
              {f === "All" && <Filter className="w-3.5 h-3.5" />}
              {f}
            </button>
          ))}
        </div>

        {/* ───── Certification Cards ───── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mb-20">
          {filtered.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-5 rounded-2xl border border-border hover:border-royal transition-all duration-300 hover:shadow-lg hover:shadow-royal/10 hover:-translate-y-0.5 group flex flex-col gap-4"
            >
              {/* Top row */}
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  {cert.issuerIcon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm md:text-base leading-snug">{cert.title}</h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-royal transition-colors shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {cert.issued && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-royal" />
                    Issued {cert.issued}
                  </span>
                )}
                {cert.category && (
                  <span className={`px-2 py-0.5 rounded-full text-[0.65rem] font-medium border ${categoryColor[cert.category] ?? "bg-gray-500/10 text-gray-400 border-gray-500/20"}`}>
                    {cert.category}
                  </span>
                )}
              </div>

              {cert.credentialId && (
                <div className="flex items-center gap-1.5 text-[0.65rem] text-muted-foreground bg-muted/40 px-2.5 py-1.5 rounded-lg">
                  <IdCard className="w-3 h-3 shrink-0" />
                  <span className="truncate">ID: {cert.credentialId}</span>
                </div>
              )}

              {/* Skills */}
              {cert.skills && (
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="text-[0.65rem] bg-orange-500/10 text-orange-500 border border-orange-500/20 px-2 py-0.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-1.5 text-xs px-3 py-2 rounded-lg border border-royal text-royal hover:bg-royal/10 transition-colors font-medium"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ───── Hackathons ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-5 border border-yellow-500/20">
              <Trophy className="w-3.5 h-3.5" />
              Competitions
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">Hackathons</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Participation and achievements in hackathons and coding competitions.
            </p>
            <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.title}
                className="bg-card rounded-2xl border border-border hover:border-yellow-500/40 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-yellow-500/5 hover:-translate-y-0.5 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-950 overflow-hidden">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  {hackathon.position && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-yellow-500/90 text-black text-[0.65rem] font-bold flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      {hackathon.position}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-bold leading-snug">{hackathon.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {hackathon.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{hackathon.date}</span>
                  </div>

                  {hackathon.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {hackathon.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[0.6rem] bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {hackathon.link && (
                    <a
                      href={hackathon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 text-xs px-3 py-2 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors font-medium mt-auto"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Certifications;
