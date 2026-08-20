import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import TiltCard from "@/components/TiltCard";
import { ParticleBurst } from "@/components/ParticleBurst";
import { InteractiveParticles } from "@/components/InteractiveParticles";

const skillsPart1 = [
  "React", "TypeScript", "Node.js", "Python", "Java", "SQL",
  "MySQL", "Git & GitHub", "AWS", "Google Cloud", "Figma", "REST APIs",
];

const skillsPart2 = [
  "AI / ML", "Data Science", "Linux", "HTML & CSS", "C++", "DBMS",
  "UI/UX Design", "Cloud Computing", "OOP", "Tailwind CSS", "C", "XML",
];

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Cloud",
  "AI/ML",
];

const Home = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const x = (e.clientX - cx) / cx;
      const y = (e.clientY - cy) / cy;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let ticker = setTimeout(() => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-screen overflow-hidden relative isolate">
      {/* Background Image with Faded Edges */}
      <div
        className="absolute inset-0 w-full h-full -z-20 opacity-10 pointer-events-none"
        style={{
          // backgroundImage: "url('/se-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(circle at center, black 10%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 85%)"
        }}
      />

      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -z-10 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${mouseOffset.x * -25}px, ${mouseOffset.y * -25}px, 0)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-royal/5 rounded-full blur-[100px] -z-10 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${mouseOffset.x * 25}px, ${mouseOffset.y * 25}px, 0)` }}
      />

      {/* Interactive Particles Background */}
      <InteractiveParticles />

      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className="space-y-6 md:space-y-8 animate-fade-in-up transition-transform duration-300 ease-out"
            style={{ transform: `translate3d(${mouseOffset.x * -12}px, ${mouseOffset.y * -12}px, 0)` }}
          >
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-6xl font-bold select-none"
              >
                Hello<span className="text-orange-500">..</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 md:w-16 bg-orange-500"></div>
                <p className="text-lg md:text-xl text-muted-foreground font-medium">I'm MD ADIL RAZA</p>
              </div>
            </div>

            <h2
              className="text-2xl md:text-4xl font-bold h-12 md:h-14 flex items-center select-none"
            >
              Aspiring Software Engineer
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed delay-100 animate-fade-in-up font-medium h-8">
              <span className="text-gradient typing-cursor">{text}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 delay-200 animate-fade-in-up">
              <a
                href="https://github.com/adil-r120"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <ParticleBurst colorTheme="blue">
                  <Button
                    size="lg"
                    className="bg-royal hover:bg-royal-dark text-white w-full sm:w-auto shadow-[0_0_15px_rgba(29,65,175,0.4)] hover:shadow-[0_0_25px_rgba(29,65,175,0.6)] transition-all duration-300 font-semibold"
                  >
                    Got a project?
                  </Button>
                </ParticleBurst>
              </a>
              <a
                href="/certificates/MD_ADIL_RAZA_Resume_2026.pdf"
                download="MD_ADIL_RAZA_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <ParticleBurst colorTheme="orange">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-900 text-blue-900 hover:bg-blue-900/10 w-full sm:w-auto backdrop-blur-sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    My Resume
                  </Button>
                </ParticleBurst>
              </a>
            </div>
          </div>

          <div
            className="flex justify-center md:justify-end md:pr-24 transition-transform duration-300 ease-out"
            style={{ transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0)` }}
          >
            <div className="relative group">
              {/* Intense Royal Blue Glow Layers */}
              <div className="absolute -inset-4 bg-royal/40 rounded-full blur-2xl animate-pulse -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-royal/20 rounded-full blur-3xl -z-10" />

              <TiltCard
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-royal overflow-hidden shadow-[0_0_50px_rgba(29,65,175,0.3)]"
                maxTilt={15}
                glareOpacity={0.15}
              >
                <img
                  src="/p2.webp"
                  alt="AR"
                  className="w-full h-full object-cover object-center"
                />
              </TiltCard>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32">
          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-5 font-semibold">
            Technologies &amp; Skills
          </p>
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee mb-3">
              {[...skillsPart1, ...skillsPart1, ...skillsPart1].map((skill, index) => (
                <span
                  key={`row1-${skill}-${index}`}
                  className="whitespace-nowrap text-sm px-4 py-1.5 rounded-full border border-border text-muted-foreground bg-card hover:border-royal hover:text-royal hover:shadow-[0_0_10px_rgba(29,65,175,0.2)] transition-all cursor-default font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-3 animate-marquee-reverse">
              {[...skillsPart2, ...skillsPart2, ...skillsPart2].map((skill, index) => (
                <span
                  key={`row2-${skill}-${index}`}
                  className="whitespace-nowrap text-sm px-4 py-1.5 rounded-full border border-border text-muted-foreground bg-card hover:border-orange-500 hover:text-orange-500 hover:shadow-[0_0_10px_rgba(249,115,22,0.2)] transition-all cursor-default font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
