"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

const contacts = [
  {
    title: "Email",
    value: "smilemedo@outlook.com",
    href: "mailto:smilemedo@outlook.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+971 50 238 5815",
    href: "tel:+971502385815",
    icon: Phone,
  },
  {
    title: "LinkedIn",
    value: "View Profile",
    href: "https://www.linkedin.com/in/m-babker-8366b4282/",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    value: "View Profile",
    href: "https://github.com/MrBabker",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      py-24
      px-4
      "
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Contact Me</SectionTitle>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          text-center
          text-gray-300
          mb-12
          max-w-2xl
          mx-auto
          "
        >
          Have a project idea, freelance work, or a full-time opportunity? Feel
          free to contact me.
        </motion.p>

        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
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
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                bg-white/5
                md:backdrop-blur-xl

                border
                border-white/10

                rounded-3xl

                p-6

                flex
                items-center
                gap-5

                hover:border-purple-500/40

                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-14
                  h-14

                  flex
                  items-center
                  justify-center

                  rounded-2xl

                  bg-purple-600/20
                  "
                >
                  <Icon size={28} />
                </div>

                <div>
                  <h3
                    className="
                    font-semibold
                    text-lg
                    "
                  >
                    {contact.title}
                  </h3>

                  <p
                    className="
                    text-gray-300
                    "
                  >
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
      <motion.a
        href="mailto:smilemedo@outlook.com"
        whileHover={{
          scale: 1.05,
        }}
        className="
  mt-12
  mx-auto

  flex
  w-fit

  px-8
  py-4

  rounded-2xl

  bg-gradient-to-r
  from-purple-600
  to-indigo-600

  font-semibold
  "
      >
        Lets Work Together 🚀
      </motion.a>
    </section>
  );
}
