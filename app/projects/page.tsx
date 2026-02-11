"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setGoupType } from "@/features/counter/counterSlice";

export enum typs {
  app,
  web,
  game,
}

/* ================= DATA ================= */

export const projects = [
  {
    typ: typs.app,
    title: "Mashaaer App",
    description:
      "Mashaaer is a social media application that combines modern app design with the discussion-focused nature of classic online forums, emphasizing meaningful content and conversations over visual appearance.",
    tech: ["ReactNaive", "NestJS", "PostgreSQL"],
    cover: "/projects/mashaaer/mapp.png",
    images: [
      "/projects/mashaaer/mapp.png",
      "/projects/mashaaer/ss8.png",
      "/projects/mashaaer/s77.png",
      "/projects/mashaaer/s4.png",
      "/projects/mashaaer/ss5.png",
      "/projects/mashaaer/ss1.png",
    ],
    link: "https://drive.google.com/file/d/1k4mpFu6iI00uE9VThoc60FiBT-Jr-NcK/view?usp=sharing",
    button: "/butt/web.png",
  },
  {
    typ: typs.web,
    title: "Personal Address Code",
    description:
      "A PAC is a personal address for a location,\nas simple as a phone number.\n🔹 Generated from geolocation\n🔹 Saved and shared manually\n🔹 Anyone who enters the code → goes directly to the location",
    tech: ["React", ".Net", "MySQL"],
    cover: "/projects/pac/pac.jpg",
    images: [
      "/projects/pac/pac.jpg",
      "/projects/pac/p1.png",
      "/projects/pac/p2.png",
      "/projects/pac/p3.png",
      "/projects/pac/p4.jpg",
    ],
    link: "https://personaladdresscodepac.vercel.app/",
    button: "/butt/web.png",
  },
  {
    typ: typs.web,
    title: "Rahibeen Studio",
    description:
      "In the vibrant heart of Riyadh, amidst its alleys and markets, the spark of ( Raheebeen Studio ) was ignited, a dream that brings together every gamer who adores the authentic Arab culture along with a passion for modern technology",
    tech: ["Next.js"],
    cover: "/projects/afresho/a1.png",
    images: [
      "/projects/afresho/a1.png",
      "/projects/afresho/a2.png",
      "/projects/afresho/a3.png",
      "/projects/afresho/a4.png",
    ],
    link: "https://raheebeen.com/en/",
    button: "/butt/web.png",
  },
  {
    typ: typs.web,
    title: "Rewayati",
    description:
      "A website specializing in creating novels, where you can create a set of subheadings to build a structured novel, and others can read each other's novels.",
    tech: ["Next.js", "Nest.js", "PostgreSQL"],
    cover: "/rewayat/r1.png",
    images: [
      "/rewayat/r1.png",
      "/rewayat/r2.png",
      "/rewayat/r3.png",
      "/rewayat/r4.png",
    ],
    link: "https://github.com/MrBabker/Rewayati_Front",
    button: "/butt/git.png",
  },
  {
    typ: typs.web,
    title: "solutions-groups",
    description:
      "Our company specializes in providing comprehensive educational services for students and researchers. We assist students in choosing suitable majors, preparing application files, applying to local and international universities, and recommending appropriate scholarships for each student.",
    tech: ["HTML", "CSS", "JavaScript"],
    cover: "/solution/s2.png",
    images: [
      "/solution/s2.png",
      "/solution/s1.png",
      "/solution/s3.png",
      "/solution/s4.png",
      "/solution/s5.png",
    ],
    link: "https://solutions-groups.com/index.html",
    button: "/butt/web.png",
  },
  {
    typ: typs.web,
    title: "ZERO9 Store",
    description:
      "A comprehensive online store selling electronic devices such as phones, laptops, and computers.",
    tech: ["Next.js", "Nest.js", "PostgreSQL"],
    cover: "/zstore/z1.png",
    images: [
      "/zstore/z1.png",
      "/zstore/z2.png",
      "/zstore/z3.png",
      "/zstore/z4.png",
      "/zstore/z5.png",
      "/zstore/z6.png",
    ],
    link: "https://zero9store-001-site1.site4future.com/",
    button: "/butt/web.png",
  },
  {
    typ: typs.game,
    title: "Tactical Warfare",
    description:
      "The tactical war game is a strategic game with a classic perspective system and an enhanced artistic style, featuring an exciting story about a war between two forces, both human, but one group comes from a parallel planet to Earth after the destruction of their planet, seeking a new home.",
    tech: ["Unity3D", "Photon"],
    cover: "/warfare/t1.jpg",
    images: [
      "/warfare/t1.jpg",
      "/warfare/tt2.jpg",
      "/warfare/tt3.jpg",
      "/warfare/tt4.jpg",
      "/warfare/tt5.jpg",
      "/warfare/tt6.jpg",
    ],
    link: "https://store.steampowered.com/app/2599770/Tactical_Warfare/",
    button: "/butt/steam.png",
  },
  {
    typ: typs.game,
    title: "TVs: The Awakening",
    description:
      "TVs is a single player platformer game, focuses on a journey of a tv character called “u” who needs to drive his way on strange events to solve mysterious puzzles till he finds the truth. ",
    tech: ["Unity3D"],
    cover: "/tv/v1.jpg",
    images: [
      "/tv/v1.jpg",
      "/tv/v2.jpg",
      "/tv/v3.jpg",
      "/tv/v4.jpg",
      "/tv/v5.jpg",
      "/tv/v6.jpg",
    ],
    link: "https://store.steampowered.com/app/2063050/TVs_The_Awakening/",
    button: "/butt/steam.png",
  },
  {
    typ: typs.game,
    title: "SUBS",
    description:
      "Social Climb is a simple yet challenging precision platformer. You play as a young dreamer who wants to become an internet star, starting his journey from his bedroom and his personal computer, chasing the dream of reaching 10 million subscribers.",
    tech: ["Unity3D"],
    cover: "/subs/u1.png",
    images: [
      "/subs/u1.png",
      "/subs/u2.jpg",
      "/subs/u3.jpg",
      "/subs/u3.jpg",
      "/subs/u4.jpg",
      "/subs/u5.jpg",
      "/subs/u6.jpg",
    ],
    link: "https://store.steampowered.com/app/3784950/SUBS/",
    button: "/butt/steam.png",
  },
  {
    typ: typs.game,
    title: "Fighters",
    description:
      "A casual fighting game featuring well-known fighters. This game offers fast-paced, action-packed battles between iconic characters from various universes.",
    tech: ["Unity3D"],
    cover: "/drg/d1.jpg",
    images: [
      "/drg/d1.jpg",
      "/drg/d2.png",
      "/drg/d3.png",
      "/drg/d4.png",
      "/drg/d5.png",
      "/drg/d6.png",
      "/drg/d7.png",
    ],
    link: "https://mbabker.itch.io/fighters",
    button: "/butt/itch.png",
  },
  {
    typ: typs.game,
    title: "Afrsho",
    description:
      "Team up, fight in PvP battles, unlock characters & mini-games. Fun, fast & free! Afrsho is the ultimate PvP squad battle game! Build your dream team from unique characters and crush your enemies in real-time fights.",
    tech: ["Unity3D"],
    cover: "/afr/af1.jpeg",
    images: [
      "/afr/af1.jpeg",
      "/afr/af2.png",
      "/afr/af3.png",
      "/afr/af4.png",
      "/afr/af5.png",
    ],
    link: "https://play.google.com/store/apps/details?id=sa.naphora.afrsho&pli=1",
    button: "/butt/ply.png",
  },
];

/* ================= PAGE ================= */

export default function ProjectsPage() {
  const groupType = useSelector((state: RootState) => state.counter.groupType);
  const dispatch = useDispatch();
  return (
    <div>
      <header className="fixed w-full bg-black/20 backdrop-blur-md z-50 h-20">
        <div className=" flex justify-between items-center h-full px-8">
          <nav className=" flex flex-row  items-center gap-5">
            <Image
              className=" rounded-full"
              src="/GamePad.png"
              alt="mbabker"
              width={40}
              height={40}
            />
            <Link href="/">
              {" "}
              <h1 className="text-xl md:text-2xl font-bold">
                Mohammed Babiker
              </h1>
            </Link>
          </nav>

          <nav className="space-x-6 text-white">
            {["Home"].map((section) => (
              <Link
                href="/"
                key={section}
                className="hover:text-indigo-500 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <section className="min-h-screen bg-[#0b0b0f] px-6 md:px-16 py-24">
        {/* Header */}

        <div className="max-w-7xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 max-w-xl">
            مجموعة من المشاريع التي عملت عليها أو شاركت في تطويرها
          </p>
        </div>

        <section className=" w-full  flex flex-row  items-center gap-5 p-5 mb-10">
          <button
            onClick={() => {
              groupType === typs.web.toString()
                ? dispatch(setGoupType("all"))
                : dispatch(setGoupType(typs.web.toString()));
            }}
            className=" p-3 py-2 rounded-2xl hover:scale-105 transition-transform duration-300 bg-cyan-200/20 hover:bg-cyan-200/30  cursor-pointer"
          >
            Webs{" "}
            {groupType === typs.web.toString() && (
              <div className=" p-1 rounded-full bg-amber-400"></div>
            )}
          </button>
          <button
            onClick={() => {
              groupType === typs.app.toString()
                ? dispatch(setGoupType("all"))
                : dispatch(setGoupType(typs.app.toString()));
            }}
            className=" p-3 py-2 rounded-2xl hover:scale-105 transition-transform duration-300 bg-cyan-200/20 hover:bg-cyan-200/30  cursor-pointer"
          >
            Mobile Apps{" "}
            {groupType === typs.app.toString() && (
              <div className=" p-1 rounded-full bg-amber-400"></div>
            )}
          </button>
          <button
            onClick={() => {
              groupType === typs.game.toString()
                ? dispatch(setGoupType("all"))
                : dispatch(setGoupType(typs.game.toString()));
            }}
            className=" p-3 py-2 rounded-2xl hover:scale-105 transition-transform duration-300 bg-cyan-200/20 hover:bg-cyan-200/30  cursor-pointer"
          >
            Games{" "}
            {groupType === typs.game.toString() && (
              <div className=" p-1 rounded-full bg-amber-400"></div>
            )}
          </button>
        </section>
        {/* Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(
            (project, idx) =>
              (project.typ.toString() === groupType || groupType === "all") && (
                <ProjectCard key={idx} project={project} />
              ),
          )}
        </div>
      </section>
    </div>
  );
}

/* ================= CARD ================= */

function ProjectCard({ project }: any) {
  const [activeImage, setActiveImage] = useState(project.cover);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="
        bg-[#111117] rounded-2xl overflow-hidden
        border border-[#1f1f2b]
        hover:border-indigo-500/40
        shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={activeImage}
          alt={project.title}
          fill
          className="object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 px-4 py-3 bg-[#0e0e14]">
        {project.images.map((img: string, i: number) => (
          <div
            key={i}
            onMouseEnter={() => setActiveImage(img)}
            className="
              w-12 h-12 rounded-lg overflow-hidden
              border border-gray-700
              cursor-pointer
              hover:border-indigo-400
              transition
            "
          >
            <Image
              src={img}
              alt=""
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        <p className="text-gray-400 text-sm mb-5">{project.description}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="
                text-xs px-3 py-1 rounded-full
                bg-[#1a1a26] text-gray-300
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.link}
          className="
            inline-flex items-center gap-2
            text-indigo-400 font-semibold
            hover:gap-3 transition-all
           
          "
        >
          <Image
            src={project.button}
            alt=""
            width={30}
            height={30}
            className="object-cover rounded-full hover:scale-110 transition-transform duration-300"
          />
          View Project
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}
