import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isHub: boolean;
  pulseOffset: number;
  speed: number;
}

export const InteractiveParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const nodesRef = useRef<Node[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    // Initialize particle nodes
    const initNodes = () => {
      // Density of nodes
      const nodeCount = Math.min(65, Math.floor((canvas.width * canvas.height) / 22000));
      const nodes: Node[] = [];
      for (let i = 0; i < nodeCount; i++) {
        const isHub = Math.random() < 0.20; // 20% of nodes are Hubs
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (isHub ? 0.25 : 0.45), // Hubs drift slower
          vy: (Math.random() - 0.5) * (isHub ? 0.25 : 0.45),
          radius: isHub ? 3.5 + Math.random() * 1.5 : 1.2 + Math.random() * 1.0,
          isHub,
          pulseOffset: Math.random() * Math.PI * 2,
          speed: 0.0015 + Math.random() * 0.0015,
        });
      }
      nodesRef.current = nodes;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const connectionDistance = 140;

    // Drawing/animation tick
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const time = Date.now();

      // Update and draw nodes
      nodes.forEach((node) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        if (node.isHub) {
          // Draw Hub node: Outer pulsing glow aura
          const pulse = 1.6 + Math.sin(time * node.speed + node.pulseOffset) * 0.4;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(249, 115, 22, 0.08)"; // Very soft orange glow
          ctx.fill();

          // Draw Hub secondary border
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 1.3, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(249, 115, 22, 0.25)";
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw solid inner core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(249, 115, 22, 0.75)"; // Bright orange core
          ctx.fill();

          // Draw orbital satellite dot rotating around the hub node
          const orbitRadius = node.radius * 2.2;
          const angle = (time * 0.0012 + node.pulseOffset) % (Math.PI * 2);
          const orbitX = node.x + Math.cos(angle) * orbitRadius;
          const orbitY = node.y + Math.sin(angle) * orbitRadius;
          ctx.beginPath();
          ctx.arc(orbitX, orbitY, 1, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(29, 78, 216, 0.8)"; // Blue satellite dot
          ctx.fill();
        } else {
          // Draw Normal node: Outer static faint ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(29, 78, 216, 0.12)"; // Faint blue ring
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Solid core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(29, 78, 216, 0.5)"; // Soft blue core
          ctx.fill();
        }
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12; // faint lines
            
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            
            // Color connection based on node type
            if (n1.isHub || n2.isHub) {
              ctx.strokeStyle = `rgba(249, 115, 22, ${alpha * 1.5})`; // Faint orange for hub links
            } else {
              ctx.strokeStyle = `rgba(29, 78, 216, ${alpha})`; // Faint blue for client-client links
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw connection to mouse
        if (mouse.active) {
          const n = nodes[i];
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance + 30) {
            const alpha = (1 - dist / (connectionDistance + 30)) * 0.18; // brighter near cursor
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            
            // Connect cursor with glowing theme color
            ctx.strokeStyle = n.isHub 
              ? `rgba(249, 115, 22, ${alpha * 1.5})` 
              : `rgba(29, 78, 216, ${alpha * 1.2})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(tick);
    };

    animationFrameId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-45"
      style={{
        maskImage: "radial-gradient(circle at center, black 40%, transparent 95%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 95%)",
      }}
    />
  );
};
export default InteractiveParticles;
