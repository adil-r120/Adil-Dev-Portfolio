import { useRef } from "react";
import { LazyMotion, m, domAnimation, useScroll, useTransform } from "framer-motion";

interface ScrollReveal3DProps {
  children: React.ReactNode;
  className?: string;
  offsetY?: number;
  rotateXOffset?: number;
  scaleOffset?: number;
}

export const ScrollReveal3D = ({
  children,
  className = "",
  offsetY = 40,
  rotateXOffset = 12,
  scaleOffset = 0.08,
}: ScrollReveal3DProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track the element's position relative to the viewport scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0 = enters bottom, 0.5 = center, 1 = exits top)
  const y = useTransform(scrollYProgress, [0, 1], [offsetY, -offsetY]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [rotateXOffset, 0, -rotateXOffset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1 - scaleOffset, 1, 1 - scaleOffset]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <LazyMotion features={domAnimation}>
      <div style={{ perspective: "1200px" }} className="w-full">
        <m.div
          ref={ref}
          style={{
            y,
            rotateX,
            scale,
            opacity,
            transformStyle: "preserve-3d",
          }}
          className={className}
        >
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default ScrollReveal3D;
