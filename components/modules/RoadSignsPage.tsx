"use client";

import { motion, Variants } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { paragraphs } from "@/constants/roadSignsData";
import RoadSigns from "@/components/modules/RoadSigns";

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const roadSignsContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
  },
};

export default function RoadSignsPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start px-4 pt-6 sm:px-6 sm:pt-8"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold text-center mb-6 text-gray-800 sm:text-4xl sm:mb-8"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <TextAnimate animation="blurInUp" by="character" once>
          საგზაო ნიშნების ცნობარი
        </TextAnimate>
      </motion.h1>
      <motion.div
        className="w-full max-w-2xl text-gray-700 text-base text-center space-y-4 sm:max-w-6xl sm:text-lg sm:space-y-6 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {paragraphs.map((paragraph) => (
          <motion.p key={paragraph.id} variants={paragraphVariants}>
            {paragraph.text}
          </motion.p>
        ))}
      </motion.div>
      <motion.div
        className="sm:max-w-7xl mx-auto w-full rounded-md py-5 px-10"
        variants={roadSignsContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <RoadSigns />
      </motion.div>
    </motion.div>
  );
}
