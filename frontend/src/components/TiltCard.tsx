import React, { useRef, useState } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number; // max tilt degrees, default 10
  perspective?: number; // perspective pixels, default 1000
  glareOpacity?: number; // max opacity of glare, default 0.12
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 10,
  perspective = 1000,
  glareOpacity = 0.12,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element

    const w = rect.width;
    const h = rect.height;

    // Normalize coordinates (-0.5 to 0.5)
    const normX = (x / w) - 0.5;
    const normY = (y / h) - 0.5;

    // Calculate rotation
    const rotateX = -(normY * maxTilt);
    const rotateY = normX * maxTilt;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      transition: "transform 0.1s ease-out",
    });

    // Calculate glare position
    const glareX = (x / w) * 100;
    const glareY = (y / h) * 100;

    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${glareOpacity}) 0%, rgba(255, 255, 255, 0) 85%)`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.4s ease-out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        ...tiltStyle,
      }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Glare effect */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={glareStyle}
      />
      {children}
    </div>
  );
};

export default TiltCard;
