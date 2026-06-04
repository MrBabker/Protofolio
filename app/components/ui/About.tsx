"use client";

import { motion } from "framer-motion";
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <section
      id="about"
      className="
      py-24
      px-4
      "
    >
      <div
        className="
        max-w-5xl
        mx-auto
        "
      >
       

        <motion.div
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
          className="
          bg-white/5
          md:backdrop-blur-xl

          border
          border-white/10

          rounded-3xl

          p-8
          md:p-12
          "
        >
             <SectionTitle>
          About Me
        </SectionTitle>
          <p
            className="
            text-lg
            md:text-xl

            text-gray-300

            leading-9
            "
          >
            Im a Software Engineer passionate
            about building modern applications,
            scalable backend systems, and
            engaging user experiences.

            <br />
            <br />

            I specialize in ASP.NET Core,
            React, Next.js, mobile development,
            and game development with Unity.

            <br />
            <br />

            Over the years, I have developed
            websites, mobile applications,
            backend services, and multiplayer
            game systems while focusing on
            clean architecture, performance,
            and maintainable code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}