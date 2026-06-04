"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import { projects, typs } from "../../utils";
import { setGoupType } from "../../../features/counter/counterSlice";
import { ProjectCard } from "./ProjectCard";
import { ProjectHeader } from "./ProjectHeader";
import { RootState } from "../../store";

export default function ProjectsPage() {
  const groupType = useSelector(
    (state: RootState) => state.counter.groupType
  );

  const dispatch = useDispatch();

  const filters = [
    {
      label: "Web Apps",
      value: typs.web.toString(),
    },
    {
      label: "Mobile Apps",
      value: typs.app.toString(),
    },
    {
      label: "Games",
      value: typs.game.toString(),
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      groupType === "all" ||
      project.typ.toString() === groupType
  );

  return (
    <div>
      <ProjectHeader />

      <section
        className="
        relative
        min-h-screen
        bg-[#0b0b0f07]
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        py-24
        overflow-hidden
      "
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/50 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/50 blur-[120px]" />

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-[1400px] mx-auto mb-16 relative z-10"
        >
          <h1
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            mb-5
          "
          >
            My Projects
          </h1>

          <p
            className="
            text-gray-400
            max-w-2xl
            text-base
            md:text-lg
          "
          >
            A collection of projects I have worked on or participated in
            developing.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
          max-w-[1400px]
          mx-auto
          mb-16
          relative
          z-10
        "
        >
          <div
            className="
            flex
            gap-3
            overflow-x-auto
            pb-2
            scrollbar-hide
            md:flex-wrap
          "
          >
            {filters.map((filter) => {
              const active = groupType === filter.value;

              return (
                <motion.button
                  key={filter.value}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() =>
                    dispatch(
                      setGoupType(
                        active
                          ? "all"
                          : filter.value
                      )
                    )
                  }
                  className={`
                    relative
                    whitespace-nowrap
                    px-6
                    py-3
                    rounded-full
                    border
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-cyan-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/30"
                        : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                    }
                  `}
                >
                  {filter.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="
          max-w-[1400px]
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-8
          relative
          z-10
        "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title ?? index}
                layout
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}