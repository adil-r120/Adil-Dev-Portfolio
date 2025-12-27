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
  link?: string;
  image?: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Git Training",
      issuer: "EduPyramids, SINE, IIT Bombay",
      icon: "🐙",
      issued: "Nov 2025",
      // credentialId: "44848394TC",
      skills: ["Git"],
      link: "/certificates/git.pdf",
      // image: "/certificates/git.png"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur",
      icon: "☁️",
      issued: "Oct 2025",
      credentialId: "NPTEL25CS107S252601106",
      skills: ["Cloud Computing"],
      link: "/certificates/NPTEL.pdf",
      // image: "/certificates/cloud-computing.png"
    },
    {
      title: "DBMS - Master the Fundamental and Advanced Concepts",
      issuer: "Scaler",
      icon: "🗄️",
      issued: "Oct 2025",
      // credentialId: "@#",
      skills: ["Database Management System (DBMS)"],
      link: "/certificates/DBMS.png",
      // image: "/certificates/dbms.png"
    },
    {
      title: "Symposium on Data for Public Good",
      issuer: "Indian Institute of Science (IISc)",
      icon: "📊",
      issued: "Oct 2025",
      skills: ["Python (Programming Language)", "Data Science", "Cloud Computing"],
      link: "/certificates/iisc.pdf"
    },
    {
      title: "SQL-Bootcamp",
      issuer: "LetsUpgrade",
      icon: "🗄️",
      issued: "Sep 2025",
      // credentialId: "LUESQLSEPT125246",
      skills: ["SQL"],
      link: "/certificates/sql.pdf"
    },
    {
      title: "AWS CLOUD PRACTITIONER ESSENTIAL",
      issuer: "Amazon Web Services (AWS)",
      icon: "☁️",
      issued: "Jul 2025",
      skills: ["Amazon Web Services (AWS)"],
      link: "/certificates/awsa.pdf"
    },
    {
      title: "AWS SimuLearn: Cloud Computing Essentials",
      issuer: "Amazon Web Services (AWS)",
      icon: "☁️",
      issued: "Jul 2025",
      skills: ["Cloud Computing"],
      link: "/certificates/aws training.pdf"
    },
    {
      title: "Google Cloud Arcade Facilitator",
      issuer: "Google",
      icon: "☁️",
      issued: "Apr 2025",
      // credentialId: "@#",
      skills: ["Google Cloud Platform (GCP)"],
      link: "https://www.cloudskillsboost.google/public_profiles/66042bf4-1de9-4045-9c85-de693b5d7287/badges/14604966?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      title: "Html",
      issuer: "Great Learning",
      icon: "🌐",
      issued: "Aug 2024",
      skills: ["HTML"],
      link: "/certificates/html.jpg",
      // image: "/certificates/html.png"
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class",
      icon: "🐍",
      issued: "Jun 2024",
      // credentialId: "c8a3c0d5b1f8472b8d2178bc312a832b",
      skills: ["Python for data science"],
      link: "/certificates/PYTHON2.pdf"
    },
    {
      title: "Data Science 101",
      issuer: "Cognitive Class",
      icon: "📊",
      issued: "May 2024",
      // expires: "Oct 2034",
      // credentialId: "0c120f62302b440a846959499af7e411",
      skills: ["Data Science"],
      link: "/certificates/IBM.a.pdf"
    },
    {
      title: "Python for Data science",
      issuer: "IBM",
      icon: "🐍",
      issued: "May 2024",
      // credentialId: "https://www.credly.com/go/HYtdgjjh",
      skills: ["Python for Data Science"],
      // link: "https://www.credly.com/go/HYtdgjjh"
      link: "/certificates/Python_for_Data_Science_Badge.pdf"
    }
  ];

  const courses = [
    {
      title: "Cloud Computing",
      institution: "IIT Kharagpur",
      link: "https://swayam.gov.in/mycourses"
    },
    {
      title: "Data Structure and Algorithm",
      institution: "PW Skills",
      link: "https://youtu.be/RJ733wzbNoA?si=ew1VgCZ2d1d_sohR"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">Certifications</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mb-12 md:mb-16">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link || '#'}
              target={cert.link && cert.link !== '#' ? '_blank' : undefined}
              rel={cert.link && cert.link !== '#' ? 'noopener noreferrer' : undefined}
              className="bg-card p-4 md:p-6 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all block card-glow"
            >
              <div className="flex items-start gap-3 md:gap-4">
                {cert.image ? (
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-xl md:text-2xl">
                    {cert.icon}
                  </div>
                )}
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
            </a>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-12">
            <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
            <h2 className="text-2xl md:text-4xl font-bold">Courses</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {courses.map((course) => (
              <a
                key={course.title}
                href={course.link}
                target={course.link !== "#" ? "_blank" : undefined}
                rel={course.link !== "#" ? "noopener noreferrer" : undefined}
                className="bg-card p-4 md:p-6 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all block card-glow"
              >
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{course.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{course.institution}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certifications;