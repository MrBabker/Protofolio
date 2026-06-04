"use client";

import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import SectionTitle from "../ui/SectionTitle";
import { setGoupType } from "@/features/counter/counterSlice";
import { typs } from "../../utils";
import { Globe, Smartphone, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "Website Projects",
    description:
      "Modern web applications built with React, Next.js, ASP.NET Core and NestJS.",
    type: typs.web,
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications using React Native and modern APIs.",
    type: typs.app,
    icon: Smartphone,
  },
  {
    title: "Game Development",
    description:
      "Unity games, multiplayer systems, backend integration and game services.",
    type: typs.game,
    icon: Gamepad2,
  },
];

export default function Projects() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <section
      id="projects"
      className="
      py-24
      px-4
      "
    >
      <SectionTitle>Projects</SectionTitle>
      <div className="max-w-7xl mx-auto">
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
              relative
              overflow-hidden

              rounded-3xl

              bg-white/5
              backdrop-blur-xl

              border
              border-white/10

              p-8

              group

              hover:border-purple-500/40
              transition-all
              duration-300
              "
            >
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
                to-blue-500/10
                "
              />

              <div className="relative z-10">
                <div className="relative mb-6">
                  <div
                    className="
      absolute
      inset-0

      bg-purple-500/20
      blur-xl
      rounded-full
    "
                  />

                  <div
                    className="
      relative

      w-16
      h-16

      rounded-2xl

      flex
      items-center
      justify-center

      bg-black/30
      backdrop-blur-xl
    "
                  >
                    <project.icon size={34} className="text-purple-400" />
                  </div>
                </div>

                <h3
                  className="
                  text-2xl
                  font-bold
                  mb-3
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  text-gray-300
                  mb-8
                  leading-relaxed
                  "
                >
                  {project.description}
                </p>

                <button
                  onClick={() => {
                    dispatch(setGoupType(project.type.toString()));
                    router.push("/projects");
                  }}
                  className="
                  px-5
                  py-3

                  rounded-xl

                  bg-gradient-to-r
                  from-purple-600
                  to-indigo-600

                  hover:scale-105

                  transition-all
                  duration-300

                  font-medium
                  "
                >
                  Explore Projects →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          className="
          flex
          justify-center
          mt-12
          "
        >
          <button
            onClick={() => {
              dispatch(setGoupType("all"));
              router.push("/projects");
            }}
            className="
            px-8
            py-4

            rounded-2xl

            border
            border-white/10

            bg-white/5
            backdrop-blur-xl

            hover:bg-white/10
            hover:scale-105

            transition-all
            duration-300
            "
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
