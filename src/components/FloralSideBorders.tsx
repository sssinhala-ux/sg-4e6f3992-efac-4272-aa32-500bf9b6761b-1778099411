import { motion } from "framer-motion";
import floralLeft from "@/assets/floral-side-left.png";
import floralRight from "@/assets/floral-side-right.png";

export function FloralSideBorders() {
  return (
    <>
      {/* Left floral border */}
      <motion.div
        className="fixed left-0 top-0 h-full w-16 sm:w-24 md:w-32 z-30 pointer-events-none hidden sm:block"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.55, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.img
          src={floralLeft}
          alt=""
          className="h-full w-full object-cover object-right"
          width={512}
          height={1920}
          loading="lazy"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Right floral border */}
      <motion.div
        className="fixed right-0 top-0 h-full w-16 sm:w-24 md:w-32 z-30 pointer-events-none hidden sm:block"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.55, x: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        <motion.img
          src={floralRight}
          alt=""
          className="h-full w-full object-cover object-left"
          width={512}
          height={1920}
          loading="lazy"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </>
  );
}
