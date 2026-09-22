<div align="center">
  <h1>✨ MD Adil Raza — Personal Portfolio ✨</h1>
  <p><strong>A Highly Interactive, AI-Powered 3D Web Experience</strong></p>
  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=flat-square&logo=vercel)](https://adil-dev-portfolio.vercel.app/)
  [![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](#)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](#)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](#)
  [![React Doctor](https://img.shields.io/badge/React_Doctor-100%2F100-brightgreen?style=flat-square)](#)
</div>

<br />

Welcome to the source code of my **[personal portfolio](https://adil-dev-portfolio.vercel.app/)**. 

This isn't just a static resume—it's a deeply interactive web application designed to showcase my journey as a Software Engineer. Built with **React**, **TypeScript**, and **Tailwind CSS**, it goes beyond the basics by integrating advanced 3D visual effects and a fully functional AI Chatbot that knows all about my career.

---

## 🚀 The Experience

I built this portfolio to be an engaging digital playground. Here's what makes it stand out:

### 🧠 **Intelligent AI Chatbot**
Ever wanted to interview me instantly? Now you can. The site features a built-in, natural conversational agent powered by the lightning-fast **Groq API (Llama-3.1)**. Ask it questions about my background, skills, or projects! Chat history is securely persisted using **Upstash Serverless Redis**.

### 🌌 **Mesmerizing 3D Visuals**
A suite of lightweight, high-performance 3D animations using vanilla HTML5 canvas and GPU-accelerated CSS 3D transforms:
- **Dynamic Parallax Hero & Extruded 3D Text**: The hero section shifts independently tracking your cursor coordinates, coupled with dynamic reactive 3D extruded lettering shadows.
- **Constellation Backdrop**: A global 3D particle constellation field orbits slowly in space and responds to mouse tracking depth.
- **3D Skill Globe**: An interactive tag cloud sphere in the Skills toolkit that visitors can spin, drag, and interact with.
- **Tactile Card Hover Tilts**: 3D perspective rotation and glassmorphic reflection glare on project and credential cards.

### 🏆 **Interactive Showcases**
- **Career & Education Timeline**: A visual timeline detailing my educational background, internships, and professional experiences.
- **Verified Credentials**: A dedicated panel showcasing earned certifications and hackathon participation.
- **Premium UI/UX**: Built with **shadcn/ui** and **Tailwind CSS** featuring a fully responsive layout, smooth micro-animations, and a seamless Dark/Light mode toggle.

### ⚡ **Enterprise Code Quality**
Maintained at a perfect `100/100` health score via automated **React Doctor** CI pipelines running on GitHub Actions. Bootstrapped with **Vite** and deployed globally on **Vercel's Edge Network** for instant load times.

---

## 🛠️ Tech Stack

**Frontend Architecture**
- **React 18** & **TypeScript**
- **Vite** (Build Tool)
- **React Router DOM v6** (Routing)

**Styling & UI**
- **Tailwind CSS**
- **shadcn/ui** (Accessible UI components)
- **Framer Motion** (Animations)

**Backend & AI Architecture**
- **Groq API** (Llama-3.1-8b-instant LLM Inference)
- **Upstash Serverless Redis** (KV Database for Chat)
- **Vercel Serverless Functions** (`/api/chat.js`)

**Tooling & CI**
- **React Doctor** (Linter/Static Analysis)
- **GitHub Actions & Vercel** (CI/CD)

---

## 💻 Local Development

Want to spin this up on your local machine? Follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/adil-r120/Adil-Dev-Portfolio.git
cd Adil-Dev-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory. You will need API keys for the AI Chatbot to function locally:
```env
GROQ_API_KEY=your_groq_api_key_here
UPSTASH_REDIS_REST_URL=your_upstash_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_token_here
```

### 4. Start the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser and enjoy the experience!

---

## 📁 Project Structure

```text
frontend/
└── src/
    ├── components/
    │   ├── ui/               # Reusable atomic components (shadcn)
    │   ├── ChatbotWidget.tsx # AI Chat interface
    │   └── Navigation.tsx    # Responsive navbar
    ├── data/
    │   └── portfolioData.tsx # Single source of truth for projects, certifications, etc.
    ├── pages/
    │   ├── Home.tsx          # Landing page (3D Hero)
    │   ├── About.tsx         # Detailed profile & bio page
    │   ├── Experiences.tsx   # Professional career timeline
    │   ├── Skills.tsx        # Technical skills (3D Globe)
    │   ├── Projects.tsx      # Interactive project portfolio
    │   ├── Certifications.tsx # Verified credentials & hackathons
    │   ├── Contact.tsx       # Message form & social links
    │   └── NotFound.tsx      # Custom 404 page
    ├── App.tsx               # Main routing component
    └── main.tsx              # Application entry point
api/
└── chat.js               # Vercel Serverless Function (Backend API)
```

---

## 📫 Contact

Feel free to reach out if you'd like to collaborate, discuss tech, or just say hi!

- ✉️ **Email**: mdadilraza510@gmail.com
- 🔗 **LinkedIn**: [linkedin.com/in/mdadilraza-dev](https://www.linkedin.com/in/mdadilraza-dev/)
- 🐙 **GitHub**: [github.com/adil-r120](https://github.com/adil-r120)

<br />

<div align="center">
  <em>Designed and engineered with ❤️ by Md Adil Raza</em>
</div>
