"use client";

import React from "react";
import { motion } from "framer-motion";
import App from "../components/projects/App";

const Page = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0619] text-white">
      {/* Animated Glow 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          left-0
          w-[800]
          h-[800]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      {/* Animated Glow 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-0
          right-0
          w-[1000]
          h-[1000]
          rounded-full
          bg-purple-500/10
          blur-[160px]
        "
      />

      {/* Animated Glow 3 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700]
          h-[700]
          rounded-full
          bg-indigo-500/5
          blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Stars */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      {/* Radial Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.7))]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <App />
      </div>
    </main>
  );
};

export default Page;