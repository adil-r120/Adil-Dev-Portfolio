import Navigation from "@/components/Navigation";
import { Mail, Phone, Linkedin, Github, Instagram, Download, Briefcase } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label:"mdadilraza510@gmail.com",
      href: "mailto:mdadilraza510@gmail.com"
    },
    {
      icon: Phone,
      label: "+91 6203662085",
      href: "tel:+916203662085"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adil-raza-8a1996293/"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/adil-r120"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/adil_r120/"
    },
    {
      icon: Briefcase,
      label: "Naukri",
      href: "https://www.naukri.com/mnjuser/profile?id=&altresid"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20 flex-grow">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">Let's work together</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>
          <div className="w-16 md:w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </header>

        <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-6 md:p-8 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all group"
              >
                <method.icon className="w-8 h-8 md:w-12 md:h-12 text-orange-500 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-sm md:text-sm font-medium">{method.label}</p>
              </a>
            ))}
          </div>

          <div className="bg-card p-6 md:p-8 rounded-lg border border-orange-500/20 space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold">Professional Summary</h2>
            <p className="text-base md:text-muted-foreground leading-relaxed">
              Aspiring Software Engineer passionate about creating innovative solutions 
              through code. Currently pursuing Computer Science Engineering with a focus 
              on Full-Stack Development, Cloud Computing, and AI/ML technologies. 
              Experienced in building web applications, working with cloud platforms, 
              and collaborating on technical projects.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
              <a 
                href="mailto:mdadilraza510@gmail.com" 
                className="px-3 py-2 md:px-4 md:py-2 bg-orange-500/10 rounded-full text-sm border border-orange-500/20 hover:bg-orange-500/20 transition-colors"
              >
                Available for opportunities
              </a>
              <a 
                href="https://www.linkedin.com/in/adil-raza-8a1996293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 md:px-4 md:py-2 bg-orange-500/10 rounded-full text-sm border border-orange-500/20 hover:bg-orange-500/20 transition-colors"
              >
                Open to collaborations
              </a>
            </div>
          </div>
          
          {/* Resume Download Button */}
          <div className="pt-6 md:pt-8">
            <a
              href="/MDADILRAZA(1NH23CS146).pdf"
              download="MDADILRAZA(1NH23CS146).pdf"
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm md:text-base"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;