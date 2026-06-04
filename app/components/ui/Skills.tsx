"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
      py-24
      px-4
      "
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="
         
          "
        >
          <SectionTitle> Skills</SectionTitle>
          <div
            className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-6
          "
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
      group
      relative

      overflow-hidden

      rounded-3xl

      bg-white/[0.03]
      md:backdrop-blur-xl

      border
      border-white/10

      p-6

      flex
      flex-col
      items-center

      transition-all
      duration-300

      hover:border-purple-500/40
      hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
    "
              >
                {/* Glow */}
                <div
                  className="
        absolute
        inset-0

        opacity-0
        group-hover:opacity-100

        transition-opacity
        duration-500

        bg-gradient-to-br
        from-purple-500/10
        via-transparent
        to-cyan-500/10
      "
                />

                {/* Icon */}
                <div
                  className="
        relative
        w-24
        h-24

        flex
        items-center
        justify-center
      "
                >
                  {/* Blur خلف الصورة */}
                  <div
                    className="
          absolute
          inset-0

          rounded-full

          bg-purple-500/20

          md:blur-2xl

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-500
        "
                  />

                  {/* Mask Container */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="
          relative
          z-10

          w-20
          h-20

          flex
          items-center
          justify-center

          rounded-full

          bg-black/20
        "
                    style={{
                      maskImage:
                        "radial-gradient(circle, black 70%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(circle, black 70%, transparent 100%)",
                    }}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={150}
                      height={150}
                      className="
            object-contain
            select-none
          "
                    />
                  </motion.div>
                </div>

                {/* Skill Name */}
                <h3
                  className="
        relative
        z-10

        mt-5

        text-center
        text-lg
        font-semibold

        bg-gradient-to-r
        from-white
        to-gray-400

        bg-clip-text
        text-transparent
      "
                >
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
