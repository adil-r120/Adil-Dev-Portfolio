import React, { useEffect, useRef, useState } from "react";

interface Tag {
  name: string;
  x: number;
  y: number;
  z: number;
}

interface TagCloud3DProps {
  tags: string[];
  radius?: number;
}

const createUnitTags = (tags: string[]): Tag[] => {
  const N = tags.length;
  return tags.map((name, i) => {
    const k = -1 + (2 * i + 1) / N;
    const theta = Math.acos(k);
    const phi = Math.sqrt(N * Math.PI) * theta;

    return {
      name,
      x: Math.sin(theta) * Math.cos(phi),
      y: Math.sin(theta) * Math.sin(phi),
      z: Math.cos(theta),
    };
  });
};

export const TagCloud3D: React.FC<TagCloud3DProps> = ({ tags, radius = 220 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(() => 
    typeof window !== "undefined" ? window.innerWidth : 1000
  );
  
  const [renderedTags, setRenderedTags] = useState<Tag[]>(() => createUnitTags(tags));
  const [prevTags, setPrevTags] = useState(tags);

  // Sync state if tags prop changes
  if (tags !== prevTags) {
    setPrevTags(tags);
    setRenderedTags(createUnitTags(tags));
  }

  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const rotationRef = useRef({ rx: 0.003, ry: 0.003 });

  // Handle responsive radius resizing by updating windowWidth state
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute radius directly during render based on windowWidth and the radius prop
  const currentRadius = windowWidth < 640 ? 120 : windowWidth < 1024 ? 170 : radius;

  useEffect(() => {
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const mx = (e.clientX - cx) / (rect.width / 2);
      const my = (e.clientY - cy) / (rect.height / 2);

      rotationRef.current.ry = mx * 0.012;
      rotationRef.current.rx = -my * 0.012;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const animate = () => {
      if (!mouseRef.current.active) {
        rotationRef.current.rx += (0.0015 - rotationRef.current.rx) * 0.04;
        rotationRef.current.ry += (0.0015 - rotationRef.current.ry) * 0.04;
      }

      const { rx, ry } = rotationRef.current;

      setRenderedTags((prevTags) =>
        prevTags.map((tag) => {
          // Rotate Y axis
          const cosY = Math.cos(ry);
          const sinY = Math.sin(ry);
          let x1 = tag.x * cosY + tag.z * sinY;
          let z1 = -tag.x * sinY + tag.z * cosY;

          // Rotate X axis
          const cosX = Math.cos(rx);
          const sinX = Math.sin(rx);
          let y2 = tag.y * cosX - z1 * sinX;
          let z2 = tag.y * sinX + z1 * cosX;

          return { ...tag, x: x1, y: y2, z: z2 };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const focalLength = 300;

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center select-none mx-auto overflow-visible"
      style={{
        width: `${currentRadius * 2}px`,
        height: `${currentRadius * 2}px`,
        perspective: "1000px",
      }}
    >
      {renderedTags.map((tag, idx) => {
        // Project unit coordinates to currentRadius space
        const tagX = tag.x * currentRadius;
        const tagY = tag.y * currentRadius;
        const tagZ = tag.z * currentRadius;

        // Perspective projection
        const scale = focalLength / (focalLength - tagZ);
        const alpha = (tagZ + currentRadius) / (2 * currentRadius);
        const opacity = 0.2 + 0.8 * alpha;
        const zIndex = Math.round(tagZ + currentRadius);

        const isCore = ["React", "TypeScript", "Node.js", "Python", "Google Cloud", "AWS", "AI / ML"].includes(tag.name);

        return (
          <div
            key={`${tag.name}-${idx}`}
            className={`absolute transition-all duration-200 ease-out cursor-default text-xs font-semibold px-3 py-1.5 rounded-full border shadow-sm ${
              isCore
                ? "bg-orange-500/10 text-orange-500 border-orange-500/30 hover:bg-orange-500 hover:text-white hover:border-orange-600"
                : "bg-royal/5 text-royal/90 border-royal/20 hover:bg-royal hover:text-white hover:border-royal"
            }`}
            style={{
              transform: `translate3d(${tagX}px, ${tagY}px, ${tagZ}px) scale(${scale})`,
              opacity,
              zIndex,
              transformOrigin: "center center",
            }}
          >
            {tag.name}
          </div>
        );
      })}
    </div>
  );
};

export default TagCloud3D;
