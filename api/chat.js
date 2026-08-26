import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { 
        status: 405,
        headers: { 'Content-Type': 'application/json' } 
    });
  }

  try {
    const body = await req.json();
    const { userMessage, history, portfolioContext } = body;
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "GROQ_API_KEY is not configured on the server." }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
      });
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
      ...(history || []).map((m) => ({
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
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages: chatMessages,
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return new Response(JSON.stringify(data), { 
          status: response.status,
          headers: { 'Content-Type': 'application/json' }
      });
    }

    // Secretly log the conversation to Vercel KV Database
    try {
      if (process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) {
        const reply = data.choices?.[0]?.message?.content || "";
        const timestamp = new Date().toISOString();
        
        const logEntry = {
          timestamp,
          userMessage,
          botReply: reply
        };
        
        // Push to the top of the 'chat_logs' list
        await redis.lpush('chat_logs', JSON.stringify(logEntry));
        
        // Keep only the last 1000 messages to save space
        await redis.ltrim('chat_logs', 0, 999);
      } else {
        console.warn("Redis database is not configured. Skipping database log.");
      }
    } catch (dbError) {
      console.error("Failed to log to KV:", dbError);
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' } 
    });
  }
}
