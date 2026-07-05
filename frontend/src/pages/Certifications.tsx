import { useState } from "react";
import { certifications, hackathons } from "@/data/portfolioData";
import Navigation from "@/components/Navigation";
import {
  Calendar, IdCard, ExternalLink, BookOpen, Trophy, Award, Filter, ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal3D from "@/components/ScrollReveal3D";
import TiltCard from "@/components/TiltCard";



const filters = ["All", "Cloud", "Data", "Programming", "Development"];

const stats = [
  { icon: <Award className="w-5 h-5 text-royal" />, label: "Certifications", value: `${certifications.length}` },
  { icon: <Trophy className="w-5 h-5 text-yellow-400" />, label: "Hackathons", value: `${hackathons.length}` },
  { icon: <BookOpen className="w-5 h-5 text-blue-400" />, label: "Issuers", value: "8+" },
];

const categoryColor: Record<string, string> = {
  Cloud: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Data: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Development: "bg-green-500/10 text-green-400 border-green-500/20",
  Programming: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

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
          {stats.map((s) => (
            <div
              key={s.label}
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
              type="button"
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
          {filtered.map((cert) => (
            <ScrollReveal3D key={cert.title}>
              <TiltCard
                className="bg-card p-5 rounded-2xl border border-border hover:border-royal transition-all duration-300 hover:shadow-lg hover:shadow-royal/10 group flex flex-col gap-4 h-full"
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
              </TiltCard>
            </ScrollReveal3D>
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
              <ScrollReveal3D key={hackathon.title}>
                <div
                  className="bg-card rounded-2xl border border-border hover:border-yellow-500/40 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-yellow-500/5 hover:-translate-y-0.5 flex flex-col h-full"
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
            </ScrollReveal3D>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Certifications;
