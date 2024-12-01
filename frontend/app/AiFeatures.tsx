"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, FileText, Check } from "lucide-react";

const aiFeatures = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Smart Summarization",
    description: "Get concise summaries of any document in seconds",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Intelligent Q&A",
    description: "Ask questions about your documents and get instant answers",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Multi-format Support",
    description: "Process PDFs, DOCs, TXTs, and more with ease",
  },
];

export function AIFeatures() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 mt-[100px]">
      <div>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Unleash the power of{" "}
            <span className="text-purple-600">Vault's AI</span>{" "}
            <Sparkles className="inline-block w-8 h-8 md:w-10 md:h-10 text-purple-600" />
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
            Experience lightning-fast document processing and intelligent
            insights with our AI-powered WhatsApp bot.
          </p>
          <div className="space-y-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
              <div className="text-lg text-gray-500">AI Document Processor</div>
            </div>
            <div className="space-y-6">
              <motion.div
                className="h-12 bg-gray-100 rounded-lg"
                initial={{ width: "30%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.div
                className="h-12 bg-purple-100 rounded-lg"
                initial={{ width: "50%" }}
                animate={{ width: "80%" }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.div
                className="h-12 bg-green-100 rounded-lg"
                initial={{ width: "70%" }}
                animate={{ width: "90%" }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium text-gray-600">
                Processing Complete
              </div>
              <motion.div
                className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -z-10 top-1/2 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}
