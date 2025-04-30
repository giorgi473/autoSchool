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

function ContactPage() {
  return (
    <div className="p-4 sm:p-5 font-sans">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto flex flex-col mb-8 sm:mb-12 border-b pb-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 text-center"
        >
          კონტაქტი
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 sm:gap-12 w-full max-w-md sm:max-w-2xl lg:max-w-full justify-center lg:justify-between mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col space-y-4 text-center lg:text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
              ზუსტი მისამართი
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              ჯავახეთის ქუჩა N 102. ბავშვთა გასარათობი ცენტრი ქენდი ლენდია ჩვენს
              შენობაში და ჯასთინის ტანსაცმელების მაღაზია. უნო შუზის და გოა
              კრედიტის შორის, სართული 4, ოთახი 3.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col space-y-4 text-center lg:text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
              სამუშაო საათები
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-green-500">
              ორშაბათი – პარასკევი
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-green-500">
              შაბათი – კვირა
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-green-500 font-semibold">
              10:00 – 22:00 დასვენება
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 sm:gap-12 w-full max-w-md sm:max-w-2xl lg:max-w-full justify-center lg:justify-between mx-auto mt-6 sm:mt-8"
        >
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col space-y-4 text-center lg:text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
              საკონტაქტო ნომრები
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-green-500 font-semibold">
              +995 574-747-581 - გურამი
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-green-500 font-semibold">
              +995 598-185-951 - გურამი
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col space-y-4 text-center lg:text-center"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
              ელ-ფოსტა
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              Guramdiasamide123@gmail.com
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

export default ContactPage;
