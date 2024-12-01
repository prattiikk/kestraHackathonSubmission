"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, ImageIcon } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const fileTypes = [
  { ext: ".pdf", color: "bg-red-400" },
  { ext: ".png", color: "bg-blue-400" },
  { ext: ".docx", color: "bg-indigo-400" },
  { ext: ".txt", color: "bg-green-400" },
  { ext: ".webp", color: "bg-purple-400" },
  { ext: ".jpg", color: "bg-orange-400" },
  { ext: ".xlsx", color: "bg-emerald-400" },
  { ext: ".svg", color: "bg-pink-400" },
];

const conversions = [
  { from: "PDF", to: "TXT", icon: <FileText className="w-6 h-6" /> },
  { from: "DOCX", to: "PDF", icon: <FileText className="w-6 h-6" /> },
  { from: "JPG", to: "WEBP", icon: <ImageIcon className="w-6 h-6" /> },
  { from: "PNG", to: "JPG", icon: <ImageIcon className="w-6 h-6" /> },
];

export default function Conversions() {
  const [activeConversion, setActiveConversion] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveConversion((prev) => (prev + 1) % conversions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 ">
        <div className="w-full max-w-4xl mx-auto">
          {/* Floating File Types */}
          <div className="relative h-40 hidden md:flex justify-center items-center">
            {fileTypes.map((file, index) => (
              <motion.div
                key={file.ext}
                className={`${file.color} text-white px-4 py-2 rounded-lg font-mono text-sm font-bold shadow-lg
                  md:absolute md:transform-none
                  relative inline-block mx-2 my-1
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: `${(index - (fileTypes.length - 1) / 2) * 60}px`,
                  rotate: index % 2 === 0 ? -3 : 3,
                }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {file.ext}
              </motion.div>
            ))}
          </div>
          <div className="flex md:hidden flex-wrap justify-center gap-2 py-4">
            {fileTypes.map((file) => (
              <div
                key={file.ext}
                className={`${file.color} text-white px-4 py-2 rounded-lg font-mono text-sm font-bold shadow-lg`}
              >
                {file.ext}
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Convert Files with Ease
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Transform your files into any format you need, right from WhatsApp. No
          additional apps required.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-3 items-center w-full max-w-lg gap-4">
            {conversions.map((conversion, index) => (
              <React.Fragment key={`${conversion.from}-${conversion.to}`}>
                <motion.div
                  className={`p-4 rounded-xl border-2 text-center ${
                    activeConversion === index
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                  whileInView={{
                    scale: 1.05,
                    borderColor: "#3B82F6",
                    backgroundColor: "rgb(239 246 255)",
                  }}
                  initial={{
                    scale: 1,
                    borderColor: "#e5e7eb",
                    backgroundColor: "white",
                  }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    {conversion.icon}
                  </div>
                  <div className="font-mono text-sm font-bold">
                    {conversion.from}
                  </div>
                </motion.div>

                <motion.div
                  className="flex justify-center"
                  animate={{
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </motion.div>

                <motion.div
                  className={`p-4 rounded-xl border-2 text-center ${
                    activeConversion === index
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200"
                  }`}
                  whileInView={{
                    scale: 1.05,
                    borderColor: "#F97316",
                    backgroundColor: "rgb(255 247 237)",
                  }}
                  initial={{
                    scale: 1,
                    borderColor: "#e5e7eb",
                    backgroundColor: "white",
                  }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    {conversion.icon}
                  </div>
                  <div className="font-mono text-sm font-bold">
                    {conversion.to}
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
