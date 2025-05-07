import { useState, useEffect } from "react";
import {
  Question,
  questionCategories,
  vehicleCategories,
} from "@/constants/getdata";

interface DisplayQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  image: string;
}

interface UseQuestionsProps {
  selectedCategory: string;
  categoryCheckboxes: boolean[];
}

export const useQuestions = ({
  selectedCategory,
  categoryCheckboxes,
}: UseQuestionsProps) => {
  const [allQuestions, setAllQuestions] = useState<DisplayQuestion[]>([]);
  const [shownQuestionIds, setShownQuestionIds] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] =
    useState<DisplayQuestion | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const loadQuestions = () => {
    let selectedVehicle = vehicleCategories.find(
      (category) => category.label === selectedCategory
    );
    console.log("Attempting to load questions for category:", selectedCategory);
    console.log(
      "All vehicle categories available:",
      vehicleCategories.map((c) => ({ label: c.label, id: c.id }))
    );
    if (!selectedVehicle) {
      console.error("No vehicle found for category:", selectedCategory);
      setAllQuestions([]);
      setCurrentQuestion(null);
      setShownQuestionIds([]);
      setErrorMessage("არჩეული კატეგორია არ მოიძებნა!");
      return;
    }
    console.log("Selected vehicle before adjustment:", selectedVehicle);

    // ხელით შემოწმება "D"-სთვის
    if (selectedCategory === "D") {
      selectedVehicle =
        vehicleCategories.find((category) => category.label === "D") ||
        selectedVehicle;
      console.log("Forcefully selected vehicle for 'D':", selectedVehicle);
    }

    console.log("Final selected vehicle details:", selectedVehicle);

    const selectedCategoryIndices = categoryCheckboxes
      .map((checked, index) => (checked ? index : -1))
      .filter((index) => index !== -1);

    const rawQuestions: Question[] = [];
    selectedCategoryIndices.forEach((index) => {
      const category = questionCategories[index];
      const categoryQuestions =
        selectedVehicle.categoryMappings[category.name]?.questions || [];
      console.log(
        `Loading questions for ${category.name} from ${selectedCategory}: ${categoryQuestions.length} found`
      );
      rawQuestions.push(...categoryQuestions);
    });

    console.log("Total raw questions loaded:", rawQuestions.length);
    if (rawQuestions.length === 0) {
      console.warn("No questions found for the selected category!");
      setErrorMessage("არჩეული კატეგორიისთვის კითხვები არ მოიძებნა.");
    } else {
      console.log("Sample of loaded questions:", rawQuestions.slice(0, 2));
    }

    const questions: DisplayQuestion[] = rawQuestions.map((raw) => ({
      id: raw._id.toString(),
      text: raw.desc,
      options: raw.answers.map((answer) => answer.text),
      correctAnswer: raw.answers.find((answer) => answer.isCorrect)?.text || "",
      image: raw.image,
    }));

    const shuffledQuestions = shuffleArray(questions);
    setAllQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    if (shuffledQuestions.length > 0) {
      setCurrentQuestion(shuffledQuestions[0]);
      setShownQuestionIds([shuffledQuestions[0].id]);
    } else {
      setCurrentQuestion(null);
      setShownQuestionIds([]);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [selectedCategory, categoryCheckboxes]);

  return {
    allQuestions,
    shownQuestionIds,
    currentQuestion,
    errorMessage,
    currentQuestionIndex,
    loadQuestions,
    setAllQuestions,
    setShownQuestionIds,
    setCurrentQuestion,
    setCurrentQuestionIndex,
  };
};
