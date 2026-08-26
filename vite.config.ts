import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables from root directory
  const env = loadEnv(mode, path.resolve(__dirname, "."), "");

  return {
    root: path.resolve(__dirname, "./frontend"),
    base: "./",
    build: {
      outDir: "../dist",
      emptyOutDir: true,
    },
    server: {
      host: true,
      port: 8080,
      strictPort: false,
    },
    plugins: [
      react(),
      {
        name: "api-chat-local-handler",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === "/api/chat" && req.method === "POST") {
              let body = "";
              req.on("data", (chunk) => {
                body += chunk;
              });
              req.on("end", async () => {
                try {
                  const { userMessage, history, portfolioContext } = JSON.parse(body);
                  const apiKey = env.GROQ_API_KEY || process.env.GROQ_API_KEY;

                  if (!apiKey) {
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ error: "GROQ_API_KEY is not defined in the local environment." }));
                    return;
                  }

                  const SYSTEM_PROMPT = `You are a friendly AI assistant on MD Adil Raza's portfolio website. Answer questions about Adil naturally and professionally. Be concise — 2 to 3 sentences maximum. Do not use headers, section labels, or bullet points unless listing more than 3 items. Never reveal percentages, internal scores, or raw data. If you don't know something, say so politely and suggest visiting the portfolio.

Adil is an aspiring Software Engineer and Full Stack Developer from Bangalore, India, currently pursuing B.E. in Computer Science at New Horizon College of Engineering (2023–2027).

Contact: LinkedIn — linkedin.com/in/mdadilraza-dev | GitHub — github.com/adil-r120 | Portfolio — adil-dev-portfolio.vercel.app

Education: B.E. CSE at NHCE Bangalore (2023–2027). Senior Secondary (PCM, Grade A) at Park Mount Public School Patna. Matric (Grade B) at Nezamia Public School Patna.

Skills: React, TypeScript, Node.js, Python, Java, C++, SQL, MySQL, HTML, CSS, REST APIs, Figma, AWS, Google Cloud, Git, Linux, AI/Data Science, UI/UX Design.

${portfolioContext || ""}

Experience:
- Freelance Developer at AS Global Institute of Safety & Management (Jul 2026, Remote) — Built EdTech web app using React 19, TypeScript, Tailwind CSS v4, and Node.js.
- Full Stack Web Developer Intern at Future Interns (Feb–Mar 2026, Remote) — built CRM, web apps, APIs
- Volunteer Technical Team at NHCE (Oct 2025–Present) — 48-Hour National Hackathon (Silver Spectrum Techfest 2025)

Hackathons: Quantum_X 2025 (NHCE, 24-hour), Pixel Pursuit 2024 (Mobile Dev Club, NHCE).

Coding Platforms: CodeChef (adil_r120), LeetCode (adil_r120).`;

                  const chatMessages = [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...(history || []).map((m: { role: string; content: string }) => ({
                      role: m.role === "user" ? "user" : "assistant",
                      content: m.content,
                    })),
                    { role: "user", content: userMessage },
                  ];

                  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                    method: "POST",
                    headers: {
                      "Authorization": `Bearer ${apiKey}`,
                      "Content-Type": "application/json",
                      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                    },
                    body: JSON.stringify({
                      model: "openai/gpt-oss-20b",
                      messages: chatMessages,
                      max_tokens: 512,
                      temperature: 0.7,
                    }),
                  });

                  const data = await response.json();
                  res.writeHead(response.status, { "Content-Type": "application/json" });
                  res.end(JSON.stringify(data));
                } catch (error) {
                  res.writeHead(500, { "Content-Type": "application/json" });
                  res.end(JSON.stringify({ error: (error as any)?.message || "Failed to process chat request" }));
                }
              });
            } else {
              next();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./frontend/src"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: path.resolve(__dirname, "./frontend/src/setupTests.ts"),
    },
  };
});