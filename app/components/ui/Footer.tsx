"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
relative

  border-t
  border-white/10

  bg-black/30
  backdrop-blur-xl

  overflow-hidden
  "
    >
      {/* Glow */}

      <div
        className="
    absolute
    top-0
    left-1/2

    -translate-x-1/2

    w-[400px]
    h-[150px]

    bg-purple-500/20

    blur-3xl
    "
      />

      <div
        className="
    max-w-7xl
    mx-auto

    px-4
    md:px-8

    py-12
    "
      >
        <div
          className="
      flex
      flex-col
      md:flex-row

      items-center
      justify-between

      gap-8
      "
        >
          {/* Left */}

          <div className="text-center md:text-left">
            <h3
              className="
          text-2xl
          font-bold

          bg-gradient-to-r
          from-purple-400
          to-cyan-400

          bg-clip-text
          text-transparent
          "
            >
              Mohammed Babiker
            </h3>

            <p
              className="
          mt-2

          text-gray-400
          "
            >
              Full Stack Developer & Software Engineer
            </p>

            <p
              className="
          mt-3

          text-sm
          text-gray-500

          max-w-md
          "
            >
              Building scalable web applications, mobile apps, and modern
              digital experiences.
            </p>
          </div>

          {/* Right */}

          <div
            className="
        flex
        items-center

        gap-4
        "
          >
            <Link
              href="mailto:smilemedo@outlook.com"
              className="
          p-3

          rounded-xl

          bg-white/5

          hover:bg-purple-500/20
          hover:text-purple-300

          hover:scale-110

          transition-all
          duration-300
          "
            >
              <Mail size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/m-babker-8366b4282/"
              target="_blank"
              className="
          p-3

          rounded-xl

          bg-white/5

          hover:bg-cyan-500/20
          hover:text-cyan-300

          hover:scale-110

          transition-all
          duration-300
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
            </Link>

            <Link
              href="https://github.com/MrBabker"
              target="_blank"
              className="
          p-3

          rounded-xl

          bg-white/5

          hover:bg-white/10

          hover:scale-110

          transition-all
          duration-300
          "
            >
              <SiGithub size={20} />
            </Link>

            {/* Back To Top */}

            <button
              onClick={scrollToTop}
              className="
          p-3

          rounded-xl

          bg-gradient-to-r
          from-purple-600
          to-cyan-600

          hover:scale-110

          transition-all
          duration-300
          "
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
      mt-10
      pt-6

      border-t
      border-white/10

      text-center

      text-sm
      text-gray-500
      "
        >
          © 2026 Mohammed Babiker. Crafted with Next.js, TypeScript & Tailwind
          CSS.
        </div>
      </div>
    </footer>
  );
}
