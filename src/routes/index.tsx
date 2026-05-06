import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeOpening } from "@/components/EnvelopeOpening";
import { HeroSection } from "@/components/HeroSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EventDetails } from "@/components/EventDetails";
import { RSVPSection } from "@/components/RSVPSection";
import { ThankYouSection } from "@/components/ThankYouSection";
import { FlowerRain } from "@/components/FlowerRain";
import { FloralSideBorders } from "@/components/FloralSideBorders";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kasun & Dilki — Homecoming Celebration" },
      {
        name: "description",
        content:
          "Join Kasun & Dilki for their homecoming celebration on June 7th, 2026. A luxurious evening of love, joy, and togetherness.",
      },
      {
        property: "og:title",
        content: "Kasun & Dilki — Homecoming Celebration",
      },
      {
        property: "og:description",
        content:
          "Join us for an unforgettable evening of celebration — June 7th, 2026",
      },
    ],
  }),
});

function Index() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <>
      <FlowerRain />
      <EnvelopeOpening
        isOpen={envelopeOpened}
        onOpen={() => setEnvelopeOpened(true)}
      />

      <AnimatePresence>
        {envelopeOpened && (
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <FloralSideBorders />
            <HeroSection />
            <CountdownTimer />
            <EventDetails />
            <RSVPSection />
            <ThankYouSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
