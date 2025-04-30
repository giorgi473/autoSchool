"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

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

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HomePage: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 font-sans">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center border-b pb-10 mb-8 sm:mb-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-4xl font-bold mb-2"
          >
            რას წარმოვადგენთ?
          </motion.h1>
          <motion.hr
            variants={itemVariants}
            className="my-2 sm:my-3 border-gray-300"
          />
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed"
          >
            ავტოსკოლა ვარკეთილში დაარსდა 2010 წელს. ავტოსკოლის მთავარი მიზანი
            იყო, არის და იქნება, არ დაკარგოს მაღალი პროფესიონალიზმი. ავტოსკოლა
            ვარკეთილში არის ადგილი სადაც გპირდებით გარანტირებულ შედეგს,
            კვალიფიცირებულ, გამოცდილ, მეგობრულ და პოზიტივით სავსე
            ინსტრუქტორებთან ერთად. ჩენი პროფესიონალიზმი თქვენი გარანტია!
            ავტოსკოლა ვარკეთილში ის რაც გჭირდება!
          </motion.p>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="flex-1 relative w-full aspect-[5/3]"
        >
          <Image
            src="/img.jpg"
            alt="Road Signs"
            fill
            className="rounded-md object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl font-bold mb-8">სერვისები</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center mb-8 sm:mb-12"
      >
        <motion.div
          variants={imageVariants}
          className="flex-1 relative w-full aspect-[5/3] sm:flex-col-reverse"
        >
          <Image
            src="/imageLeft.jpg"
            alt="Theoretical Lessons"
            fill
            className="rounded-md object-cover"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2">
            ჯგუფური სწავლება
          </h2>
          <Separator className="w-24" />
          <p className="text-base sm:text-lg leading-relaxed">
            ჯგუფთან ერთად სწავლის დროს, მოსწავლეს უფრო უადვილდება მასალის
            გაგება, ისინი ერთად განიხილავენ თემებს და ერთმანეთისგან იგებენ
            სხვადასხვა ინფორმაციებს.
          </p>
          <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-2">
            ჯგუფთან ერთად 80 ლარი
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center mb-8 sm:mb-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-6 items-end"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2">
            ინდივიდუალური სწავლება
          </h2>
          <Separator className="w-24" />
          <p className="text-base sm:text-lg leading-relaxed">
            ინდივიდუალი სწავლებისას მოსწავლე უფრო მარტივად გებულობს მოცემულ
            ინფორმაციას, რადგან მას არანაირი ხელის შემშლელი ფაქტორი არ აქვს,
            ინსტრუქტორის ყურადღებაც სრულიად 1 მოსწავლეზეა გადართული.
          </p>
          <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-2">
            ინდივიდუალური 250 ლარი
          </p>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="flex-1 relative w-full aspect-[5/3]"
        >
          <Image
            src="/imageRight.jpg"
            alt="Practical Lessons"
            fill
            className="rounded-md object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center mb-8 sm:mb-12"
      >
        <motion.div
          variants={imageVariants}
          className="flex-1 relative w-full aspect-[5/3]"
        >
          <Image
            src="/imageComputerLeft.jpg"
            alt="Internal Exam"
            fill
            className="rounded-md object-cover"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2">
            შიდა გამოცდა
          </h2>
          <Separator className="w-24" />
          <p className="text-base sm:text-lg leading-relaxed">
            თითოეულ მოსწავლეს ეძლევა შესაძლებლობა, მთავარ გამოცდამდე გაიაროს
            შიდა გამოცდა და ისწავლოს ყველა საჭირო ხრიკი, იმისთვის, რომ მთაავარი
            გამოცდა უპრობლემოდ ჩააბაროს.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 items-center mb-8 sm:mb-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col justify-center space-y-6 items-end"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2">
            პრაქტიკული სწავლება მოედანზე და ქალაქში
          </h2>
          <Separator className="w-24" />
          <p className="text-base sm:text-lg leading-relaxed">
            მთავარ გამოცდაზე სანამ გავა მოსწავლე, აუცილებელია პრაქტიკა, რასაც
            ავტოსკოლა ვარკეთილში გთავაზობთ ყველაზე დაბალ ფასად და რაც მთავარია
            ხარისხიანად
          </p>
          <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-2">
            მოედანი (45 წუთი) 35 ლარი
          </p>
          <p className="text-lg sm:text-xl font-semibold text-gray-500 mt-2">
            ქალაქი (45 წუთი) 45 ლარი
          </p>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="flex-1 relative w-full aspect-[5/3]"
        >
          <Image
            src="/imageCarRight.jpg"
            alt="Practical Driving Lessons"
            fill
            className="rounded-md object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto flex flex-col items-center mb-8 sm:mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
          რას გთავაზობთ
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col justify-center space-y-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                📘
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2">
              ინსტენსიური სწავლება
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              ჩვენი პროფესიონალი ინსტრუქტორების სწავლის სტილი ცოტა განსხვავდება,
              ისინი არიან ორიენტირებულნი შედეგზე და არა რაიმე სხვა ფაქტორზე.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col justify-center space-y-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                📈
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2">
              98% შედეგი
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              ჩვენი მოსწავლეების 98% აღწევენ მიზანს და იღებენ მართვის მოწმობას
              უმაღლესი შედეგით, სტუდენტის ყურადღება ჩვენთვის წინაპირობაა.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col justify-center space-y-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                👥
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2">
              მეგობრული გარემო
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              ჩვენს სასწავლო კლასში არის მეგობრული გარემო, მაღალი დონის
              ინსტრუქტორის და მოსწავლის დამოკიდებულება, არ დაიშვება არანაირი
              შეურაცყოფა.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto flex flex-col items-center mb-8 sm:mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
          ჩვენი მდებარეობა
        </motion.h2>
        <motion.div
          variants={imageVariants}
          className="w-full h-[400px] sm:h-[500px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.845249683444!2d44.83698731541413!3d41.69998797923764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDEuNjk5OTg4LDQ0LjgzNjk4NzE!5e0!3m2!1sen!2sge!4v1698771234567!5m2!1sen!2sge"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
