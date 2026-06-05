"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProjectHeader() {
  return (
    <header
      
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      h-20
      backdrop-blur-sm
      md:backdrop-blur-xl
      bg-black/30
      border-b
      border-white/10
    "
    >
      <div
        className="
        max-w-[1400px]
        mx-auto
        h-full
        px-4
        sm:px-6
        lg:px-8
        flex
        items-center
        justify-between
      "
      >
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            flex
            items-center
            gap-3
            cursor-pointer
          "
          >
            <motion.div
              whileHover={{
                rotate: 10,
              }}
            >
              <Image
                src="/GamePad.png"
                alt="Mohammed Babiker"
                width={42}
                height={42}
                className="
                rounded-full
                border
                border-cyan-500/30
                shadow-lg
                shadow-cyan-500/20
              "
              />
            </motion.div>

            <div>
              <h1
                className="
                text-lg
                sm:text-xl
                md:text-2xl
                font-bold
                bg-gradient-to-r
                from-white
                via-cyan-200
                to-cyan-400
                bg-clip-text
                text-transparent
              "
              >
                Mohammed Babiker
              </h1>

              <p className="text-xs text-gray-500 hidden sm:block">
                Full Stack Developer
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link href="/">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              px-4
              py-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-gray-300
              hover:text-white
              hover:border-cyan-400/40
              hover:bg-cyan-500/10
              transition-all
              duration-300
            "
            >
              Home
            </motion.div>
          </Link>
        </nav>
      </div>
    </header>
  );
}