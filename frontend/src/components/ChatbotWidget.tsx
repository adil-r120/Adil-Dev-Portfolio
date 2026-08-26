import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Loader2, Trash2, Sparkles } from "lucide-react";
import { projects, certifications, hackathons } from "@/data/portfolioData";

type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
};



const SUGGESTIONS = [
    "What projects has Adil built?",
    "What are his top skills?",
    "Tell me about his experience",
    "How can I contact Adil?",
];

const INITIAL_MESSAGE: Message = {
    id: "init",
    role: "assistant",
    content: "👋 Hi! I'm Adil's AI assistant. Ask me anything about his projects, skills, or experience!",
};

const TypingDots = () => (
    <div className="flex items-center gap-1 px-3 py-2.5">
        {[0, 1, 2].map((i) => (
            <span
                key={i}
                className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse"
                style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
            />
        ))}
    </div>
);

const URL_REGEX = /(https?:\/\/[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/g;

const MessageContent = ({ text }: { text: string }) => {
    const parts = text.split(URL_REGEX);
    return (
        <>
            {parts.map((part, i) => {
                if (URL_REGEX.test(part)) {
                    URL_REGEX.lastIndex = 0;
                    const href = part.startsWith("http") ? part : `https://${part}`;
                    return (
                        <a
                            key={`${part}-${i}`}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 opacity-90 hover:opacity-100 break-all"
                        >
                            {part}
                        </a>
                    );
                }
                return <span key={`${part}-${i}`}>{part}</span>;
            })}
        </>
    );
};

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const hasNewMessageRef = useRef(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);



    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (isOpen) {
            hasNewMessageRef.current = false;
            timeoutId = setTimeout(() => inputRef.current?.focus(), 300);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isOpen]);

    const sendMessage = async (text?: string) => {
        const userMessage = (text ?? input).trim();
        if (!userMessage || isLoading) return;

        setInput("");
        setMessages((prev) => [...prev, { id: Date.now().toString(), role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const history = messages.slice(1).map((m) => ({
                role: m.role === "user" ? "user" : "assistant",
                content: m.content,
            }));

            const portfolioContext = `Projects (${projects.length} total):
${projects.map(p => `- ${p.title} (${p.date}, ${p.category}): ${p.description} | Tags: ${p.tags.join(", ")} | Link: ${p.link || p.github || ""}`).join('\n')}

Certifications (${certifications.length}): 
${certifications.map(c => `- ${c.title} by ${c.issuer} (${c.issued || ""}) - Skills: ${c.skills?.join(", ") || ""}`).join('\n')}

Hackathons (${hackathons.length}):
${hackathons.map(h => `- ${h.title} (${h.date}): ${h.description}`).join('\n')}`;

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userMessage,
                    history,
                    portfolioContext,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(JSON.stringify(data));
            const reply: string = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

            setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: reply }]);
        } catch (err) {
            const errMsg = err instanceof Error ? err.message : String(err);
            console.error("Chatbot error:", err);
            setMessages((prev) => [
                ...prev,
                { id: (Date.now() + 1).toString(), role: "assistant", content: `⚠️ Error: ${errMsg}` },
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
                            <img src="/chatbot-logo.webp" alt="Bot Logo" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
                                type="button"
                                onClick={clearChat}
                                className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                                aria-label="Clear chat"
                            >
                                <Trash2 className="w-3 h-3" />
                            </button>
                            <button
                                type="button"
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
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
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
                                    <MessageContent text={msg.content} />
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
                                        type="button"
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
                            aria-label="Chatbot input"
                            disabled={isLoading}
                            className="flex-1 text-sm bg-muted rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-muted-foreground disabled:opacity-60"
                        />
                        <button
                            type="button"
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
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 bg-blue-900 shadow-blue-900/40 overflow-hidden"
                    aria-label="Toggle AI chat"
                >
                    <img
                        src="/chatbot-logo.webp"
                        alt="Chatbot Toggle"
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                </button>

                {/* Text below button */}
                <span className="text-[10px] font-bold text-blue-900 dark:text-blue-400 uppercase tracking-widest select-none">
                    Ask me
                </span>
            </div>

            {isOpen && (
                <button
                    type="button"
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
