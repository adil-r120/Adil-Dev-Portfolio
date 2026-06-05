# MD Adil Raza — Full Stack Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=flat-square&logo=vercel)](https://adil-dev-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](#)
[![React Doctor](https://img.shields.io/badge/React_Doctor-100%2F100-brightgreen?style=flat-square)](#)

A highly optimized, modern personal portfolio built with React, TypeScript, and Tailwind CSS. Featuring a custom AI Chatbot powered by Groq Llama-3.1 and Upstash Redis.

## Overview

This repository contains the source code for my personal portfolio website. Designed with a focus on performance, clean architecture, and modern aesthetics, it serves as a comprehensive showcase of my journey as a Software Engineer. 

The application is completely responsive, highly interactive, and maintained with enterprise-grade CI/CD pipelines to ensure perfect code health.

## Key Features

- **Intelligent AI Chatbot**: A deeply integrated, natural conversational agent powered by the lightning-fast Groq API (Llama-3.1) to answer questions about my background dynamically. Chat history is securely persisted using Upstash Serverless Redis.
- **Enterprise Code Quality**: Maintained at a perfect `100/100` health score via automated React Doctor CI pipelines running on GitHub Actions.
- **Premium UI/UX**: Built with shadcn/ui and Tailwind CSS featuring a fully responsive layout, smooth micro-animations, and a seamless Dark/Light mode toggle.
- **Blazing Fast**: Bootstrapped with Vite and deployed globally on Vercel's Edge Network for instant load times.

## Tech Stack

### Core Technologies
- Frontend: React 18, TypeScript, Vite
- Styling: Tailwind CSS, shadcn/ui, Framer Motion
- Routing: React Router DOM v6

### Backend & AI Architecture
- LLM Inference: Groq API (Llama-3.1-8b-instant)
- Database: Upstash Serverless Redis (KV)
- Deployment: Vercel Serverless Functions (`/api/chat.js`)

### Tooling & CI
- Linter/Static Analysis: React Doctor
- CI/CD: GitHub Actions, Vercel

## Local Development

To run this project on your local machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/adil-r120/Adil-Dev-Portfolio.git
cd Adil-Dev-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your API keys (required for the Chatbot to function locally):
```env
GROQ_API_KEY=your_groq_api_key_here
UPSTASH_REDIS_REST_URL=your_upstash_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_token_here
```

### 4. Start the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

## Project Structure

```text
src/
├── components/
│   ├── ui/               # Reusable atomic components (shadcn)
│   ├── ChatbotWidget.tsx # AI Chat interface
│   └── Navigation.tsx    # Responsive navbar
├── pages/
│   ├── Home.tsx          # Landing page
│   ├── Projects.tsx      # Project showcase
│   └── Skills.tsx        # Technical proficiencies
├── App.tsx               # Main routing component
└── main.tsx              # Application entry point
api/
└── chat.js               # Vercel Serverless Function (Backend API)
```

## Contact

Feel free to reach out if you'd like to collaborate, discuss tech, or just say hi!

- **Email**: mdadilraza510@gmail.com
- **LinkedIn**: [linkedin.com/in/mdadilraza-dev](https://www.linkedin.com/in/mdadilraza-dev/)
- **GitHub**: [github.com/adil-r120](https://github.com/adil-r120)

---
*Designed and engineered by MD Adil Raza*
