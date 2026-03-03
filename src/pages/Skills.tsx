import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Globe, BookOpen, Languages, Monitor, Code, FileText, Terminal, Server, ExternalLink } from "lucide-react";

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
      icon: <Cloud className="w-5 h-5 text-sky-500" />,
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">Technical Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card p-4 md:p-8 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all card-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-lg md:text-xl">
                  {index === 0 && <Code2 className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />}
                  {index === 1 && <Globe className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />}
                  {index === 2 && <Database className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />}
                  {index === 3 && <Cloud className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />}
                  {index === 4 && <div className="text-orange-500 text-sm md:text-base">🤖</div>}
                  {index === 5 && <div className="text-orange-500 text-sm md:text-base">⚙️</div>}
                  {index === 6 && <div className="text-orange-500 text-sm md:text-base">🎨</div>}
                  {index === 7 && <BookOpen className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />}
                  {index === 8 && <Languages className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />}
                  {!([0, 1, 2, 3, 4, 5, 6, 7, 8].includes(index)) && <Code2 className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />}
                </div>
                <h2 className="text-lg md:text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="text-sm py-1 px-3 bg-secondary hover:bg-orange-500/10 hover:text-orange-500 transition-colors cursor-default"
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
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10">
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
            <h2 className="text-2xl md:text-4xl font-bold">Courses</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {courses.map((course) => (
              <a
                key={course.title}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-4 md:p-6 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all block card-glow group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base md:text-lg font-bold">{course.title}</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">{course.institution}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* My Coding Platforms Section */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 text-center">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
            <h2 className="text-xl md:text-2xl font-bold">Coding Platforms</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
            <a
              href="https://www.codechef.com/users/adil_r120"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-4 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all group text-center"
            >
              <Code className="w-8 h-8 md:w-10 md:h-10 text-orange-500 mx-auto mb-2" />
              <div className="text-blue-900 dark:text-blue-100 mb-2 text-sm md:text-base font-medium">CodeChef</div>
              <Badge variant="secondary" className="text-xs"></Badge>
            </a>
            <a
              href="https://leetcode.com/u/adil_r120/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-4 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all group text-center"
            >
              <FileText className="w-8 h-8 md:w-10 md:h-10 text-orange-500 mx-auto mb-2" />
              <div className="text-blue-900 dark:text-blue-100 mb-2 text-sm md:text-base font-medium">LeetCode</div>
              <Badge variant="secondary" className="text-xs"></Badge>
            </a>
            <a
              href="https://www.hackerrank.com/profile/mdadilraza510"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-4 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all group text-center"
            >
              <Terminal className="w-8 h-8 md:w-10 md:h-10 text-orange-500 mx-auto mb-2" />
              <div className="text-blue-900 dark:text-blue-100 mb-2 text-sm md:text-base font-medium">HackerRank</div>
              <Badge variant="secondary" className="text-xs"></Badge>
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/mdadilraza510"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-4 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all group text-center"
            >
              <Server className="w-8 h-8 md:w-10 md:h-10 text-orange-500 mx-auto mb-2" />
              <div className="text-blue-900 dark:text-blue-100 mb-2 text-sm md:text-base font-medium">GeeksforGeeks</div>
              <Badge variant="secondary" className="text-xs"></Badge>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;