import { motion } from "framer-motion";
import floralImg from "@/assets/floral-decoration.png";

const details = [
  {
    icon: "📅",
    title: "The Date",
    info: "June 7th, 2026",
    sub: "Saturday Evening",
  },
  {
    icon: "🕘",
    title: "The Time",
    info: "9:30 AM Onwards",
    sub: "Join us for a day of celebration",
  },
  {
    icon: "📍",
    title: "The Venue",
    info: "Asliya Golden Cassandra",
    sub: "Lotus Ballroom",
  },
  {
    icon: "🎉",
    title: "The Celebration",
    info: "Homecoming Reception",
    sub: "An evening of joy & togetherness",
  },
];

export function EventDetails() {
  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.4 0.08 160 / 4%) 50%, transparent 100%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-3"
          style={{ color: "var(--color-emerald)" }}
        >
          Celebration Details
        </h2>
        <div className="flex items-center justify-center gap-3 mb-14">
          <span
            className="h-px w-16"
            style={{ background: "var(--color-gold)" }}
          />
          <span className="text-gold-gradient font-display text-xl">✦</span>
          <span
            className="h-px w-16"
            style={{ background: "var(--color-gold)" }}
          />
        </div>

        {/* Timeline cards */}
        <div className="space-y-6 sm:space-y-8">
          {details.map((d, i) => (
            <motion.div
              key={d.title}
              className="glass rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden group"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{
                boxShadow: "0 0 40px oklch(0.4 0.08 160 / 15%)",
                scale: 1.01,
              }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, oklch(0.75 0.12 85 / 8%), transparent 70%)",
                }}
              />
              <span className="text-4xl mb-3 block">{d.icon}</span>
              <h3
                className="font-display text-xl sm:text-2xl font-semibold"
                style={{ color: "var(--color-emerald)" }}
              >
                {d.title}
              </h3>
              <p
                className="font-serif text-2xl sm:text-3xl mt-2 font-semibold"
                style={{ color: "var(--color-wine)" }}
              >
                {d.info}
              </p>
              <p
                className="font-body text-sm mt-1"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {d.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View Location Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://maps.app.goo.gl/9tWzNCBT8GGD4ABe9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="font-body text-sm sm:text-base font-medium px-8 py-3 sm:px-10 sm:py-4 rounded-full border-2 cursor-pointer transition-all duration-300"
              style={{
                borderColor: "var(--color-emerald)",
                color: "var(--color-emerald)",
                background: "transparent",
              }}
              whileHover={{
                background: "var(--color-emerald)",
                color: "var(--color-cream)",
                boxShadow: "0 0 30px oklch(0.4 0.08 160 / 30%)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.97 }}
            >
              📍 View Location on Map
            </motion.button>
          </a>
        </motion.div>

        {/* Floral */}
        <motion.div
          className="mt-12 max-w-sm mx-auto opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
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
      </motion.div>
    </section>
  );
}
