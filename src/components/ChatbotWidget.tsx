import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Loader2, Trash2, Sparkles } from "lucide-react";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const SYSTEM_PROMPT = `You are a friendly AI assistant on MD Adil Raza's portfolio website. Answer questions about Adil naturally and professionally. Be concise — 2 to 3 sentences maximum. Do not use headers, section labels, or bullet points unless listing more than 3 items. Never reveal percentages, internal scores, or raw data. If you don't know something, say so politely and suggest visiting the portfolio.

Adil is an aspiring Software Engineer and Full Stack Developer from Bangalore, India, currently pursuing B.E. in Computer Science at New Horizon College of Engineering (2023–2027).

Contact: LinkedIn — linkedin.com/in/mdadilraza-dev | GitHub — github.com/adil-r120 | Portfolio — adil-dev-portfolio.vercel.app

Education: B.E. CSE at NHCE Bangalore (2023–2027). Senior Secondary (PCM, Grade A) at Park Mount Public School Patna. Matric (Grade B) at Nezamia Public School Patna.

Skills: React, TypeScript, Node.js, Python, Java, C++, SQL, MySQL, HTML, CSS, REST APIs, Figma, AWS, Google Cloud, Git, Linux, AI/Data Science, UI/UX Design.

Projects (11 total):
- Client Lead Management System (Mini CRM) — React, Node.js, SQLite | future-fs-02-crm.vercel.app
- Local Business Website — React, Tailwind | future-fs-03-b-b.vercel.app
- SalesPulse (AI Sales Dashboard) — React, Python, LLM, Socket.io | salespulse.vercel.app
- E-commerce Design (Air Jordan) — Figma prototype
- Personal Expense Tracker — Java, React, MySQL
- Portfolio Website — adil-dev-portfolio.vercel.app
- Real-time Weather Detector — weather-dekho-app.vercel.app
- Tic Tac Toe, Amazon Clone, Zepto Clone — HTML/CSS/JS
- Snatix Photography Website — HTML, TypeScript, MySQL | snatix.vercel.app

Experience:
- Full Stack Web Developer Intern at Future Interns (Feb–Mar 2026, Remote) — built CRM, web apps, APIs
- Volunteer Technical Team at NHCE (Oct 2025–Present) — 48-Hour National Hackathon (Silver Spectrum Techfest 2025)

Certifications (12): Git (IIT Bombay), Cloud Computing (NPTEL/IIT Kharagpur), DBMS (Scaler), IISc Data Symposium, SQL Bootcamp, AWS Cloud Practitioner Essentials, AWS SimuLearn, Google Cloud Arcade, HTML (Great Learning), Python 101 & Data Science 101 (Cognitive Class), Python for Data Science (IBM).

Hackathons: Quantum_X 2025 (NHCE, 24-hour), Pixel Pursuit 2024 (Mobile Dev Club, NHCE).

Coding Platforms: CodeChef (adil_r120), LeetCode (adil_r120), HackerRank (mdadilraza510), GeeksforGeeks (mdadilraza510).`;

const SUGGESTIONS = [
    "What projects has Adil built?",
    "What are his top skills?",
    "Tell me about his experience",
    "How can I contact Adil?",
];

const INITIAL_MESSAGE: Message = {
    role: "assistant",
    content: "👋 Hi! I'm Adil's AI assistant. Ask me anything about his projects, skills, or experience!",
};

const TypingDots = () => (
    <div className="flex items-center gap-1 px-3 py-2.5">
        {[0, 1, 2].map((i) => (
            <span
                key={i}
                className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
            />
        ))}
    </div>
);

const URL_REGEX = /(https?:\/\/[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/g;

const renderMessageContent = (text: string) => {
    const parts = text.split(URL_REGEX);
    return parts.map((part, i) => {
        if (URL_REGEX.test(part)) {
            URL_REGEX.lastIndex = 0;
            const href = part.startsWith("http") ? part : `https://${part}`;
            return (
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 opacity-90 hover:opacity-100 break-all"
                >
                    {part}
                </a>
            );
        }
        return <span key={i}>{part}</span>;
    });
};

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const apiKey = import.meta.env.VITE_GROQ_API_KEY as string;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen) {
            setHasNewMessage(false);
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const sendMessage = async (text?: string) => {
        const userMessage = (text ?? input).trim();
        if (!userMessage || isLoading) return;

        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            if (!apiKey) {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: "⚠️ Groq API key not configured. Please add VITE_GROQ_API_KEY to your .env file." },
                ]);
                return;
            }

            const chatMessages = [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.slice(1).map((m) => ({
                    role: m.role === "user" ? "user" : "assistant",
                    content: m.content,
                })),
                { role: "user", content: userMessage },
            ];

            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: chatMessages,
                    max_tokens: 512,
                    temperature: 0.7,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(JSON.stringify(data));
            const reply: string = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

            setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
            if (!isOpen) setHasNewMessage(true);
        } catch (err) {
            const errMsg = err instanceof Error ? err.message : String(err);
            console.error("Chatbot error:", err);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: `⚠️ Error: ${errMsg}` },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => setMessages([INITIAL_MESSAGE]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const showSuggestions = messages.length === 1;

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[320px] flex flex-col bg-card border border-blue-500/20 rounded-2xl shadow-2xl shadow-blue-900/20 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
                    {/* Header */}
                    <div className="flex items-center gap-2 px-3 py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white shrink-0">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 flex items-center justify-center shrink-0 border border-white/10">
                            <img src="/chatbot-logo.png" alt="Bot Logo" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm leading-tight text-white">Adil's AI</p>
                            <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                <p className="text-[10px] text-blue-100/80">Online</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                            <button
                                onClick={clearChat}
                                className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="Clear chat"
                            >
                                <Trash2 className="w-3 h-3" />
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0 max-h-[250px]">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                {msg.role === "assistant" && (
                                    <div className="w-6 h-6 rounded-full bg-blue-900/10 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/10">
                                        <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                    </div>
                                )}
                                <div
                                    className={`max-w-[85%] px-3 py-1.5 rounded-2xl text-[13px] leading-relaxed break-words whitespace-pre-wrap ${msg.role === "user"
                                        ? "bg-blue-900 text-white rounded-br-sm shadow-sm"
                                        : "bg-muted text-foreground rounded-bl-sm border border-border/40"
                                        }`}
                                >
                                    {renderMessageContent(msg.content)}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex gap-2 justify-start animate-in fade-in duration-200">
                                <div className="w-6 h-6 rounded-full bg-blue-900/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="bg-muted rounded-2xl rounded-bl-sm">
                                    <TypingDots />
                                </div>
                            </div>
                        )}

                        {/* Suggestion chips */}
                        {showSuggestions && !isLoading && (
                            <div className="flex flex-wrap gap-1.5 pt-1 animate-in fade-in duration-300">
                                {SUGGESTIONS.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => sendMessage(s)}
                                        className="text-xs px-2.5 py-1 rounded-full border border-blue-500/30 text-blue-900 dark:text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/60 transition-colors text-left"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-border flex gap-2 shrink-0 bg-card">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything..."
                            disabled={isLoading}
                            className="flex-1 text-sm bg-muted rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-muted-foreground disabled:opacity-60"
                        />
                        <button
                            onClick={() => sendMessage()}
                            disabled={!input.trim() || isLoading}
                            className="p-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                            aria-label="Send message"
                        >
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button & Label */}
            <div className={`fixed bottom-8 right-6 z-50 flex flex-col items-center gap-2 group transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none scale-0" : "opacity-100 scale-100"}`}>
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 bg-blue-900 shadow-blue-900/40 overflow-hidden"
                    aria-label="Toggle AI chat"
                >
                    <img
                        src="/chatbot-logo.png"
                        alt="Chatbot Toggle"
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                </button>

                {/* Text below button, shown on hover */}
                <span className="text-[10px] font-bold text-blue-900 dark:text-blue-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 select-none">
                    Ask me
                </span>
            </div>

            {isOpen && (
                <button
                    onClick={() => setIsOpen(false)}
                    className="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 bg-blue-800 hover:bg-blue-700 shadow-blue-900/30 text-white animate-in zoom-in"
                    aria-label="Close AI chat"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
        </>
    );
};

export default ChatbotWidget;
