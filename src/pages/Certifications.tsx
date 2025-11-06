import Navigation from "@/components/Navigation";
import { Award, Trophy, Calendar, IdCard } from "lucide-react";

// Define the type for certifications
type Certification = {
  title: string;
  issuer: string;
  icon: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  skills?: string[];
  description?: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "DBMS - Master the Fundamental and Advanced Concepts",
      issuer: "Scaler",
      icon: "🗄️",
      issued: "Oct 2025",
      credentialId: "@#",
      skills: ["Database Management System (DBMS)"]
    },
    {
      title: "Symposium on Data for Public Good",
      issuer: "Indian Institute of Science (IISc)",
      icon: "📊",
      issued: "Oct 2025",
      skills: ["Python (Programming Language)", "Data Science", "Cloud Computing"]
    },
    {
      title: "SQL-Bootcamp",
      issuer: "LetsUpgrade",
      icon: "🗄️",
      issued: "Sep 2025",
      credentialId: "LUESQLSEPT125246",
      skills: ["SQL"]
    },
    {
      title: "AWS CLOUD PRACTITIONER ESSENTIAL",
      issuer: "Amazon Web Services (AWS)",
      icon: "☁️",
      issued: "Jul 2025",
      skills: ["Amazon Web Services (AWS)"]
    },
    {
      title: "AWS SimuLearn: Cloud Computing Essentials",
      issuer: "Amazon Web Services (AWS)",
      icon: "☁️",
      issued: "Jul 2025",
      skills: ["Cloud Computing"]
    },
    {
      title: "Google Cloud Arcade Facilitator",
      issuer: "Google",
      icon: "☁️",
      issued: "Apr 2025",
      credentialId: "@#",
      skills: ["Google Cloud Platform (GCP)"]
    },
    {
      title: "Html",
      issuer: "Great Learning",
      icon: "🌐",
      issued: "Aug 2024",
      skills: ["HTML"]
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class",
      icon: "🐍",
      issued: "Jun 2024",
      credentialId: "c8a3c0d5b1f8472b8d2178bc312a832b",
      skills: ["Python for data science"]
    },
    {
      title: "Data Science 101",
      issuer: "Cognitive Class",
      icon: "📊",
      issued: "May 2024",
      expires: "Oct 2034",
      credentialId: "0c120f62302b440a846959499af7e411",
      skills: ["Data Science"]
    },
    {
      title: "Python for Data science",
      issuer: "IBM",
      icon: "🐍",
      issued: "May 2024",
      credentialId: "https://www.credly.com/go/HYtdgjjh",
      skills: ["Python for Data Science"]
    }
  ];

  const courses = [
    {
      title: "Cloud Computing",
      institution: "IIT Kharagpur"
    },
    {
      title: "Data Structure and Algorithm",
      institution: "PW Skills"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">Certifications</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mb-12 md:mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-4 md:p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-xl md:text-2xl">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1 md:mb-2 leading-tight text-sm md:text-base">{cert.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">{cert.issuer}</p>
                  
                  {cert.issued && (
                    <div className="flex items-center gap-1 text-[0.6rem] md:text-xs text-muted-foreground mb-1">
                      <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span>Issued {cert.issued}</span>
                    </div>
                  )}
                  
                  {cert.expires && (
                    <div className="text-[0.6rem] md:text-xs text-muted-foreground mb-1">
                      Expires {cert.expires}
                    </div>
                  )}
                  
                  {cert.credentialId && (
                    <div className="flex items-center gap-1 text-[0.6rem] md:text-xs text-muted-foreground mb-1 md:mb-2">
                      <IdCard className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>
                  )}
                  
                  {cert.description && (
                    <p className="text-[0.6rem] md:text-xs text-muted-foreground mt-1 md:mt-2">
                      {cert.description}
                    </p>
                  )}
                  
                  {cert.skills && (
                    <div className="mt-2 md:mt-3 flex flex-wrap gap-1">
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
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-12">
            <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
            <h2 className="text-2xl md:text-4xl font-bold">Courses Completed</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-card p-4 md:p-6 rounded-lg border border-orange-500/20"
              >
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{course.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{course.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certifications;