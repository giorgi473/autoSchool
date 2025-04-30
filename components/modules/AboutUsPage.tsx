"use client";

import React from "react";
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function AboutUsPage() {
  return (
    <div className="p-4 sm:p-5 font-sans">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto flex flex-col items-center mb-8 sm:mb-12 border-b pb-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800"
        >
          ჩვენს შესახებ
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-3xl text-center"
        >
          ავტოსკოლა ვარკეთილში დაარსდა 2010 წელს. ავტოსკოლის მთავარი მიზანი იყო,
          არის და იქნება, არ დაკარგოს მაღალი პროფესიონალიზმი. ავტოსკოლა
          ვარკეთილში არის ადგილი სადაც გპირდებით გარანტირებულ შედეგს,
          კვალიფიცირებულ, გამოცდილ, მეგობრულ და პოზიტივით სავსე ინსტრუქტორებთან
          ერთად. ჩვენი პროფესიონალიზმი თქვენი გარანტია! ავტოსკოლა ვარკეთილში ის
          რაც გჭირდება!
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-8 sm:mt-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg sm:text-xl font-semibold text-gray-700">
              შეგიძლიათ ენდოთ ჩვენს 15 წლიან გამოცდილებას და 10 000 ზე მეტ
              წარმატებულ ჩაბარებულ მართვის მოწმობიან მოსწავლეთა რიგს შეუერთდეთ.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center mb-8 sm:mb-12 border-b pb-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-6 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
              👥
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            წარმატებული მოსწავლე
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-green-500">
            <NumberTicker
              value={10000}
              className="text-xl sm:text-2xl font-bold text-green-500"
            />
            +
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-6 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
              🚗
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            სავარჯიშო მანქანა
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-green-500">
            {" "}
            <NumberTicker
              value={3}
              className="text-xl sm:text-2xl font-bold text-green-500"
            />
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-6 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
              🎓
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            გამოცდილება (წელი)
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-green-500">
            <NumberTicker
              value={15}
              className="text-xl sm:text-2xl font-bold text-green-500"
            />
            +
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUsPage;
