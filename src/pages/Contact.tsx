import Navigation from "@/components/Navigation";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import Footer from "@/components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "mdadilraza510@gmail.com",
      href: "mailto:mdadilraza510@gmail.com"
    },
    {
      icon: Phone,
      label: "6203662085",
      href: "tel:6203662085"
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
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 md:pt-32 pb-20 flex-grow">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4 md:space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold">Let's work together</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
            Feel free to reach out I’d be happy to connect.
          </p>
          <div className="w-16 md:w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Contact Methods & Summary */}
          <div className="space-y-8 animate-fade-in-up delay-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-6 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all group flex flex-col items-center justify-center text-center hover:shadow-md"
                >
                  <method.icon className="w-8 h-8 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium break-all">{method.label}</p>
                </a>
              ))}
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all hover:shadow-md space-y-4">
              <h2 className="text-xl font-bold">Professional Summary</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Aspiring Software Engineer and Computer Science student with a strong foundation in full-stack development, problem-solving, and modern technologies. Passionate about building scalable, user-centric applications and continuously learning emerging fields such as cloud computing and AI/ML.
              </p>

              <div className="pt-4">
                <a
                  href="/MDADILRAZA(1NH23CS146).pdf"
                  download="MDADILRAZA(1NH23CS146).pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium text-sm w-full sm:w-auto justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="animate-fade-in-up delay-200">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;