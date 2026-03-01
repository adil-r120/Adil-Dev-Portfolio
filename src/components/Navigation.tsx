import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/experiences", label: "Experiences" },
    { path: "/projects", label: "Projects" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/90 backdrop-blur-md border-b border-blue-900/10"
        : "bg-background/80 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 transition-transform group-hover:scale-110">
            <img src="/logo_new.svg" alt="AR Logo" className="w-full h-full" />
          </div>
          <span className="text-xl font-bold">MD ADIL RAZA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors hover:text-orange-500 ${location.pathname === link.path
                ? "text-orange-500 font-medium"
                : "text-foreground/80"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/mdadilraza-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-blue-900/10 text-blue-900 dark:text-blue-400 hover:bg-blue-900/20 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-blue-900/10 text-blue-900 dark:text-blue-400 hover:bg-blue-900/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-foreground/80 hover:text-orange-500 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-blue-900/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-base transition-colors ${location.pathname === link.path
                  ? "text-orange-500 bg-orange-500/10"
                  : "text-foreground/80 hover:text-orange-500 hover:bg-orange-500/5"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/mdadilraza-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-base text-foreground/80 hover:text-blue-600 hover:bg-blue-500/5"
              onClick={closeMenu}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-base text-foreground/80 hover:text-orange-500 hover:bg-orange-500/5 w-full"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;