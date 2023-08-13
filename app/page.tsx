"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: "150px",
      width: "150px",
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-slate-50 overflow-x-clip md:cursor-none">
      <div className="relative w-full h-72 max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute flex w-full h-full items-center justify-center">
          <p
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
            className="md:text-6xl text-4xl font-bold"
          >
            kontinew
          </p>
        </div>
        <motion.div
          className="md:block hidden fixed left-0 top-0 bg-black rounded-full w-[32px] h-[32px] pointer-events-none"
          variants={variants as any}
          animate={cursorVariant}
        ></motion.div>
      </div>
      <Link
        className="absolute bottom-24 border p-4 px-6 rounded-md border-gray-700 cursor-none"
        href="https://chiragkhurana.com"
      >
        Apps
      </Link>
    </main>
  );
}
