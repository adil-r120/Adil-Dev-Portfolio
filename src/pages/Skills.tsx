import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Globe, BookOpen, Languages, Monitor, Code, FileText, Terminal, Server, ExternalLink, Award, Layers } from "lucide-react";

// Define the type for skills with proficiency
type Skill = {
  name: string;
  proficiency: number; // 0-100 percentage
};

// Define the type for skill categories
type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

type Course = {
  title: string;
  institution: string;
  icon: React.ReactNode;
  link: string;
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", proficiency: 70 },
        { name: "Java", proficiency: 70 },
        { name: "C++", proficiency: 65 },
        { name: "C", proficiency: 70 },
        { name: "JavaScript", proficiency: 50 },
        { name: "SQL", proficiency: 85 },
        { name: "XML", proficiency: 70 }
      ]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: [
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 65 },
        { name: "JavaScript", proficiency: 60 },
        { name: "React", proficiency: 85 },
        { name: "REST APIs", proficiency: 60 }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { name: "SQL", proficiency: 85 },
        { name: "MySQL", proficiency: 80 },
        { name: "DBMS", proficiency: 80 }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: "☁️",
      skills: [
        { name: "AWS", proficiency: 40 },
        { name: "Cloud Computing", proficiency: 55 },
        { name: "Google Cloud Platform (GCP)", proficiency: 65 },
        { name: "Figma", proficiency: 100 },
        { name: "GitHub", proficiency: 80 },
        { name: "Linux", proficiency: 65 }
      ]
    },
    {
      title: "AI & Data Science",
      icon: "🤖",
      skills: [
        { name: "Artificial Intelligence (AI)", proficiency: 75 },
        { name: "Data Science", proficiency: 65 },
        { name: "Python for data science", proficiency: 60 }
      ]
    },
    {
      title: "Software Development",
      icon: "⚙️",
      skills: [
        { name: "Object-Oriented Programming (OOP)", proficiency: 65 },
        { name: "Software Development", proficiency: 80 },
        { name: "Java Frameworks", proficiency: 70 }
      ]
    },
    {
      title: "Design & UX",
      icon: "🎨",
      skills: [
        { name: "UI/UX design", proficiency: 95 },
        { name: "Wireframing", proficiency: 100 },
        { name: "Figma (Software)", proficiency: 100 },
        { name: "Prototyping", proficiency: 100 }
      ]
    },
    {
      title: "Concepts",
      icon: "📚",
      skills: [
        { name: "Data Structures & Algorithms", proficiency: 55 },
        { name: "OOPs", proficiency: 65 },
        { name: "DBMS", proficiency: 85 },
        { name: "Operating Systems", proficiency: 60 }
      ]
    },
    {
      title: "Languages",
      icon: "🗣️",
      skills: [
        { name: "English", proficiency: 80 },
        { name: "Hindi", proficiency: 100 },
        { name: "Urdu", proficiency: 90 }
      ]
    },

  ];

  const courses: Course[] = [
    {
      title: "Cloud Computing",
      institution: "IIT Kharagpur",
      icon: <Cloud className="w-5 h-5 text-orange-500" />,
      link: "https://swayam.gov.in/mycourses",
    },
    {
      title: "Data Structure and Algorithm",
      institution: "PW Skills",
      icon: <Code2 className="w-5 h-5 text-orange-500" />,
      link: "https://youtu.be/RJ733wzbNoA?si=ew1VgCZ2d1d_sohR",
    },
  ];

  // Progress bar component
  const ProgressBar = ({ proficiency }: { proficiency: number }) => (
    <div className="w-40 bg-gray-200 rounded-full h-2 ml-2 flex-shrink-0">
      <div
        className="bg-orange-500 h-2 rounded-full"
        style={{ width: `${proficiency}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative selection:bg-orange-500/30 selection:text-orange-500">
      <Navigation />

      {/* Background blobs to match Home page atmosphere */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-royal/5 rounded-full blur-[100px] -z-10 pointer-events-none" />


      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <header className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-5 border border-orange-500/20">
            <Layers className="w-3.5 h-3.5" />
            My Toolkit
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Technical Skills</h1>
          <p className="text-base md:text-xl text-muted-foreground">
            A specialized overview of the languages, frameworks, and tools I use to build robust digital solutions.
          </p>
          <div className="w-16 md:w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card p-4 md:p-8 rounded-lg border border-royal/10 hover:border-royal transition-all card-glow animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 transition-transform group-hover:scale-110">
                  {index === 0 && <Code2 className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
                  {index === 1 && <Globe className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
                  {index === 2 && <Database className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
                  {index === 3 && <Cloud className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
                  {index === 4 && <div className="text-orange-500 text-sm md:text-lg">🤖</div>}
                  {index === 5 && <div className="text-orange-500 text-sm md:text-lg">⚙️</div>}
                  {index === 6 && <div className="text-orange-500 text-sm md:text-lg">🎨</div>}
                  {index === 7 && <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
                  {index === 8 && <Languages className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
                  {!([0, 1, 2, 3, 4, 5, 6, 7, 8].includes(index)) && <Code2 className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
                </div>
                <h2 className="text-lg md:text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="text-xs md:text-sm py-1 px-3 bg-secondary hover:bg-orange-500 hover:text-white transition-all cursor-default border border-transparent hover:border-orange-600"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Courses Section */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-24">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold mb-3">
              <BookOpen className="w-3 h-3" />
              Learning Path
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">Courses & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {courses.map((course) => (
              <a
                key={course.title}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-3 md:p-4 rounded-lg border border-royal/10 hover:border-royal transition-all block card-glow group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base md:text-lg font-bold group-hover:text-royal transition-colors">{course.title}</h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">{course.institution}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* My Coding Platforms Section */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-24">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold mb-3">
              <Monitor className="w-3 h-3" />
              Performance
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">Coding Profiles</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {/* CodeChef */}
            <a
              href="https://www.codechef.com/users/adil_r120"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-3 md:p-4 rounded-lg border border-royal/10 hover:border-royal transition-all group text-center block card-glow"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 flex items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 transition-transform group-hover:scale-110">
                <Code className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
              </div>
              <p className="text-blue-900 dark:text-blue-100 mb-1 text-[0.7rem] md:text-sm font-bold group-hover:text-royal transition-colors">CodeChef</p>
              <Badge variant="secondary" className="text-[9px] px-1.5 h-3.5 border-none bg-secondary/50"> </Badge>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/adil_r120/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-3 md:p-4 rounded-lg border border-royal/10 hover:border-royal transition-all group text-center block card-glow"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 flex items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 transition-transform group-hover:scale-110">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
              </div>
              <p className="text-blue-900 dark:text-blue-100 mb-1 text-[0.7rem] md:text-sm font-bold group-hover:text-royal transition-colors">LeetCode</p>
              <Badge variant="secondary" className="text-[9px] px-1.5 h-3.5 border-none bg-secondary/50"></Badge>
            </a>

            {/* HackerRank */}
            <a
              href="https://www.hackerrank.com/profile/mdadilraza510"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-3 md:p-4 rounded-lg border border-royal/10 hover:border-royal transition-all group text-center block card-glow"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 flex items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 transition-transform group-hover:scale-110">
                <Terminal className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
              </div>
              <p className="text-blue-900 dark:text-blue-100 mb-1 text-[0.7rem] md:text-sm font-bold group-hover:text-royal transition-colors">HackerRank</p>
              <Badge variant="secondary" className="text-[9px] px-1.5 h-3.5 border-none bg-secondary/50"> </Badge>
            </a>

            {/* GeeksforGeeks */}
            <a
              href="https://auth.geeksforgeeks.org/user/mdadilraza510"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-3 md:p-4 rounded-lg border border-royal/10 hover:border-royal transition-all group text-center block card-glow"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 flex items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 transition-transform group-hover:scale-110">
                <Server className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
              </div>
              <p className="text-blue-900 dark:text-blue-100 mb-1 text-[0.7rem] md:text-sm font-bold group-hover:text-royal transition-colors">GeeksforGeeks</p>
              <Badge variant="secondary" className="text-[9px] px-1.5 h-3.5 border-none bg-secondary/50"> </Badge>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
