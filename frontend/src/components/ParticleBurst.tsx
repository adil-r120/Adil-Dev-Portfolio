import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  radius: number;
  alpha: number;
  decay: number;
}

interface ParticleBurstProps {
  children: React.ReactNode;
  colorTheme?: "orange" | "blue" | "multi";
}

export const ParticleBurst: React.FC<ParticleBurstProps> = ({ children, colorTheme = "orange" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const getColors = () => {
    if (colorTheme === "orange") return ["#f97316", "#fdba74", "#ffedd5", "#ea580c", "#f97316"];
    if (colorTheme === "blue") return ["#1d4ed8", "#3b82f6", "#60a5fa", "#93c5fd", "#1d4ed8"];
    return ["#f97316", "#1d4ed8", "#10b981", "#8b5cf6", "#ec4899"]; // multi
  };

  const createParticles = (x: number, y: number) => {
    const colors = getColors();
    const count = 28; // number of particles
    const list: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.0 + Math.random() * 4.0;
      list.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.8, // slight upward force
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: 1.8 + Math.random() * 2.8,
        alpha: 1.0,
        decay: 0.015 + Math.random() * 0.02,
      });
    }

    particlesRef.current = [...particlesRef.current, ...list];
    
    // start loop if not running
    if (!animationFrameRef.current) {
      tick();
    }
  };

  const tick = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12; // gravity
      p.vx *= 0.97; // air resistance / friction
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.restore();
    }

    if (particles.length > 0) {
      animationFrameRef.current = requestAnimationFrame(tick);
    } else {
      animationFrameRef.current = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Expand canvas size so particles can fly far outside the button boundaries
        canvas.width = parent.clientWidth + 200; 
        canvas.height = parent.clientHeight + 200;
        canvas.style.left = "-100px";
        canvas.style.top = "-100px";
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createParticles(x, y);
  };

  return (
    <div ref={containerRef} onClick={handleClick} className="relative inline-block select-none">
      {children}
      <canvas 
        ref={canvasRef} 
        className="absolute pointer-events-none z-50 overflow-visible" 
      />
    </div>
  );
};
export default ParticleBurst;
