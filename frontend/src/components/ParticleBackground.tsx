import React, { useEffect, useRef } from "react";

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle settings
    const isMobile = width < 768;
    const particleCount = isMobile ? 30 : 75;
    const focalLength = 300;
    const maxDepth = 600;

    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
    }

    const particles: Particle[] = [];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() - 0.5) * width * 1.5,
          y: (Math.random() - 0.5) * height * 1.5,
          z: Math.random() * maxDepth - maxDepth / 2,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.2 + 0.6,
          color: i % 2 === 0 ? "rgba(99, 102, 241," : "rgba(249, 115, 22,", // Indigo & Orange
        });
      }
    };

    initParticles();

    // Mouse interactive coordinates
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Offset from center of screen normalized
      mouse.targetX = (e.clientX - width / 2) * 0.04;
      mouse.targetY = (e.clientY - height / 2) * 0.04;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const draw = () => {
      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Update and project particles
      const projected: { px: number; py: number; size: number; alpha: number; color: string; particle: Particle }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles linearly
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // 3D rotation around Y-axis (orbiting horizontally)
        const cosY = Math.cos(0.0004);
        const sinY = Math.sin(0.0004);
        const rx = p.x * cosY - p.z * sinY;
        const rz = p.x * sinY + p.z * cosY;
        p.x = rx;
        p.z = rz;

        // 3D rotation around X-axis (orbiting vertically)
        const cosX = Math.cos(0.0002);
        const sinX = Math.sin(0.0002);
        const ry = p.y * cosX - p.z * sinX;
        const rz2 = p.y * sinX + p.z * cosX;
        p.y = ry;
        p.z = rz2;

        // Apply mouse movement drift
        const dx = p.x + mouse.x * (p.z / maxDepth + 0.5);
        const dy = p.y + mouse.y * (p.z / maxDepth + 0.5);

        // Wrap around limits
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;
        if (p.z < -maxDepth / 2) p.z = maxDepth / 2;
        if (p.z > maxDepth / 2) p.z = -maxDepth / 2;

        // 3D to 2D projection
        const scale = focalLength / (focalLength + p.z);
        const px = dx * scale + width / 2;
        const py = dy * scale + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          // Calculate transparency based on depth
          const alpha = Math.max(0.1, Math.min(0.8, (maxDepth / 2 - p.z) / maxDepth));
          projected.push({
            px,
            py,
            size: p.radius * scale,
            alpha,
            color: p.color,
            particle: p,
          });
        }
      }

      // Draw connections
      const maxDistance = 110;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];

          // Calculate 3D distance between raw particle coordinates
          const dx = p1.particle.x - p2.particle.x;
          const dy = p1.particle.y - p2.particle.y;
          const dz = p1.particle.z - p2.particle.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            // Fading lines based on distance and average projected alpha
            const lineAlpha = (1 - dist / maxDistance) * 0.12 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`; // slate color line
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-30 w-full h-full pointer-events-none opacity-50 dark:opacity-20 transition-opacity duration-500"
    />
  );
};

export default ParticleBackground;
