import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  const skills = [
    "Artificial Intelligence (AI)", "GitHub", "REST APIs", "SQL", "DBMS", 
    "User Experience Design (UED)", /*"Hindi",*/ 
    "Java Frameworks", "HTML", "Software Development", 
    "Cloud Computing","Wireframing", "Operating Systems", "Linux", 
    "Amazon Web Services (AWS)", "C++", "Java", "Object-Oriented Programming (OOP)", 
    "Google Cloud Platform (GCP)", "XML", "Figma (Software)", "CSS","Python for data science","Python (Programming Language)", "C"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hello<span className="text-orange-500">..</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 md:w-16 bg-orange-500"></div>
                <p className="text-lg md:text-xl text-muted-foreground">I'm MD ADIL RAZA</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold">Aspiring Software Engineer</h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Full Stack Enthusiast | Passionate About AI, Web Development & Cloud Computing
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://github.com/adil-r120?tab=projects" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                >
                  Got a project?
                </Button>
              </a>
              <a href="/MDADILRAZA(1NH23CS146).pdf" download="MDADILRAZA(1NH23CS146).pdf">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-500 text-orange-500 hover:bg-orange-500/10 w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  My Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl"></div>
              <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-orange-500 overflow-hidden">
                {/* profile image */}
                <img 
                  src="/profile_image.png"
                  alt="MD Adil Raza" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 md:mt-32 overflow-hidden">
          <div className="flex gap-4 md:gap-8 animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <span
                key={index}
                className="text-muted-foreground whitespace-nowrap text-base md:text-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;