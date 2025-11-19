import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Globe, BookOpen, Languages } from "lucide-react";

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
    }
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
              className="bg-card p-4 md:p-8 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all"
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
                  {!([0,1,2,3,4,5,6,7,8].includes(index)) && <Code2 className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />}
                </div>
                <h2 className="text-lg md:text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-2 md:space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-xs md:text-sm">{skill.name}</span>
                    <ProgressBar proficiency={skill.proficiency} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;