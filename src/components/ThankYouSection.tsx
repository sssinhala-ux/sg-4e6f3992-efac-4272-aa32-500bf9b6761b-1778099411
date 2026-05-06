import { motion } from "framer-motion";
import floralImg from "@/assets/floral-decoration.png";

export function ThankYouSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent, oklch(0.4 0.08 160 / 6%) 50%, oklch(0.35 0.15 20 / 4%) 100%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-6 max-w-xs mx-auto opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <img src={floralImg} alt="" className="w-full" width={1200} height={512} loading="lazy" style={{ transform: "scaleY(-1)" }} />
        </motion.div>

        <motion.h2
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold"
          style={{ color: "var(--color-emerald)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          With Love
        </motion.h2>

        <motion.p
          className="mt-4 font-serif text-xl sm:text-2xl italic"
          style={{ color: "var(--color-wine)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Kasun & Dilki
        </motion.p>

        <motion.p
          className="mt-6 font-body text-sm leading-relaxed max-w-md mx-auto"
          style={{ color: "var(--color-muted-foreground)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Thank you for being a part of our journey. Your presence will make our celebration truly unforgettable.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span className="h-px w-12" style={{ background: "var(--color-gold)" }} />
          <span className="text-gold-gradient font-display text-2xl">❦</span>
          <span className="h-px w-12" style={{ background: "var(--color-gold)" }} />
        </motion.div>

        <motion.p
          className="mt-6 font-display text-base tracking-[0.2em] uppercase"
          style={{ color: "var(--color-gold)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          June 7th, 2026
        </motion.p>

        <motion.div
          className="mt-10 max-w-xs mx-auto opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
        >
          <img src={floralImg} alt="" className="w-full" width={1200} height={512} loading="lazy" />
        </motion.div>
      </motion.div>
    </section>
  );
}
