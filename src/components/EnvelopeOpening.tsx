import { motion, AnimatePresence } from "framer-motion";
import envelopeImg from "@/assets/envelope-themed.jpg";

interface EnvelopeOpeningProps {
  onOpen: () => void;
  isOpen: boolean;
}

const PETAL_COLORS = [
  "oklch(0.85 0.1 350 / 45%)",
  "oklch(0.9 0.08 20 / 40%)",
  "oklch(0.82 0.12 85 / 35%)",
  "oklch(0.7 0.06 140 / 35%)",
  "oklch(0.45 0.12 20 / 30%)",
  "oklch(0.88 0.05 350 / 40%)",
];

export function EnvelopeOpening({ onOpen, isOpen }: EnvelopeOpeningProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden bg-black/5"
          onClick={onOpen}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Full-screen envelope image - mobile responsive */}
          <motion.img
            src={envelopeImg}
            alt="Open Invitation"
            className="w-full h-full object-cover object-center sm:object-contain absolute inset-0"
            width={1920}
            height={1080}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
              maxHeight: "100vh",
              maxWidth: "100vw",
            }}
          />

          {/* Falling flower petals */}
          {Array.from({ length: 30 }).map((_, i) => {
            const size = 7 + Math.random() * 14;
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: size,
                  height: size * 1.4,
                  background: PETAL_COLORS[i % PETAL_COLORS.length],
                  borderRadius: "50% 0% 50% 100%",
                  left: `${Math.random() * 100}%`,
                  top: -20,
                  filter: Math.random() > 0.6 ? "blur(1px)" : "none",
                }}
                animate={{
                  y: ["0vh", "110vh"],
                  x: [
                    0,
                    (Math.random() - 0.5) * 120,
                    (Math.random() - 0.5) * 80,
                  ],
                  rotate: [0, 180 + Math.random() * 360],
                  opacity: [0, 0.7, 0.6, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 7,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            );
          })}

          {/* Gold sparkles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`sp-${i}`}
              className="absolute rounded-full"
              style={{
                width: 2 + Math.random() * 4,
                height: 2 + Math.random() * 4,
                background: "oklch(0.85 0.12 85 / 70%)",
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
              }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.8, 0] }}
              transition={{
                duration: 1.5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}

          {/* Tap to open overlay */}
          <motion.div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 text-center z-10 px-4">
            <motion.p
              className="font-display text-lg sm:text-xl md:text-2xl tracking-[0.15em] sm:tracking-[0.25em] uppercase"
              style={{
                color: "oklch(0.95 0.02 85)",
                textShadow: "0 2px 15px oklch(0 0 0 / 60%)",
              }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Open Invitation
            </motion.p>
            <motion.p
              className="font-serif text-xs sm:text-sm mt-1 italic"
              style={{
                color: "oklch(0.85 0.08 85 / 80%)",
                textShadow: "0 1px 8px oklch(0 0 0 / 50%)",
              }}
            >
              tap to reveal
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
