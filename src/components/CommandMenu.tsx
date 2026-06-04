import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Mail, 
  Moon, 
  Sun,
  Search,
  FolderDot
} from "lucide-react";

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const openMenu = () => setOpen(true);

    document.addEventListener("keydown", down);
    document.addEventListener("open-command-menu", openMenu);
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("open-command-menu", openMenu);
    };
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const baseItemClass = "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent hover:text-accent-foreground transition-colors mb-1";

  return (
    <Command.Dialog 
      open={open} 
      onOpenChange={setOpen}
      className="fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%] rounded-xl border bg-popover text-popover-foreground shadow-lg shadow-black/20 outline-none sm:rounded-xl overflow-hidden"
    >
      <div className="flex items-center border-b px-3 text-muted-foreground">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <Command.Input 
          autoFocus
          placeholder="Type a command or search..." 
          className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
        />
      </div>
      <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 text-foreground">
        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
          No results found.
        </Command.Empty>
        
        <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
          
          <Command.Item value="home" onSelect={() => runCommand(() => navigate("/"))} className={baseItemClass}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </Command.Item>
          
          <Command.Item value="about" onSelect={() => runCommand(() => navigate("/about"))} className={baseItemClass}>
            <User className="mr-2 h-4 w-4" />
            <span>About</span>
          </Command.Item>
          
          <Command.Item value="skills" onSelect={() => runCommand(() => navigate("/skills"))} className={baseItemClass}>
            <Code2 className="mr-2 h-4 w-4" />
            <span>Skills</span>
          </Command.Item>
          
          <Command.Item value="experiences" onSelect={() => runCommand(() => navigate("/experiences"))} className={baseItemClass}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Experiences</span>
          </Command.Item>
          
          <Command.Item value="projects" onSelect={() => runCommand(() => navigate("/projects"))} className={baseItemClass}>
            <FolderDot className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </Command.Item>
          
          <Command.Item value="certifications" onSelect={() => runCommand(() => navigate("/certifications"))} className={baseItemClass}>
            <GraduationCap className="mr-2 h-4 w-4" />
            <span>Certifications</span>
          </Command.Item>
          
          <Command.Item value="contact" onSelect={() => runCommand(() => navigate("/contact"))} className={baseItemClass}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </Command.Item>

        </Command.Group>
        
        <Command.Separator className="-mx-1 h-px bg-border my-1" />
        
        <Command.Group heading="Settings" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
          <Command.Item value="theme" onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))} className={baseItemClass}>
            {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
            <span>Toggle Theme</span>
          </Command.Item>
        </Command.Group>

      </Command.List>
    </Command.Dialog>
  );
};
export default CommandMenu;
