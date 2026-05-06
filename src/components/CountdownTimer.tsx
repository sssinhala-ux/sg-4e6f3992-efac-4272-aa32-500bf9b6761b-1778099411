import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-06-07T00:00:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, EVENT_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownCard({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="glass glow-emerald rounded-2xl px-4 py-5 sm:px-6 sm:py-7 flex flex-col items-center min-w-[80px] sm:min-w-[100px]"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 40px oklch(0.75 0.12 85 / 30%)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.span
        key={value}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold"
        style={{ color: "var(--color-emerald)" }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span
        className="mt-2 font-body text-xs sm:text-sm uppercase tracking-[0.2em]"
        style={{ color: "var(--color-muted-foreground)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 px-4">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.4 0.08 160 / 8%) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-2"
          style={{ color: "var(--color-emerald)" }}
        >
          Counting Down
        </h2>
        <p
          className="font-serif text-lg italic mb-10"
          style={{ color: "var(--color-wine)" }}
        >
          to our special day
        </p>
        <div className="flex justify-center gap-3 sm:gap-5">
          <CountdownCard value={time.days} label="Days" />
          <CountdownCard value={time.hours} label="Hours" />
          <CountdownCard value={time.minutes} label="Mins" />
          <CountdownCard value={time.seconds} label="Secs" />
        </div>
      </motion.div>
    </section>
  );
}
