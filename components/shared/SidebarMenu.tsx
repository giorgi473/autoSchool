/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronsLeft,
  ChevronsRight,
  CircleHelp,
  ChevronUp,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { motion, AnimatePresence } from "framer-motion";

import {
  ActiveCategory,
  Question,
  questionCategories,
  vehicleCategories,
} from "@/constants/getdata";

export default function ExamApp() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [selectedQuestionCategory, setSelectedQuestionCategory] = useState<
    string | null
  >(null);
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>({
    id: 0,
    name: "არჩეული კითხვები",
    tickets: 0,
    main: [],
  });
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number | null>
  >({});
  const [lockedQuestions, setLockedQuestions] = useState<
    Record<number, boolean>
  >({});
  const [searchId, setSearchId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const questionsPerPage = 20;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedVehicle) {
      const defaultVehicle = vehicleCategories[0];
      setSelectedVehicle(defaultVehicle.id);
      const gadjetCount = countGadjetOccurrences();
      const questions = getAllQuestionsByGadjet(
        defaultVehicle.gadjet,
        true
      ).slice(0, gadjetCount[defaultVehicle.gadjet]);
      setActiveCategory({
        id: 0,
        name: "არჩეული კითხვები",
        tickets: questions.length,
        main: questions,
      });
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countGadjetOccurrences = (): Record<string, number> => {
    const gadjetCount: Record<string, number> = {};
    vehicleCategories.forEach((vehicle) => {
      Object.values(vehicle.categoryMappings).forEach((category) => {
        category.questions.forEach((question) => {
          gadjetCount[question.gadjet] =
            (gadjetCount[question.gadjet] || 0) + 1;
        });
      });
    });
    return gadjetCount;
  };

  const getAllQuestionsByGadjet = (
    gadjet: string,
    sortById: boolean = false
  ): Question[] => {
    const allQuestions: Question[] = [];
    vehicleCategories.forEach((vehicle) => {
      Object.values(vehicle.categoryMappings).forEach((category) => {
        category.questions.forEach((question) => {
          if (question.gadjet === gadjet) {
            allQuestions.push(question);
          }
        });
      });
    });
    if (sortById) {
      return allQuestions.sort((a, b) => a._id - b._id);
    }
    return allQuestions;
  };

  const getQuestionsByCategoryAndGadjet = (
    vehicleId: string,
    categoryName: string
  ): Question[] => {
    const vehicle = vehicleCategories.find((v) => v.id === vehicleId);
    if (!vehicle) return [];

    const questions = vehicle.categoryMappings[categoryName]?.questions || [];
    return questions.filter((q) => q.gadjet === vehicle.gadjet);
  };

  const handleVehicleSelect = (vehicleId: string) => {
    const vehicle = vehicleCategories.find((v) => v.id === vehicleId);
    if (!vehicle) return;

    setSelectedVehicle(vehicleId);
    setSelectedQuestionCategory(null);
    const gadjetCount = countGadjetOccurrences();
    const questions = getAllQuestionsByGadjet(vehicle.gadjet, true).slice(
      0,
      gadjetCount[vehicle.gadjet]
    );

    setActiveCategory({
      id: 0,
      name: "არჩეული კითხვები",
      tickets: questions.length,
      main: questions,
    });

    setCurrentPage(1);
    setSelectedAnswers({});
    setLockedQuestions({});
  };

  const handleQuestionCategorySelect = (categoryName: string) => {
    if (!selectedVehicle) {
      alert("ჯერ აირჩიეთ კატეგორია სურათიდან!");
      return;
    }

    setSelectedQuestionCategory(categoryName);
    const questions = getQuestionsByCategoryAndGadjet(
      selectedVehicle,
      categoryName
    );

    setActiveCategory({
      id: questionCategories.find((c) => c.name === categoryName)?.id || 0,
      name: categoryName,
      tickets: questions.length,
      main: questions,
    });

    setCurrentPage(1);
    setSelectedAnswers({});
    setLockedQuestions({});
  };

  const handleSearch = () => {
    if (!searchId) return;

    for (const vehicle of vehicleCategories) {
      for (const categoryName in vehicle.categoryMappings) {
        const question = vehicle.categoryMappings[categoryName].questions.find(
          (q) => q._id === Number(searchId)
        );
        if (question) {
          setActiveCategory({
            id: 0,
            name: "ძებნის შედეგი",
            tickets: 1,
            main: [question],
          });
          setCurrentPage(1);
          setSelectedAnswers({});
          setLockedQuestions({});
          return;
        }
      }
    }

    alert("ასეთი ID-ით ბილეთი ვერ მოიძებნა!");
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredQuestions = activeCategory.main;
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
      if (startPage > 2) pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) pages.push(i);

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push("...");
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
      className="relative"
    >
      <header className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
        <div className="flex flex-wrap md:flex-nowrap gap-x-2 gap-3 justify-center">
          {vehicleCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleVehicleSelect(category.id)}
              className={clsx(
                "flex flex-col items-center px-6 py-2 rounded-md transition select-none",
                selectedVehicle === category.id
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
              <span className="text-sm font-medium mt-1">{category.label}</span>
            </motion.button>
          ))}
        </div>
      </header>

      <div className="flex h-screen">
        <aside className="w-64 bg-white shadow-md h-screen overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b">
            <h2 className="text-md font-semibold text-center">
              კითხვების კატეგორიები
            </h2>
          </div>
          <div className="p-2 pb-32">
            <ul>
              {questionCategories.map((category) => (
                <motion.li
                  key={category.id}
                  onClick={() => handleQuestionCategorySelect(category.name)}
                  className={clsx(
                    "p-2 cursor-pointer rounded-md transition flex justify-between select-none",
                    selectedQuestionCategory === category.name
                      ? "bg-gray-500 text-white mb-2"
                      : "hover:bg-stone-100 bg-gray-200 mb-2"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{category.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex flex-col flex-grow">
          <main className="flex-1 mt-3 p-10">
            <div className="max-w-5xl">
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">
                  {selectedVehicle
                    ? `${
                        vehicleCategories.find((v) => v.id === selectedVehicle)
                          ?.label
                      } - ${activeCategory.name}`
                    : "აირჩიეთ კატეგორია"}
                </h2>
                <p className="text-gray-600">
                  {selectedVehicle
                    ? `${
                        vehicleCategories.find((v) => v.id === selectedVehicle)
                          ?.gadjet
                      } - სულ ბილეთი: ${activeCategory.tickets}`
                    : "ჯერ არაფერია არჩეული"}
                </p>
              </div>
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
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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

            <div className="mt-6 space-y-6">
              <AnimatePresence mode="wait">
                {currentQuestions.map((item, questionIndex) => {
                  const isLocked = lockedQuestions[questionIndex];
                  const selectedAnswer = selectedAnswers[questionIndex];
                  const correctAnswerIndex = item.answers.findIndex(
                    (a) => a.isCorrect
                  );

                  return (
                    <motion.div
                      key={item._id}
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
                            alt="question image"
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
                          const isSelected = selectedAnswer === answerIndex;
                          const isCorrect = answer.isCorrect;
                          const showCorrect =
                            isLocked && answerIndex === correctAnswerIndex;

                          return (
                            <motion.li
                              key={answerIndex}
                              onClick={() =>
                                !isLocked &&
                                handleAnswerClick(
                                  questionIndex,
                                  answerIndex,
                                  isCorrect
                                )
                              }
                              className={clsx(
                                "flex items-center p-3 border rounded-md cursor-pointer transition font-semibold select-none text-lg",
                                isLocked
                                  ? "cursor-not-allowed"
                                  : "hover:bg-gray-200",
                                isSelected && isCorrect
                                  ? "bg-green-500 text-white"
                                  : isSelected
                                  ? "bg-red-500 text-white"
                                  : showCorrect
                                  ? "bg-green-500 text-white"
                                  : "bg-gray-100"
                              )}
                              whileHover={{ scale: isLocked ? 1 : 1.02 }}
                              whileTap={{ scale: isLocked ? 1 : 0.98 }}
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
                  );
                })}
              </AnimatePresence>

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
          </main>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-full shadow-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronUp size={28} />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-14 bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-md"
                >
                  ზევით
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
