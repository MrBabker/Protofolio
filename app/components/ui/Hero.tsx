"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ChevronDown } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="
relative
min-h-screen

  flex
  
  items-center
  

  overflow-hidden
  "
    >
      <div
        className="
    max-w-7xl
    mx-auto

    px-4
    md:px-8

    mt-25

    w-full

    grid
    md:grid-cols-2

    gap-16

    items-center

   
    "
      >
        {/* Left Side */}

        <div>
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
        inline-flex
        items-center
         md:justify-items-center
        px-4
        py-2

        rounded-full

        bg-purple-500/10
        border
        border-purple-500/20

        text-purple-300
        "
          >
            Full Stack Developer
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
        mt-6

        text-5xl
        md:text-7xl

        font-black

        leading-tight
        "
          >
            Mohammed{" "}
            <span
              className="
          bg-gradient-to-r
          from-purple-400
          to-cyan-400

          bg-clip-text
          text-transparent
          "
            >
              Babiker
            </span>
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
        mt-4

        text-2xl
        md:text-3xl

        font-semibold

        text-white
        "
          >
            Building Scalable Web Applications
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
        mt-6

        text-gray-400

        text-lg
        md:text-xl

        max-w-xl
        "
          >
            Passionate about building modern web applications using ASP.NET
            Core, React, Next.js, Mobile Development, and scalable software
            architecture.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className="
        mt-10

        flex
        flex-wrap

        gap-4
        "
          >
            <button
              onClick={scrollToProjects}
              className="
          px-8
          py-4

          rounded-2xl

          bg-gradient-to-r
          from-purple-600
          to-cyan-600

          hover:scale-105

          transition-all
          duration-300

          shadow-[0_0_40px_rgba(168,85,247,0.35)]
          "
            >
              View Projects
            </button>

            <a
              href="https://drive.google.com/file/d/1m8Gabw8FGk2bU82jvJDiENW9KG7xWLP0/view?usp=sharing"
              target="_blank"
              className="
          px-8
          py-4

          rounded-2xl

          border
          border-white/10

          hover:bg-white/5

          transition-all
          duration-300
          "
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
            className="
        mt-8

        flex
        items-center

        gap-5
        "
          >
            <a
              href="https://github.com/MrBabker"
              className="
          text-gray-400
          hover:text-white

          transition
          "
            >
              <SiGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/m-babker-8366b4282/"
              className="
          text-gray-400
          hover:text-white

          transition
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-blue-500"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>

            <a
              href="mailto:your@email.com"
              className="
          text-gray-400
          hover:text-white

          transition
          "
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Tech Stack */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="
        mt-10

        flex
        flex-wrap

        gap-3
        "
          >
            {[
              "ASP.NET Core",
              "React",
              "Next.js",
              "TypeScript",
              "PostgreSQL",
              "Mobile Apps",
            ].map((item) => (
              <span
                key={item}
                className="
            px-4
            py-2

            rounded-full

            bg-white/5

            border
            border-white/10

            text-sm
            "
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Side */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
            },
            scale: {
              duration: 0.8,
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
  flex
  justify-center
  "
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
  absolute
  inset-0

  rounded-full

  bg-gradient-to-r
  from-purple-500/40
  to-cyan-500/40

  blur-xl
  md:blur-3xl
  "
            />

            <Image
              src="/mm.jpeg"
              alt="Mohammed Babiker"
              width={350}
              height={350}
              priority
              className="
          relative

          rounded-full

          border-4
          border-white/10

          object-cover
          "
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
    absolute
    bottom-8
    left-1/2

    -translate-x-1/2

    text-gray-400
    "
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
