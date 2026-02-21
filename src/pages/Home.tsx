import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react"; // Added useState and useEffect

const Home = () => {
  const skills = [
    "Artificial Intelligence (AI)", "GitHub", "REST APIs", "SQL", "DBMS",
    "User Experience Design (UED)",
    "Java Frameworks", "HTML", "Software Development",
    "Cloud Computing", "Wireframing", "Operating Systems", "Linux",
    "Amazon Web Services (AWS)", "C++", "Java", "Object-Oriented Programming (OOP)",
    "Google Cloud Platform (GCP)", "XML", "Figma (Software)", "CSS", "Python for data science", "Python (Programming Language)", "C"
  ];

  const roles = [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "Cloud Enthusiast",
    "AI Enthusiast"
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -z-10 animate-fade-in-up delay-500"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px] -z-10 animate-fade-in-up delay-500"></div>

      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hello<span className="text-orange-500">..</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 md:w-16 bg-orange-500"></div>
                <p className="text-lg md:text-xl text-muted-foreground font-medium">I'm MD ADIL RAZA</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold h-12 md:h-14 flex items-center">
              Aspiring Software Engineer
            </h2>

            <p className="text-base md:text-xl text-muted-foreground max-w-lg leading-relaxed delay-100 animate-fade-in-up">
              Full Stack Enthusiast | Passionate About AI, Web Development & Cloud Computing
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 delay-200 animate-fade-in-up">
              <a
                href="https://github.com/adil-r120"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-blue-900 hover:bg-blue-800 text-white w-full sm:w-auto shadow-lg shadow-blue-900/25 hover:shadow-blue-900/40 transition-all duration-300"
                >
                  Got a project?
                </Button>
              </a>
              <a href="/MD-ADIL-RAZA-Resume.pdf" download="MD-ADIL-RAZA-Resume.pdf">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900/10 w-full sm:w-auto backdrop-blur-sm"
                >
                  <Download className="mr-2 h-4 w-4" />
                  My Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end md:pr-24">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-900/20 rounded-full blur-3xl"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-blue-900 overflow-hidden">
                {/* profile image */}
                <img
                  src="/AR_logo.jpg"
                  alt="AR"
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