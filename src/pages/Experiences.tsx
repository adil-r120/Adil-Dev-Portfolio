import Navigation from "@/components/Navigation";
import { Calendar, MapPin, ExternalLink, Download, Briefcase, Star, CheckCircle2, TrendingUp } from "lucide-react";

// Define the type for experiences
type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string; // e.g. "Internship" | "Volunteer" | "Freelance"
  description: string;
  highlights: string[]; // key achievements / bullet points
  skills: string[];
  link?: string;
  badge?: string; // e.g. "Certificate Awarded"
};

const Experiences = () => {
  const experiences: Experience[] = [
    {
      title: "Full Stack Web Developer",
      company: "Future Interns",
      period: "Feb 2026 – Mar 2026",
      location: "Remote",
      type: "Internship",
      badge: "Certificate Awarded",
      description:
        "Successfully completed an intensive internship in Full Stack Web Development. Developed dynamic and responsive web applications using frontend technologies like HTML, React, and JavaScript alongside backend integration.",
      highlights: [
        "Built and deployed 3 full-stack applications during the internship tenure.",
        "Implemented RESTful API integration and authentication systems using JWT.",
        "Handled database design and CRUD operations with SQLite.",
        "Maintained clean version-controlled codebase using Git & GitHub.",
      ],
      skills: ["React", "Tailwind CSS", "TypeScript", "Node.js", "SQLite", "Git", "GitHub"],
      link: "/certificates/MD ADIL RAZA Internship Certificate.pdf",
    },
    {
      title: "Volunteer – Technical Team",
      company: "New Horizon College of Engineering",
      period: "Oct 2025 – Present",
      location: "Bengaluru, Karnataka, India",
      type: "Volunteer",
      badge: "Recognition Certificate",
      description:
        "Volunteered as a Technical Team Member during the National Level 48-Hour Hackathon organized under Silver Spectrum Techfest 2025 by the Departments of CSE and AIML.",
      highlights: [
        "Supported 20+ participant teams with live technical troubleshooting and GitHub deployment.",
        "Coordinated closely with mentors and faculty for smooth event operations.",
        "Managed system setup and project presentation logistics during the 48-hour event.",
        "Developed strong real-time problem-solving and leadership skills under pressure.",
      ],
      skills: [
        "Team Collaboration",
        "Technical Event Management",
        "Communication Skills",
        "Participant Assistance",
        "Leadership & Responsibility",
      ],
      link: "/certificates/hack_v.pdf",
    },
  ];

  const typeColors: Record<string, string> = {
    Internship: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    Volunteer: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    Freelance: "bg-green-500/10 text-green-500 border border-green-500/20",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Background blobs to match Home page atmosphere */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-royal/5 rounded-full blur-[100px] -z-10 pointer-events-none" />


      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20 flex-grow">
        <div className="max-w-4xl mx-auto">

          {/* ───── Header ───── */}
          <header className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-5 border border-orange-500/20">
              <Briefcase className="w-3.5 h-3.5" />
              Professional Journey
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">My Experiences</h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A curated journey through my professional roles, internships, and community contributions.
            </p>
            <div className="w-16 md:w-24 h-1 bg-royal mx-auto rounded-full mt-6 mb-8" />
            <a
              href="/certificates/MD-ADIL-RAZA-Resume.pdf"
              download="MD-ADIL-RAZA-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-royal hover:bg-royal/90 text-white font-semibold text-sm md:text-base shadow-lg shadow-royal/30 transition-all hover:scale-105 hover:shadow-royal/50"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </header>

          {/* ───── Stats Row ───── */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { icon: <Briefcase className="w-5 h-5 text-royal" />, label: "Experiences", value: "2+" },
              { icon: <Star className="w-5 h-5 text-yellow-400" />, label: "Certificates", value: "2" },
              { icon: <TrendingUp className="w-5 h-5 text-green-400" />, label: "Skills Used", value: "12+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1.5 p-4 rounded-xl border border-border bg-card text-center"
              >
                {stat.icon}
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* ───── Timeline ───── */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent hidden md:block" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-6 group">

                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold text-sm z-10 shadow-md shadow-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-royal transition-all duration-300 hover:shadow-lg hover:shadow-royal/10 hover:-translate-y-0.5">

                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColors[exp.type] ?? "bg-gray-500/10 text-gray-400"}`}>
                            {exp.type}
                          </span>
                          {exp.badge && (
                            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mt-1">{exp.title}</h2>
                        <h3 className="text-base md:text-lg text-orange-500 font-medium mt-0.5">{exp.company}</h3>
                      </div>

                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-royal/30 text-royal hover:bg-royal/10 transition-colors shrink-0 self-start font-medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View Certificate
                        </a>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-royal" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-royal" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-5">
                      <p className="text-xs uppercase tracking-widest text-royal font-semibold mb-3">Key Highlights</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, si) => (
                          <span
                            key={si}
                            className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full border border-orange-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Experiences;
