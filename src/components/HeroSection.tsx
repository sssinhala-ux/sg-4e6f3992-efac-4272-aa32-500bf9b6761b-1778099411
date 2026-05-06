import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import floralImg from "@/assets/floral-decoration.png";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const coupleX = useTransform(mouseX, [-500, 500], [5, -5]);
  const coupleY = useTransform(mouseY, [-500, 500], [3, -3]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, oklch(0.9 0.03 140 / 40%) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.85 0.08 85 / 20%) 0%, transparent 50%), var(--color-background)",
        }}
      />

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: Math.random() * 8 + 4,
            height: (Math.random() * 8 + 4) * 1.4,
            background:
              i % 4 === 0
                ? "oklch(0.85 0.08 20 / 30%)"
                : i % 4 === 1
                  ? "oklch(0.75 0.12 85 / 25%)"
                  : i % 4 === 2
                    ? "oklch(0.7 0.06 140 / 30%)"
                    : "oklch(0.9 0.04 20 / 20%)",
            left: `${10 + Math.random() * 80}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: "50% 0 50% 0",
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="relative w-full max-w-md mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <img
          src={floralImg}
          alt=""
          className="w-full"
          width={1200}
          height={512}
          style={{ transform: "scaleY(-1)" }}
          loading="lazy"
        />
      </motion.div>

      <motion.div className="relative z-10" style={{ x: coupleX, y: coupleY }}>
        <motion.img
          src="/uploads/image_48fa3c3b-a0fe-4caf-9d59-adc3b4fe3aea.png"
          alt="Kasun & Dilki"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
          width={800}
          height={1024}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [1, 1.02, 1], y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.12 85 / 50%), oklch(0.4 0.08 160 / 30%), transparent)",
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          style={{ color: "var(--color-emerald)" }}
        >
          Kasun <span className="text-gold-gradient">&</span> Dilki
        </h1>
        <motion.div
          className="mt-4 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span
            className="h-px w-12 sm:w-20"
            style={{ background: "var(--color-gold)" }}
          />
          <p
            className="font-serif text-lg sm:text-xl tracking-[0.3em] uppercase"
            style={{ color: "var(--color-wine)" }}
          >
            Homecoming Celebration
          </p>
          <span
            className="h-px w-12 sm:w-20"
            style={{ background: "var(--color-gold)" }}
          />
        </motion.div>
        <motion.p
          className="mt-3 font-display text-2xl sm:text-3xl italic"
          style={{ color: "var(--color-emerald-light)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          June 7th, 2026
        </motion.p>
      </motion.div>

      <motion.div
        className="relative w-full max-w-md mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        <img
          src={floralImg}
          alt=""
          className="w-full"
          width={1200}
          height={512}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
