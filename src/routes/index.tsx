import { useState } from "react";
import { EnvelopeOpening } from "@/components/EnvelopeOpening";
import { HeroSection } from "@/components/HeroSection";
import { EventDetails } from "@/components/EventDetails";
import { CountdownTimer } from "@/components/CountdownTimer";
import { RSVPSection } from "@/components/RSVPSection";
import { ThankYouSection } from "@/components/ThankYouSection";
import { FloralSideBorders } from "@/components/FloralSideBorders";
import { FlowerRain } from "@/components/FlowerRain";

export default function Index() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <>
      <EnvelopeOpening
        isOpen={envelopeOpened}
        onOpen={() => setEnvelopeOpened(true)}
      />
      {envelopeOpened && (
        <div className="relative">
          <FloralSideBorders />
          <FlowerRain />
          <HeroSection />
          <CountdownTimer />
          <EventDetails />
          <RSVPSection />
          <ThankYouSection />
        </div>
      )}
    </>
  );
}