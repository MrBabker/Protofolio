"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="
  text-4xl
  md:text-5xl
  font-bold
  text-center
  mb-12
  z-100
  
  "
    >
      {children}
    </motion.div>
  );
}
