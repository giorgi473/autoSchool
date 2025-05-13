"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import { X } from "lucide-react";
import { MenuItem, menuItems } from "@/constants/roadSignsData";

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  hover: {
    y: -5,
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // თითოეული ქარდის გამოჩენას შორის 0.2 წმ დაგვიანება
      delayChildren: 0.3, // პირველი ქარდის ანიმაციის დაწყებამდე 0.3 წმ
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export default function RoadSigns() {
  const [activeCategory, setActiveCategory] = useState<string>("warning");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{
    item: MenuItem;
    modalImage?: string;
    modalDescription: string;
  } | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px", // ანიმაცია იწყება, როცა კონტეინერი 100px-ით ახლოსაა
  });

  const handleClick = (category: string) => {
    setActiveCategory(category);
    setActiveCardId(null);
  };

  const handleImageClick = (
    item: MenuItem,
    modalImage: string | undefined,
    modalDescription: string,
    cardId: string
  ) => {
    setSelectedItem({ item, modalImage, modalDescription });
    setIsModalOpen(true);
    setActiveCardId(cardId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setActiveCardId(null);
  };

  const filteredItems = menuItems
    .filter((item) => item.content && item.category === activeCategory)
    .flatMap((item) =>
      item.content!.map((content, index) => ({
        id: `${item.id}-${index}`,
        item,
        image: content.image,
        description: content.description,
        modalImage: content.modal?.modalImage,
        modalDescription: content.modal?.modalDescription || "აღწერა არ არის",
      }))
    );

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id.toString()}
            className={`font-medium border-2 border-gray-300 flex items-center justify-start text-sm sm:text-base px-2 py-3 rounded-lg cursor-pointer text-center transition-colors duration-300 ${
              activeCategory === item.category
                ? "bg-gray-200 text-gray-800 shadow-lg"
                : "text-black bg-white hover:bg-gray-200"
            }`}
            custom={index}
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => handleClick(item.category)}
          >
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={24}
              height={24}
              className="mr-2"
            />
            {item.title}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        ref={containerRef}
        className={
          activeCategory === "road_markings"
            ? "flex flex-col gap-4"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        }
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
        variants={containerVariants}
        key={activeCategory}
      >
        {filteredItems.map(
          ({ id, item, image, description, modalImage, modalDescription }) => (
            <motion.div
              key={id}
              className={`flex flex-col rounded-md p-4 shadow-md hover:shadow-xl transition-all duration-300 ${
                activeCardId === id ? "bg-gray-200" : "bg-white"
              }`}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              {activeCategory === "road_markings" ? (
                // საგზაო მონიშვნების განლაგება (მოდალის გარეშე, დიდი სურათი)
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-full lg:w-1/3">
                    <Image
                      src={image}
                      alt={item.title}
                      width={500}
                      height={400}
                      className="rounded-md w-full h-auto"
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h2 className="text-sm font-semibold text-gray-800">
                      {description}
                    </h2>
                    <p className="text-gray-700 text-sm">{modalDescription}</p>
                  </div>
                </div>
              ) : (
                // სხვა კატეგორიების ორიგინალური განლაგება (მოდალით)
                <>
                  <Image
                    src={image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="mb-2 w-[400px] sm:w-96 sm:h-96 lg:w-64 lg:h-64 rounded-md cursor-pointer"
                    style={{ objectFit: "contain" }}
                    priority
                    onClick={() =>
                      handleImageClick(item, modalImage, modalDescription, id)
                    }
                  />
                  <p className="text-center text-gray-700 text-sm sm:text-base">
                    {description}
                  </p>
                </>
              )}
            </motion.div>
          )
        )}
      </motion.div>
      {isModalOpen && selectedItem && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-30"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={closeModal}
        >
          <motion.div
            className="relative bg-white border-2 p-6 rounded-lg shadow-lg max-w-3xl w-full flex flex-col gap-4 px-7 mx-5"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.modalImage && selectedItem.modalImage.trim() ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={selectedItem.modalImage}
                    alt={selectedItem.item.title}
                    width={300}
                    height={300}
                    className="rounded-md"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-gray-800 text-sm overflow-y-auto h-40">
                    {selectedItem.modalDescription}
                  </p>
                  <button
                    className="absolute top-1 right-1 self-end text-gray-400 rounded-md hover:text-red-400"
                    onClick={closeModal}
                  >
                    <X />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between">
                <p className="text-gray-800 text-sm">
                  {selectedItem.modalDescription}
                </p>
                <button
                  className="absolute top-1 right-1 self-end text-gray-400 rounded-md hover:text-red-400"
                  onClick={closeModal}
                >
                  <X />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
