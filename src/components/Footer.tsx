import { Heart, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-blue-500/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            {/* <span>Built with</span>
            <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> */}
            <span>MD ADIL RAZA</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/adil-r120"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-blue-900/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mdadilraza-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-muted-foreground hover:text-blue-600 hover:bg-blue-500/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="text-sm text-muted-foreground">© 2026 All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;