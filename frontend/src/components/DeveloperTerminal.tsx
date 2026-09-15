import React, { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CommandHistory {
    command: string;
    output: React.ReactNode;
}

export const DeveloperTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandHistory[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const endRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Toggle terminal with Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Scroll to bottom on new output
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();
        let output: React.ReactNode = "";

        switch (trimmed) {
            case "help":
                output = (
                    <div className="text-gray-300">
                        Available commands:
                        <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                            <li><span className="text-green-400 font-mono">about</span> - Who am I?</li>
                            <li><span className="text-green-400 font-mono">projects</span> - View my work</li>
                            <li><span className="text-green-400 font-mono">skills</span> - View my tech stack</li>
                            <li><span className="text-green-400 font-mono">experience</span> - View my journey</li>
                            <li><span className="text-green-400 font-mono">resume</span> - Download my resume</li>
                            <li><span className="text-green-400 font-mono">contact</span> - Get in touch</li>
                            <li><span className="text-green-400 font-mono">theme</span> - Toggle dark/light mode</li>
                            <li><span className="text-green-400 font-mono">clear</span> - Clear terminal history</li>
                        </ul>
                    </div>
                );
                break;
            case "about":
                output = "Hi, I'm MD Adil Raza! A Computer Science Engineering student and Full Stack Developer passionate about building scalable, high-performance applications.";
                break;
            case "projects":
                output = "Navigating to /projects...";
                setTimeout(() => {
                    navigate("/projects");
                    setIsOpen(false);
                }, 800);
                break;
            case "skills":
                output = "Navigating to /skills...";
                setTimeout(() => {
                    navigate("/skills");
                    setIsOpen(false);
                }, 800);
                break;
            case "experience":
                output = "Navigating to /experiences...";
                setTimeout(() => {
                    navigate("/experiences");
                    setIsOpen(false);
                }, 800);
                break;
            case "resume":
                output = "Opening resume...";
                setTimeout(() => {
                    window.open("/certificates/MD_ADIL_RAZA_Resume.pdf", "_blank");
                    setIsOpen(false);
                }, 800);
                break;
            case "contact":
                output = (
                    <div>
                        <p>Email: <a href="mailto:mdadilraza510@gmail.com" className="text-blue-400 hover:underline">mdadilraza510@gmail.com</a></p>
                        <p>WhatsApp: <a href="https://wa.me/916203662085" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">+91 6203662085</a></p>
                        <p>Navigating to /contact...</p>
                    </div>
                );
                setTimeout(() => {
                    navigate("/contact");
                    setIsOpen(false);
                }, 1500);
                break;
            case "theme":
                const isDark = document.documentElement.classList.toggle("dark");
                output = `Theme switched to ${isDark ? "Dark" : "Light"} mode.`;
                break;
            case "clear":
                setHistory([]);
                return;
            case "sudo":
            case "sudo rm -rf /":
                output = <span className="text-red-500">Nice try! You do not have root privileges on this server. 😉</span>;
                break;
            case "":
                output = "";
                break;
            default:
                output = <span className="text-red-400">Command not found: {trimmed}. Type 'help' for a list of commands.</span>;
        }

        setHistory((prev) => [...prev, { command: cmd, output }]);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput("");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
                className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
                    <div className="flex items-center gap-2 text-zinc-400">
                        <TerminalIcon className="w-4 h-4" />
                        <span>guest@adil-portfolio ~</span>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 p-4 min-h-[300px] max-h-[60vh] overflow-y-auto text-gray-100">
                    <div className="mb-4 text-green-400">
                        Welcome to the Developer Terminal. Type 'help' to see available commands.
                    </div>

                    {history.map((entry, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex items-center gap-2 text-blue-400">
                                <span>guest@adil-portfolio:~$</span>
                                <span className="text-gray-100">{entry.command}</span>
                            </div>
                            {entry.output && (
                                <div className="mt-1 ml-4 whitespace-pre-wrap">{entry.output}</div>
                            )}
                        </div>
                    ))}

                    <form onSubmit={onSubmit} className="flex items-center gap-2 text-blue-400">
                        <span>guest@adil-portfolio:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-gray-100 placeholder-zinc-700"
                            autoComplete="off"
                            spellCheck="false"
                        />
                    </form>

                    <div className="mt-4 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2 text-xs text-zinc-500">
                        <span>Try:</span>
                        {["projects", "skills", "experience", "resume", "theme", "clear"].map((cmd) => (
                            <button
                                key={cmd}
                                onClick={() => {
                                    handleCommand(cmd);
                                    setInput("");
                                }}
                                className="hover:text-blue-400 hover:underline transition-colors focus:outline-none focus:text-blue-400"
                            >
                                [{cmd}]
                            </button>
                        ))}
                    </div>

                    <div ref={endRef} />
                </div>
            </div>
        </div>
    );
};

export default DeveloperTerminal;
