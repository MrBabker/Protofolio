"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);

      if (!element) return;

      const y = element.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50

      bg-black/20
      backdrop-blur-xl

      border-b
      border-white/10

      shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        md:px-8

        h-20

        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
  flex
  items-center
  gap-3
  cursor-pointer
  "
        >
          <Image
            src="/GamePad.png"
            alt="Logo"
            width={42}
            height={42}
            className="
            rounded-full
            border
            border-white/10
            "
          />

          <h1
            className="
            font-bold
            text-lg
            md:text-xl
            "
          >
            Mohammed Babiker
          </h1>
        </motion.button>

        {/* Desktop Menu */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item}
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => scrollToSection(item)}
              className="
              relative

              text-gray-300
              hover:text-cyan-400

              capitalize

              transition-colors
              duration-300

              after:absolute
              after:left-0
              after:-bottom-1

              after:h-[2px]
              after:w-0

              after:bg-cyan-400

              after:transition-all
              after:duration-300

              hover:after:w-full
              "
            >
              {item}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Button */}

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-white
          "
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            overflow-hidden

            md:hidden

            bg-black/90
            backdrop-blur-xl

            border-t
            border-white/10
            "
          >
            <nav
              className="
              flex
              flex-col

              items-center

              gap-6

              py-6
              "
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => scrollToSection(item)}
                  className="
                    text-lg

                    text-gray-300
                    hover:text-cyan-400

                    capitalize

                    transition-colors
                    duration-300
                    "
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
