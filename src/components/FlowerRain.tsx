import { motion } from "framer-motion";
import { useMemo } from "react";

const PETAL_COLORS = [
  "oklch(0.85 0.1 350 / 50%)", // soft pink
  "oklch(0.9 0.08 20 / 40%)", // blush
  "oklch(0.8 0.06 140 / 35%)", // sage
  "oklch(0.82 0.12 85 / 40%)", // gold
  "oklch(0.88 0.05 350 / 45%)", // light rose
  "oklch(0.75 0.08 160 / 30%)", // emerald tint
  "oklch(0.92 0.06 30 / 35%)", // peach
];

const PETAL_SHAPES = [
  "50% 0% 50% 100%", // classic petal
  "40% 10% 60% 90%", // slightly asymmetric
  "30% 0% 70% 100%", // narrow petal
  "50% 20% 50% 80%", // wider petal
  "45% 5% 55% 95%", // medium petal
];

interface Petal {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  shape: string;
  swayAmount: number;
  rotateEnd: number;
  opacity: number;
}

export function FlowerRain() {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      size: 8 + Math.random() * 14,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 10,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      shape: PETAL_SHAPES[Math.floor(Math.random() * PETAL_SHAPES.length)],
      swayAmount: 40 + Math.random() * 80,
      rotateEnd: 180 + Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            width: p.size,
            height: p.size * 1.4,
            left: `${p.left}%`,
            top: -30,
            background: p.color,
            borderRadius: p.shape,
            filter: `blur(${Math.random() > 0.7 ? 1 : 0}px)`,
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [
              0,
              p.swayAmount * (Math.random() > 0.5 ? 1 : -1),
              -p.swayAmount * 0.5,
              p.swayAmount * 0.7,
              0,
            ],
            rotate: [0, p.rotateEnd],
            opacity: [0, p.opacity, p.opacity, p.opacity * 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
