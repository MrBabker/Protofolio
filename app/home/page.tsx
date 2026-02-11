"use client";
// pages/index.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { typs } from "../projects/page";
import { setGoupType } from "@/features/counter/counterSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const projects = [
  {
    name: "Website Project",
    description: "",
    link: "/projects",
    groupType: typs.web,
  },
  {
    name: "Mobile App",
    description: "",
    link: "/projects",
    groupType: typs.app,
  },
  {
    name: "Games",
    description: "",
    link: "/projects",
    groupType: typs.game,
  },
];

const skills = [
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Nest.js",
  "React Native",
  "JavaSript",
  "TypeScript",
  "blender 3D",
  "Unity 3D",
  "UI UX",
  "Figma",
  "Photoshop",
  "Graphic designing",
];
const skillsImages = [
  { src: "/icons/cs.png", sizx: 500, sizy: 500 },
  { src: "/icons/reactjs.png", sizx: 200, sizy: 200 },
  { src: "/icons/next.png", sizx: 200, sizy: 200 },
  { src: "/icons/node.js.jpg", sizx: 500, sizy: 500 },
  { src: "", sizx: 500, sizy: 500 },
  { src: "/icons/nestjs.png", sizx: 200, sizy: 200 },
  { src: "", sizx: 500, sizy: 500 },
  { src: "/icons/javas.png", sizx: 500, sizy: 500 },
  { src: "/icons/types.png", sizx: 500, sizy: 500 },
  { src: "/icons/blender.jpg", sizx: 500, sizy: 500 },
  { src: "/icons/unity.png", sizx: 500, sizy: 500 },
  { src: "/icons/ps.jpg", sizx: 500, sizy: 500 },
  { src: "/icons/mo.png", sizx: 500, sizy: 500 },
];

export default function Home() {
  // Fixed header height

  const router = useRouter();
  const headerHeight = 80; // px
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // Scroll to section with offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans bg-gray-900 text-white w-full overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full bg-black/30 backdrop-blur-md z-50 h-20">
        <div className="flex justify-between items-center h-full px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              className="rounded-full"
              src="/GamePad.png"
              alt="mbabker"
              width={40}
              height={40}
            />
            <h1 className="text-lg md:text-2xl font-bold whitespace-nowrap">
              Mohammed Babiker
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-white">
            {["about", "skills", "CV", "projects", "contact"].map(
              (section, index) => (
                <button
                  key={section}
                  onClick={() => {
                    if (index !== 2) {
                      scrollToSection(section);
                    } else {
                      window.open(
                        "https://drive.google.com/file/d/10iLtUVU9xOGKV8Xb5l-hOFgmtExQhSS9/view?usp=sharing",
                        "_blank",
                      );
                    }
                  }}
                  className="hover:text-indigo-400 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ),
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-white">
            {["about", "skills", "CV", "projects", "contact"].map(
              (section, index) => (
                <button
                  key={section}
                  onClick={() => {
                    if (index !== 2) {
                      scrollToSection(section);
                    } else {
                      window.open(
                        "https://drive.google.com/file/d/10iLtUVU9xOGKV8Xb5l-hOFgmtExQhSS9/view?usp=sharing",
                        "_blank",
                      );
                    }
                    setIsOpen(false);
                  }}
                  className="text-lg hover:text-indigo-400 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ),
            )}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-center px-4">
        <div className=" border-2 rounded-full items-center m-7">
          <Image
            className=" rounded-full m-2"
            src="/mm.jpeg"
            alt="mbabker"
            width={200}
            height={200}
          />
        </div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {" Hi, I'm Mohammed"}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Web & Mobile Developer | Software developer
        </motion.p>
        <motion.button
          onClick={() => scrollToSection("projects")}
          className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:scale-105 transition transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          View My Work
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="w-full pt-24 pb-24 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {
              "  I'm a passionate Web Mobile ,Game developer with a love for building clean,"
            }
            modern, and efficient applications. I have been working in this
            field for about 3 years in website and mobile application
            development, backend development, and integrating them with each
            other. I have also been working in game development and integrating
            them with the backend for more than 8 years.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full pt-24 pb-24 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {skillsImages.map((skill, idx) => (
                <div key={idx}>
                  {skill.src.trim().length > 0 && (
                    <div
                      className="
            w-20 h-20
            flex items-center justify-center
            rounded-full
            overflow-hidden
            bg-gray-800
            shadow-lg
           border-0
            border-b-blue-100
            transition-all duration-300
            hover:scale-110
            hover:shadow-indigo-500/50
          "
                    >
                      <Image
                        src={skill.src}
                        alt=""
                        width={skill.sizx}
                        height={skill.sizy}
                        className="
              object-contain
              transition-transform duration-300
              hover:scale-110
            "
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 gap-y-7">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className=" hover:scale-110  transition-transform duration-300"
                >
                  <span className="px-5 py-2 mb-10 hover:shadow-blue-500-500/50 transition-all bg-indigo-600 rounded-full shadow-md hover:bg-indigo-650  hover:scale-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full pt-24 pb-24 bg-gray-800 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <button
              className=" cursor-pointer hover:scale-105 hover:text-blue-200 transition-transform duration-300"
              onClick={() => {
                dispatch(setGoupType("all"));
                router.push("/projects");
              }}
            >
              {" "}
              Projects
            </button>{" "}
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition transform"
              >
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <button
                  onClick={() => {
                    dispatch(setGoupType(project.groupType.toString()));
                    router.push(project.link);
                  }}
                  className="text-indigo-400 font-semibold hover:underline"
                >
                  View Project
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full pt-24 pb-24 bg-indigo-700 text-white px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Email: smilemedo@outlook.com
          </motion.p>
          <motion.p
            className="mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Phone: +971 50 238 5815
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            LinkedIn:{" "}
            <Link href="https://www.linkedin.com/in/m-babker-8366b4282/">
              https://www.linkedin.com/in/m-babker-8366b4282/
            </Link>
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-gray-400">
        &copy; 2026 Mohammed Babiker. All rights reserved.
      </footer>
    </div>
  );
}
