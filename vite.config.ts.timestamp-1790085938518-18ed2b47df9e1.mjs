// vite.config.ts
import react from "file:///C:/Users/mdadi/Downloads/My_Portfolio/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { defineConfig, loadEnv } from "file:///C:/Users/mdadi/Downloads/My_Portfolio/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\mdadi\\Downloads\\My_Portfolio";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__vite_injected_original_dirname, "."), "");
  return {
    root: path.resolve(__vite_injected_original_dirname, "./frontend"),
    base: "./",
    build: {
      outDir: "../dist",
      emptyOutDir: true
    },
    server: {
      host: true,
      port: 8080,
      strictPort: false
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
                  const SYSTEM_PROMPT = `You are a friendly AI assistant on MD Adil Raza's portfolio website. Answer questions about Adil naturally and professionally. Be concise \u2014 2 to 3 sentences maximum. Do not use headers, section labels, or bullet points unless listing more than 3 items. Never reveal percentages, internal scores, or raw data. If you don't know something, say so politely and suggest visiting the portfolio.

Adil is an aspiring Software Engineer and Full Stack Developer from Bangalore, India, currently pursuing B.E. in Computer Science at New Horizon College of Engineering (2023\u20132027).

Contact: LinkedIn \u2014 linkedin.com/in/mdadilraza-dev | GitHub \u2014 github.com/adil-r120 | Portfolio \u2014 adil-dev-portfolio.vercel.app

Education: B.E. CSE at NHCE Bangalore (2023\u20132027). Senior Secondary (PCM, Grade A) at Park Mount Public School Patna. Matric (Grade B) at Nezamia Public School Patna.

Skills: React, TypeScript, Node.js, Python, Java, C++, SQL, MySQL, HTML, CSS, REST APIs, Figma, AWS, Google Cloud, Git, Linux, AI/Data Science, UI/UX Design.

${portfolioContext || ""}

Experience:
- Freelance Developer at AS Global Institute of Safety & Management (Jul 2026, Remote) \u2014 Built EdTech web app using React 19, TypeScript, Tailwind CSS v4, and Node.js.
- Full Stack Web Developer Intern at Future Interns (Feb\u2013Mar 2026, Remote) \u2014 built CRM, web apps, APIs
- Volunteer Technical Team at NHCE (Oct 2025\u2013Present) \u2014 48-Hour National Hackathon (Silver Spectrum Techfest 2025)

Hackathons: Quantum_X 2025 (NHCE, 24-hour), Pixel Pursuit 2024 (Mobile Dev Club, NHCE).

Coding Platforms: CodeChef (adil_r120), LeetCode (adil_r120).`;
                  const chatMessages = [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...(history || []).map((m) => ({
                      role: m.role === "user" ? "user" : "assistant",
                      content: m.content
                    })),
                    { role: "user", content: userMessage }
                  ];
                  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                    method: "POST",
                    headers: {
                      "Authorization": `Bearer ${apiKey}`,
                      "Content-Type": "application/json",
                      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                    },
                    body: JSON.stringify({
                      model: "openai/gpt-oss-20b",
                      messages: chatMessages,
                      max_tokens: 512,
                      temperature: 0.7
                    })
                  });
                  const data = await response.json();
                  res.writeHead(response.status, { "Content-Type": "application/json" });
                  res.end(JSON.stringify(data));
                } catch (error) {
                  res.writeHead(500, { "Content-Type": "application/json" });
                  res.end(JSON.stringify({ error: error?.message || "Failed to process chat request" }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./frontend/src")
      }
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: path.resolve(__vite_injected_original_dirname, "./frontend/src/setupTests.ts")
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZGFkaVxcXFxEb3dubG9hZHNcXFxcTXlfUG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZGFkaVxcXFxEb3dubG9hZHNcXFxcTXlfUG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tZGFkaS9Eb3dubG9hZHMvTXlfUG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICAvLyBMb2FkIGVudiB2YXJpYWJsZXMgZnJvbSByb290IGRpcmVjdG9yeVxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLlwiKSwgXCJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vZnJvbnRlbmRcIiksXG4gICAgYmFzZTogXCIuL1wiLFxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6IFwiLi4vZGlzdFwiLFxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IHRydWUsXG4gICAgICBwb3J0OiA4MDgwLFxuICAgICAgc3RyaWN0UG9ydDogZmFsc2UsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImFwaS1jaGF0LWxvY2FsLWhhbmRsZXJcIixcbiAgICAgICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVxLnVybCA9PT0gXCIvYXBpL2NoYXRcIiAmJiByZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgICAgICAgICAgICBsZXQgYm9keSA9IFwiXCI7XG4gICAgICAgICAgICAgIHJlcS5vbihcImRhdGFcIiwgKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgYm9keSArPSBjaHVuaztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJlcS5vbihcImVuZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXNlck1lc3NhZ2UsIGhpc3RvcnksIHBvcnRmb2xpb0NvbnRleHQgfSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhcGlLZXkgPSBlbnYuR1JPUV9BUElfS0VZIHx8IHByb2Nlc3MuZW52LkdST1FfQVBJX0tFWTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCFhcGlLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLndyaXRlSGVhZCg1MDAsIHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJHUk9RX0FQSV9LRVkgaXMgbm90IGRlZmluZWQgaW4gdGhlIGxvY2FsIGVudmlyb25tZW50LlwiIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjb25zdCBTWVNURU1fUFJPTVBUID0gYFlvdSBhcmUgYSBmcmllbmRseSBBSSBhc3Npc3RhbnQgb24gTUQgQWRpbCBSYXphJ3MgcG9ydGZvbGlvIHdlYnNpdGUuIEFuc3dlciBxdWVzdGlvbnMgYWJvdXQgQWRpbCBuYXR1cmFsbHkgYW5kIHByb2Zlc3Npb25hbGx5LiBCZSBjb25jaXNlIFx1MjAxNCAyIHRvIDMgc2VudGVuY2VzIG1heGltdW0uIERvIG5vdCB1c2UgaGVhZGVycywgc2VjdGlvbiBsYWJlbHMsIG9yIGJ1bGxldCBwb2ludHMgdW5sZXNzIGxpc3RpbmcgbW9yZSB0aGFuIDMgaXRlbXMuIE5ldmVyIHJldmVhbCBwZXJjZW50YWdlcywgaW50ZXJuYWwgc2NvcmVzLCBvciByYXcgZGF0YS4gSWYgeW91IGRvbid0IGtub3cgc29tZXRoaW5nLCBzYXkgc28gcG9saXRlbHkgYW5kIHN1Z2dlc3QgdmlzaXRpbmcgdGhlIHBvcnRmb2xpby5cblxuQWRpbCBpcyBhbiBhc3BpcmluZyBTb2Z0d2FyZSBFbmdpbmVlciBhbmQgRnVsbCBTdGFjayBEZXZlbG9wZXIgZnJvbSBCYW5nYWxvcmUsIEluZGlhLCBjdXJyZW50bHkgcHVyc3VpbmcgQi5FLiBpbiBDb21wdXRlciBTY2llbmNlIGF0IE5ldyBIb3Jpem9uIENvbGxlZ2Ugb2YgRW5naW5lZXJpbmcgKDIwMjNcdTIwMTMyMDI3KS5cblxuQ29udGFjdDogTGlua2VkSW4gXHUyMDE0IGxpbmtlZGluLmNvbS9pbi9tZGFkaWxyYXphLWRldiB8IEdpdEh1YiBcdTIwMTQgZ2l0aHViLmNvbS9hZGlsLXIxMjAgfCBQb3J0Zm9saW8gXHUyMDE0IGFkaWwtZGV2LXBvcnRmb2xpby52ZXJjZWwuYXBwXG5cbkVkdWNhdGlvbjogQi5FLiBDU0UgYXQgTkhDRSBCYW5nYWxvcmUgKDIwMjNcdTIwMTMyMDI3KS4gU2VuaW9yIFNlY29uZGFyeSAoUENNLCBHcmFkZSBBKSBhdCBQYXJrIE1vdW50IFB1YmxpYyBTY2hvb2wgUGF0bmEuIE1hdHJpYyAoR3JhZGUgQikgYXQgTmV6YW1pYSBQdWJsaWMgU2Nob29sIFBhdG5hLlxuXG5Ta2lsbHM6IFJlYWN0LCBUeXBlU2NyaXB0LCBOb2RlLmpzLCBQeXRob24sIEphdmEsIEMrKywgU1FMLCBNeVNRTCwgSFRNTCwgQ1NTLCBSRVNUIEFQSXMsIEZpZ21hLCBBV1MsIEdvb2dsZSBDbG91ZCwgR2l0LCBMaW51eCwgQUkvRGF0YSBTY2llbmNlLCBVSS9VWCBEZXNpZ24uXG5cbiR7cG9ydGZvbGlvQ29udGV4dCB8fCBcIlwifVxuXG5FeHBlcmllbmNlOlxuLSBGcmVlbGFuY2UgRGV2ZWxvcGVyIGF0IEFTIEdsb2JhbCBJbnN0aXR1dGUgb2YgU2FmZXR5ICYgTWFuYWdlbWVudCAoSnVsIDIwMjYsIFJlbW90ZSkgXHUyMDE0IEJ1aWx0IEVkVGVjaCB3ZWIgYXBwIHVzaW5nIFJlYWN0IDE5LCBUeXBlU2NyaXB0LCBUYWlsd2luZCBDU1MgdjQsIGFuZCBOb2RlLmpzLlxuLSBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIgSW50ZXJuIGF0IEZ1dHVyZSBJbnRlcm5zIChGZWJcdTIwMTNNYXIgMjAyNiwgUmVtb3RlKSBcdTIwMTQgYnVpbHQgQ1JNLCB3ZWIgYXBwcywgQVBJc1xuLSBWb2x1bnRlZXIgVGVjaG5pY2FsIFRlYW0gYXQgTkhDRSAoT2N0IDIwMjVcdTIwMTNQcmVzZW50KSBcdTIwMTQgNDgtSG91ciBOYXRpb25hbCBIYWNrYXRob24gKFNpbHZlciBTcGVjdHJ1bSBUZWNoZmVzdCAyMDI1KVxuXG5IYWNrYXRob25zOiBRdWFudHVtX1ggMjAyNSAoTkhDRSwgMjQtaG91ciksIFBpeGVsIFB1cnN1aXQgMjAyNCAoTW9iaWxlIERldiBDbHViLCBOSENFKS5cblxuQ29kaW5nIFBsYXRmb3JtczogQ29kZUNoZWYgKGFkaWxfcjEyMCksIExlZXRDb2RlIChhZGlsX3IxMjApLmA7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXRNZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBTWVNURU1fUFJPTVBUIH0sXG4gICAgICAgICAgICAgICAgICAgIC4uLihoaXN0b3J5IHx8IFtdKS5tYXAoKG06IHsgcm9sZTogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICByb2xlOiBtLnJvbGUgPT09IFwidXNlclwiID8gXCJ1c2VyXCIgOiBcImFzc2lzdGFudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG0uY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiB1c2VyTWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdyb3EuY29tL29wZW5haS92MS9jaGF0L2NvbXBsZXRpb25zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJVc2VyLUFnZW50XCI6IFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyMC4wLjAuMCBTYWZhcmkvNTM3LjM2XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDogXCJvcGVuYWkvZ3B0LW9zcy0yMGJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogY2hhdE1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgIG1heF90b2tlbnM6IDUxMixcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgcmVzLndyaXRlSGVhZChyZXNwb25zZS5zdGF0dXMsIHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XG4gICAgICAgICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgcmVzLndyaXRlSGVhZCg1MDAsIHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XG4gICAgICAgICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IChlcnJvciBhcyBhbnkpPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIHByb2Nlc3MgY2hhdCByZXF1ZXN0XCIgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9mcm9udGVuZC9zcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGVzdDoge1xuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gICAgICBzZXR1cEZpbGVzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vZnJvbnRlbmQvc3JjL3NldHVwVGVzdHMudHNcIiksXG4gICAgfSxcbiAgfTtcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlMsT0FBTyxXQUFXO0FBQzdULE9BQU8sVUFBVTtBQUNqQixTQUFTLGNBQWMsZUFBZTtBQUZ0QyxJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUV4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLEtBQUssUUFBUSxrQ0FBVyxHQUFHLEdBQUcsRUFBRTtBQUUxRCxTQUFPO0FBQUEsSUFDTCxNQUFNLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsSUFDMUMsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sZ0JBQWdCLFFBQVE7QUFDdEIsaUJBQU8sWUFBWSxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVM7QUFDL0MsZ0JBQUksSUFBSSxRQUFRLGVBQWUsSUFBSSxXQUFXLFFBQVE7QUFDcEQsa0JBQUksT0FBTztBQUNYLGtCQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVU7QUFDeEIsd0JBQVE7QUFBQSxjQUNWLENBQUM7QUFDRCxrQkFBSSxHQUFHLE9BQU8sWUFBWTtBQUN4QixvQkFBSTtBQUNGLHdCQUFNLEVBQUUsYUFBYSxTQUFTLGlCQUFpQixJQUFJLEtBQUssTUFBTSxJQUFJO0FBQ2xFLHdCQUFNLFNBQVMsSUFBSSxnQkFBZ0IsUUFBUSxJQUFJO0FBRS9DLHNCQUFJLENBQUMsUUFBUTtBQUNYLHdCQUFJLFVBQVUsS0FBSyxFQUFFLGdCQUFnQixtQkFBbUIsQ0FBQztBQUN6RCx3QkFBSSxJQUFJLEtBQUssVUFBVSxFQUFFLE9BQU8sd0RBQXdELENBQUMsQ0FBQztBQUMxRjtBQUFBLGtCQUNGO0FBRUEsd0JBQU0sZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVdEMsb0JBQW9CLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXTix3QkFBTSxlQUFlO0FBQUEsb0JBQ25CLEVBQUUsTUFBTSxVQUFVLFNBQVMsY0FBYztBQUFBLG9CQUN6QyxJQUFJLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUEwQztBQUFBLHNCQUNoRSxNQUFNLEVBQUUsU0FBUyxTQUFTLFNBQVM7QUFBQSxzQkFDbkMsU0FBUyxFQUFFO0FBQUEsb0JBQ2IsRUFBRTtBQUFBLG9CQUNGLEVBQUUsTUFBTSxRQUFRLFNBQVMsWUFBWTtBQUFBLGtCQUN2QztBQUVBLHdCQUFNLFdBQVcsTUFBTSxNQUFNLG1EQUFtRDtBQUFBLG9CQUM5RSxRQUFRO0FBQUEsb0JBQ1IsU0FBUztBQUFBLHNCQUNQLGlCQUFpQixVQUFVLE1BQU07QUFBQSxzQkFDakMsZ0JBQWdCO0FBQUEsc0JBQ2hCLGNBQWM7QUFBQSxvQkFDaEI7QUFBQSxvQkFDQSxNQUFNLEtBQUssVUFBVTtBQUFBLHNCQUNuQixPQUFPO0FBQUEsc0JBQ1AsVUFBVTtBQUFBLHNCQUNWLFlBQVk7QUFBQSxzQkFDWixhQUFhO0FBQUEsb0JBQ2YsQ0FBQztBQUFBLGtCQUNILENBQUM7QUFFRCx3QkFBTSxPQUFPLE1BQU0sU0FBUyxLQUFLO0FBQ2pDLHNCQUFJLFVBQVUsU0FBUyxRQUFRLEVBQUUsZ0JBQWdCLG1CQUFtQixDQUFDO0FBQ3JFLHNCQUFJLElBQUksS0FBSyxVQUFVLElBQUksQ0FBQztBQUFBLGdCQUM5QixTQUFTLE9BQU87QUFDZCxzQkFBSSxVQUFVLEtBQUssRUFBRSxnQkFBZ0IsbUJBQW1CLENBQUM7QUFDekQsc0JBQUksSUFBSSxLQUFLLFVBQVUsRUFBRSxPQUFRLE9BQWUsV0FBVyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQUEsZ0JBQ2hHO0FBQUEsY0FDRixDQUFDO0FBQUEsWUFDSCxPQUFPO0FBQ0wsbUJBQUs7QUFBQSxZQUNQO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUMvQztBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFlBQVksS0FBSyxRQUFRLGtDQUFXLDhCQUE4QjtBQUFBLElBQ3BFO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
