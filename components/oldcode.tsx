/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronsLeft, ChevronsRight, CircleHelp } from "lucide-react";
import { categories, categoriese, Category } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "../ui/alert-dialog";

export default function SidebarMenu() {
  const [selected, setSelected] = useState<string>(categoriese[0].id);
  const selectedCategory = categoriese.find((c) => c.id === selected);
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | null;
  }>({});
  const [lockedQuestions, setLockedQuestions] = useState<{
    [key: number]: boolean;
  }>({});
  const [searchId, setSearchId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const questionsPerPage = 15;

  const handleSearch = () => {
    let foundQuestion = null;
    let foundCategory = null;

    for (const category of categories) {
      if (category.main) {
        for (const question of category.main) {
          if (question._id === Number(searchId)) {
            foundQuestion = question;
            foundCategory = category;
            break;
          }
        }
      }
      if (foundQuestion) break;
    }

    if (foundQuestion && foundCategory) {
      setActiveCategory({
        ...foundCategory,
        main: [foundQuestion],
      });

      setSelectedAnswers({});
      setLockedQuestions({});
      setCurrentPage(1);
    } else {
      alert("ასეთი ID-ით ბილეთი ვერ მოიძებნა!");
    }
  };

  const handleAnswerClick = (
    questionIndex: number,
    answerIndex: number,
    isCorrect: boolean
  ) => {
    if (lockedQuestions[questionIndex]) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));

    setLockedQuestions((prev) => ({
      ...prev,
      [questionIndex]: true,
    }));
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelected(categoryId);

    const selectedCategory = categoriese.find((c) => c.id === categoryId);
    if (!selectedCategory) return;

    const filteredQuestions = categories
      .flatMap((category) => category.main || [])
      .filter((question) => question.gadjet === selectedCategory.gadjet);

    setActiveCategory({
      id: 1,
      name: selectedCategory.label,
      main: filteredQuestions,
      tickets: selectedCategory.tickets,
    });

    setCurrentPage(1);
    setSelectedAnswers({});
    setLockedQuestions({});
  };

  const filteredQuestions = activeCategory.main || [];
  const totalQuestions = filteredQuestions.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const currentQuestions = filteredQuestions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages.map((page, index) => (
      <Button
        key={index}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        className={clsx(
          "px-3 py-2 rounded-md select-none",
          currentPage === page
            ? "bg-white text-gray-700 border-2 hover:text-white border-green-500"
            : "bg-green-500 text-white",
          page === "..." ? "cursor-default" : "cursor-pointer"
        )}
        disabled={page === "..."}
      >
        {page}
      </Button>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-wrap md:flex-nowrap gap-x-2 gap-3 justify-center">
            {categoriese.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={clsx(
                  "flex flex-col items-center px-6 py-2 rounded-md transition select-none",
                  selected === category.id
                    ? "bg-gray-500 text-white shadow-md"
                    : "bg-gray-200 hover:bg-gray-300"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={category.icon}
                  alt={category.label}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-sm font-medium mt-1">
                  {category.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </header>
      <div className="flex h-screen">
        <aside className="w-64 bg-white shadow-md h-screen overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">ყველა ბილეთი</h2>
          </div>
          <div className="p-2 pb-32">
            <ul>
              {categories.map((category) => (
                <motion.li
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedAnswers({});
                    setLockedQuestions({});
                    setCurrentPage(1);
                  }}
                  className={clsx(
                    "p-2 cursor-pointer rounded-md transition flex justify-between select-none",
                    activeCategory.id === category.id
                      ? "bg-gray-500 text-white mb-2"
                      : "hover:bg-stone-100 bg-gray-200 mb-2"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>
                    {category.id}. {category.name}
                  </span>
                  {category.isNew && (
                    <span className="text-red-500 text-sm font-semibold">
                      ახალი
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="flex flex-col flex-grow">
          <main className="flex-1 mt-3 p-10">
            <div className="max-w-5xl">
              {selectedCategory && (
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-bold">
                    {selectedCategory.label} კატეგორია
                  </h2>
                  <p className="text-gray-600">
                    სულ ბილეთები: {activeCategory.tickets}
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between max-w-5xl mt-5">
              <div className="flex items-center gap-2">
                <Button
                  className="bg-green-500 text-white px-3 py-2 rounded-md disabled:opacity-50 select-none"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                >
                  <ChevronsLeft />
                </Button>
                {renderPageNumbers()}
                <Button
                  className="bg-green-500 text-white px-3 py-2 rounded-md disabled:opacity-50"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronsRight />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  placeholder="ბილეთის ID..."
                  className="w-[250px]"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
                <motion.button
                  onClick={handleSearch}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 py-1 px-2 rounded-md text-white select-none"
                >
                  ძებნა
                </motion.button>
              </div>
            </div>
            {currentQuestions.length > 0 && (
              <div className="mt-6 space-y-6">
                <AnimatePresence mode="wait">
                  {currentQuestions.map((item, questionIndex) => (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="border rounded-lg p-2 shadow-md bg-gray-700 max-w-5xl"
                    >
                      <div className="relative group">
                        <div className="absolute top-0 left-0 right-0 p-2 flex justify-between items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="bg-black rounded-md ring-2 ring-gray-800">
                            <span className="p-1">
                              <b>ID: {item._id}</b>
                            </span>
                          </span>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <span className="bg-gray-800 p-1 rounded-full cursor-pointer">
                                <CircleHelp
                                  className="bg-black rounded-full"
                                  size={22}
                                />
                              </span>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle className="flex items-center justify-between">
                                  #ID: {item._id}
                                  <AlertDialogCancel>x</AlertDialogCancel>
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  {item.answeringQuestion}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                        <motion.div>
                          <Image
                            src={item.image}
                            alt="image"
                            width={
                              item.image ===
                              "https://www.starti.ge/exam/shss.png"
                                ? 200
                                : 500
                            }
                            height={
                              item.image ===
                              "https://www.starti.ge/exam/shss.png"
                                ? 100
                                : 500
                            }
                            className={clsx(
                              "border-none rounded-md border-gray-700",
                              item.image ===
                                "https://www.starti.ge/exam/shss.png"
                                ? "w-[200px] h-[200px] mx-auto"
                                : "w-full h-auto"
                            )}
                            unoptimized
                          />
                        </motion.div>
                      </div>
                      <p className="mt-4 text-lg font-semibold text-white text-center">
                        {item.desc}
                      </p>
                      <ul className="mt-4 grid grid-cols-2 gap-2">
                        {item.answers.map((answer, answerIndex) => {
                          const isSelected =
                            selectedAnswers[questionIndex] === answerIndex;
                          const correctAnswerIndex = item.answers.findIndex(
                            (a) => a.isCorrect
                          );
                          return (
                            <motion.li
                              key={answerIndex}
                              onClick={() =>
                                handleAnswerClick(
                                  questionIndex,
                                  answerIndex,
                                  answer.isCorrect
                                )
                              }
                              className={clsx(
                                "flex items-center p-3 border rounded-md cursor-pointer transition font-semibold select-none",
                                "text-lg",
                                lockedQuestions[questionIndex]
                                  ? "cursor-not-allowed"
                                  : "hover:bg-gray-200",
                                isSelected && answer.isCorrect
                                  ? "bg-green-500 text-white"
                                  : isSelected
                                  ? "bg-red-500 text-white"
                                  : "bg-gray-100",
                                lockedQuestions[questionIndex] &&
                                  answerIndex === correctAnswerIndex
                                  ? "bg-green-500 text-white"
                                  : "",
                                "rounded-md"
                              )}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span className="w-8 h-8 flex items-center justify-center bg-white text-gray-900 font-bold rounded-md mr-2">
                                {answerIndex + 1}
                              </span>
                              {answer.text}
                            </motion.li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div>
                  <div className="flex items-center gap-2 mt-4">
                    <Button
                      className="bg-green-500 text-white px-3 py-2 rounded-md disabled:opacity-50"
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronsLeft />
                    </Button>
                    {renderPageNumbers()}
                    <Button
                      className="bg-green-500 text-white px-3 py-2 rounded-md disabled:opacity-50"
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronsRight />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </motion.div>
  );
}
