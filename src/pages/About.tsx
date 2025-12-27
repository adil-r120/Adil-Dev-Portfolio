import Navigation from "@/components/Navigation";
import { Code2, Palette, Cloud, Brain, BookOpen } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive and interactive web applications using modern frameworks like React, HTML, CSS, and JavaScript."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces using Figma with focus on user experience."
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Working with AWS cloud services and implementing cloud-based solutions for scalable applications."
    },
    {
      icon: Brain,
      title: "Data Science & AI",
      description: "Leveraging Python for data analysis and exploring AI technologies to solve real-world problems."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering, Computer Science Engineering",
      institution: "New Horizon College of Engineering",
      period: "Aug 2023 - Aug 2027",
      location: "Bangalore, India"
    },
    {
      degree: "Senior Secondary (XII), PCM",
      institution: "Park Mount Public School",
      board: "Central Board of Secondary Education",
      grade: "Grade: A",
      period: "Mar 2020 - April 2022",
      location: "Patna, India",
      activities: "Captain of Cricket team"
    },
    {
      degree: "Matric (X)",
      institution: "Nezamia Public School",
      board: "Central Board of Secondary Education",
      grade: "Grade: B",
      period: "Mar 2020",
      location: "Patna, India",
      activities: "Drawing & Sketching",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - Skills */}
          <div className="space-y-4 md:space-y-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="flex gap-3 md:gap-4 p-4 md:p-6 bg-card rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{skill.title}</h3>
                  <p className="text-sm md:text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - About Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">About me</h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
               Aspiring Software Engineer with a passion for coding and technology. Currently pursuing a Bachelor of Engineering in Computer Science Engineering at New Horizon College of Engineering, Bangalore. Actively building skills in full-stack development, AI, and cloud computing through hands-on projects and coursework. Driven to continuously learn, grow, and develop scalable software solutions that solve real-world problems.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Education</h3>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="bg-card p-4 md:p-6 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all card-glow">
                  <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                  {edu.board && <p className="text-xs md:text-sm text-muted-foreground mb-1">{edu.board}</p>}
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">{edu.period}</p>
                  {edu.grade && <p className="text-xs md:text-sm text-muted-foreground mb-1">{edu.grade}</p>}
                  <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-1 md:gap-2">
                    📍 {edu.location}
                  </p>
                  {edu.activities && (
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                      <span className="font-medium">Activities:</span> {edu.activities}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <div className="text-center p-4 md:p-6 bg-card rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all card-glow">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                  5<span className="text-orange-500">+</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-card rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all card-glow">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                  10<span className="text-orange-500">+</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Certifications</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-card rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all card-glow">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">1</div>
                <p className="text-xs md:text-sm text-muted-foreground">Hackathon</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;