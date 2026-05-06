import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedAttending, setSubmittedAttending] = useState("");
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    attending: "yes",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "d150d4cf-e30f-4fd4-be14-a3b7ff8a5497");
    formData.append("name", form.name);
    formData.append("guests", form.guests);
    formData.append(
      "attending",
      form.attending === "yes" ? "Joyfully Accepting" : "Regretfully Declining",
    );
    formData.append("message", form.message || "No message provided");
    formData.append(
      "subject",
      `RSVP: ${form.name} - ${form.attending === "yes" ? "Attending" : "Not Attending"}`,
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedName(form.name);
        setSubmittedAttending(form.attending);
        setSubmitted(true);
      }
    } catch (error) {
      console.error("RSVP submission error:", error);
      alert("There was an error submitting your RSVP. Please try again.");
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, oklch(0.35 0.15 20 / 5%) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, oklch(0.4 0.08 160 / 5%) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-10">
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold"
            style={{ color: "var(--color-emerald)" }}
          >
            RSVP
          </h2>
          <p
            className="mt-2 font-serif text-lg italic"
            style={{ color: "var(--color-wine)" }}
          >
            We'd love to celebrate with you
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-6 sm:p-8 space-y-5"
              style={{ boxShadow: "0 20px 50px oklch(0.2 0.04 150 / 10%)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <label
                  className="block font-body text-sm font-medium mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-300 focus:ring-2"
                  style={{
                    background: "oklch(1 0 0 / 50%)",
                    border: "1px solid oklch(0.4 0.08 160 / 20%)",
                    color: "var(--color-foreground)",
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  className="block font-body text-sm font-medium mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Number of Guests
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-300 focus:ring-2 cursor-pointer"
                  style={{
                    background: "oklch(1 0 0 / 50%)",
                    border: "1px solid oklch(0.4 0.08 160 / 20%)",
                    color: "var(--color-foreground)",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block font-body text-sm font-medium mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Attendance
                </label>
                <div className="flex gap-3">
                  {["yes", "no"].map((opt) => (
                    <motion.button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, attending: opt })}
                      className="flex-1 py-3 rounded-xl font-body text-sm font-medium transition-all duration-300 cursor-pointer"
                      style={{
                        background:
                          form.attending === opt
                            ? opt === "yes"
                              ? "var(--color-emerald)"
                              : "var(--color-wine)"
                            : "oklch(1 0 0 / 30%)",
                        color:
                          form.attending === opt
                            ? "var(--color-cream)"
                            : "var(--color-foreground)",
                        border: `1px solid ${
                          form.attending === opt
                            ? "transparent"
                            : "oklch(0.4 0.08 160 / 20%)"
                        }`,
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {opt === "yes"
                        ? "🎉 Joyfully Accept"
                        : "😢 Regretfully Decline"}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  className="block font-body text-sm font-medium mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Message (Optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none resize-none transition-all duration-300 focus:ring-2"
                  style={{
                    background: "oklch(1 0 0 / 50%)",
                    border: "1px solid oklch(0.4 0.08 160 / 20%)",
                    color: "var(--color-foreground)",
                  }}
                  placeholder="Share your wishes..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3.5 rounded-xl font-body text-sm font-semibold tracking-wide uppercase cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-emerald), var(--color-emerald-light))",
                  color: "var(--color-cream)",
                  boxShadow: "0 8px 25px oklch(0.4 0.08 160 / 25%)",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 35px oklch(0.4 0.08 160 / 35%)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send RSVP
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              {/* Success particles */}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 8 + 3,
                    height: Math.random() * 8 + 3,
                    background:
                      i % 3 === 0
                        ? "oklch(0.75 0.12 85 / 50%)"
                        : i % 3 === 1
                          ? "oklch(0.4 0.08 160 / 40%)"
                          : "oklch(0.35 0.15 20 / 35%)",
                    left: `${Math.random() * 100}%`,
                    bottom: "0%",
                  }}
                  animate={{
                    y: [0, -(100 + Math.random() * 200)],
                    x: [0, (Math.random() - 0.5) * 100],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 1.5,
                  }}
                />
              ))}
              <motion.div
                className="text-6xl mb-4"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                💌
              </motion.div>
              <h3
                className="font-display text-2xl sm:text-3xl font-semibold"
                style={{ color: "var(--color-emerald)" }}
              >
                Thank You, {submittedName}!
              </h3>
              <p
                className="mt-3 font-serif text-lg"
                style={{ color: "var(--color-wine)" }}
              >
                {submittedAttending === "yes"
                  ? "We can't wait to celebrate with you!"
                  : "You'll be missed. Thank you for letting us know."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
