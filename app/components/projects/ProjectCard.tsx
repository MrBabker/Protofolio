"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function ProjectCard({ project }: any) {
  const [activeImage, setActiveImage] = useState(project.cover);

  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-md
      hover:border-cyan-400/40
      hover:shadow-2xl
      hover:shadow-cyan-500/10
      transition-all
      duration-500
    "
    >
      {/* Cover Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={project.title}
              fill
              className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/10
          to-transparent
        "
        />
      </div>

      {/* Thumbnails */}
      <div
        className="
        flex
        gap-2
        px-4
        py-3
        overflow-x-auto
        bg-black/20
      "
      >
        {project.images.map((img: string, index: number) => (
          <motion.button
            key={index}
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.08,
            }}
            onMouseEnter={() => setActiveImage(img)}
            onClick={() => setActiveImage(img)}
            className={`
              relative
              min-w-[52px]
              w-13
              h-13
              rounded-xl
              overflow-hidden
              border-2
              transition-all
              duration-300
              ${
                activeImage === img
                  ? "border-cyan-400"
                  : "border-white/10"
              }
            `}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          text-xl
          md:text-2xl
          font-bold
          mb-3
        "
        >
          {project.title}
        </motion.h3>

        <p
          className="
          text-gray-400
          text-sm
          leading-relaxed
          mb-6
        "
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string, index: number) => (
            <motion.span
              key={index}
              whileHover={{
                scale: 1.08,
              }}
              className="
              px-3
              py-1.5
              rounded-full
              text-xs
              font-medium
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-300
            "
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Button */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
          flex
          items-center
          justify-center
          gap-3
          w-full
          py-3
          rounded-xl
          bg-cyan-500/15
          border
          border-cyan-500/20
          text-cyan-300
          font-semibold
          hover:bg-cyan-500/20
          transition-all
          duration-300
        "
        >
          <Image
            src={project.button}
            alt=""
            width={26}
            height={26}
            className="rounded-full"
          />

          View Project

          <motion.span
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </motion.article>
  );
}