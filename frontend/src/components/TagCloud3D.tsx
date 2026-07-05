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

export const TagCloud3D: React.FC<TagCloud3DProps> = ({ tags, radius = 220 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentRadius, setCurrentRadius] = useState(radius);
  const [renderedTags, setRenderedTags] = useState<Tag[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const rotationRef = useRef({ rx: 0.003, ry: 0.003 }); // initial slow rotation speeds

  // Handle responsive radius resizing
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCurrentRadius(120);
      } else if (w < 1024) {
        setCurrentRadius(170);
      } else {
        setCurrentRadius(radius);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radius]);

  // Fibonacci Sphere placement for tags
  useEffect(() => {
    const N = tags.length;
    const initialTags: Tag[] = tags.map((name, i) => {
      const k = -1 + (2 * i + 1) / N;
      const theta = Math.acos(k);
      const phi = Math.sqrt(N * Math.PI) * theta;

      return {
        name,
        x: currentRadius * Math.sin(theta) * Math.cos(phi),
        y: currentRadius * Math.sin(theta) * Math.sin(phi),
        z: currentRadius * Math.cos(theta),
      };
    });
    setRenderedTags(initialTags);
  }, [tags, currentRadius]);

  useEffect(() => {
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Mouse offset normalized from center (-1 to 1)
      const mx = (e.clientX - cx) / (rect.width / 2);
      const my = (e.clientY - cy) / (rect.height / 2);

      // Set target rotation speeds based on mouse position
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
      // Drift back to slow constant spin if mouse is not active
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

    animate();

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
        // Perspective projection
        const scale = focalLength / (focalLength - tag.z);
        const alpha = (tag.z + currentRadius) / (2 * currentRadius); // 0 to 1 based on depth
        const opacity = 0.2 + 0.8 * alpha; // map to 0.2 - 1.0
        const zIndex = Math.round(tag.z + currentRadius);

        // Highlight custom tags based on key interests
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
              transform: `translate3d(${tag.x}px, ${tag.y}px, ${tag.z}px) scale(${scale})`,
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
