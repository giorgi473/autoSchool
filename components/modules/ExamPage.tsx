"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { questionCategories, vehicleCategories } from "@/constants/getdata";

const ExamPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("B, B1");
  const [isSelectActive, setIsSelectActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // New loading state

  // Get the selected vehicle category
  const selectedVehicle = vehicleCategories.find(
    (category) => category.label === selectedCategory
  );
  const selectedGadjet = selectedVehicle?.gadjet || ""; // The vehicle type (e.g., "ავტომობილი")

  // State for checkbox statuses for each question category
  const [categoryCheckboxes, setCategoryCheckboxes] = useState<boolean[]>(
    Array(questionCategories.length).fill(true)
  );

  // Handle Select open/close to toggle green background
  const handleSelectOpen = () => {
    setIsSelectActive(true);
  };

  const handleSelectClose = () => {
    setIsSelectActive(false);
  };

  // Handle single master checkbox for all categories
  const handleMasterCheckboxChange = (checked: boolean) => {
    setCategoryCheckboxes(Array(questionCategories.length).fill(checked));
  };

  // Handle individual checkbox change for each category
  const handleCategoryCheckboxChange = (index: number, checked: boolean) => {
    const updatedCheckboxes = [...categoryCheckboxes];
    updatedCheckboxes[index] = checked;
    setCategoryCheckboxes(updatedCheckboxes);
  };

  // Determine master checkbox state (checked, unchecked, or indeterminate)
  const masterChecked = categoryCheckboxes.every((checked) => checked);
  const masterIndeterminate =
    categoryCheckboxes.some((checked) => checked) && !masterChecked;

  // Calculate the total number of vehicles (questions) and checked vehicles (tickets) per category
  const vehicleCounts = questionCategories.map((category) => {
    const questionsInCategory =
      selectedVehicle?.categoryMappings[category.name]?.questions || [];
    return questionsInCategory.length; // Number of questions (vehicles) in this category
  });

  const totalVehicles = vehicleCounts.reduce((sum, count) => sum + count, 0); // Total vehicles across all categories

  // Count checked vehicles (questions) based on checked categories
  const checkedVehicles = questionCategories.reduce(
    (count, category, index) => {
      if (categoryCheckboxes[index]) {
        const questionsInCategory =
          selectedVehicle?.categoryMappings[category.name]?.questions || [];
        return count + questionsInCategory.length; // Add the number of questions (vehicles) in this category if checked
      }
      return count;
    },
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4 sm:p-5">
      <div className="w-full max-w-6xl">
        {/* Start Exam Button */}
        <div className="flex items-center justify-center mb-4">
          <Button
            variant="default"
            className="px-6 sm:px-10 font-bold text-base sm:text-lg bg-green-500 hover:bg-green-600"
          >
            გამოცდის დაწყება
          </Button>
        </div>

        {/* Vehicle Category Select */}
        <Select
          value={selectedCategory}
          onValueChange={(value) => {
            setLoading(true); // Set loading to true when a new category is selected
            setSelectedCategory(value);
            setCategoryCheckboxes(Array(questionCategories.length).fill(true)); // Reset checkboxes when category changes
            // Simulate a delay (e.g., 1 second) to mimic data fetching
            setTimeout(() => {
              setLoading(false); // Set loading to false after the delay
            }, 1000);
          }}
          onOpenChange={(open) =>
            open ? handleSelectOpen() : handleSelectClose()
          }
        >
          <SelectTrigger
            className={`w-full border-none rounded-md p-4 sm:p-6 text-base sm:text-xl focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 select-none ${
              isSelectActive
                ? "bg-green-500 text-white"
                : "bg-green-500 text-white"
            }`}
            aria-label="Select vehicle category"
          >
            <SelectValue placeholder="Select a category">
              <div className="flex items-center">
                <Image
                  src={
                    vehicleCategories.find(
                      (category) => category.label === selectedCategory
                    )?.icon || ""
                  }
                  alt="vehicle icon"
                  width={32}
                  height={32}
                  className="mr-3 sm:mr-4 sm:w-10 sm:h-10"
                />
                <span>{selectedCategory}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
            {vehicleCategories.map((category) => (
              <SelectItem
                key={category.id}
                value={category.label}
                className="flex items-center p-3 sm:p-2 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer text-sm sm:text-lg"
              >
                <div className="flex items-center">
                  <Image
                    src={category.icon}
                    alt={`${category.label} icon`}
                    width={36}
                    height={36}
                    className="mr-2 sm:mr-3 sm:w-[45px] sm:h-[45px]"
                  />
                  <span>{category.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Conditionally render loading indicator or the main content */}
        {loading ? (
          <div className="flex justify-center items-center mt-4">
            <div className="flex items-center space-x-2 mt-10">
              <svg
                className="animate-spin h-8 w-8 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              <span className="text-gray-700 text-lg">იტვირთება...</span>
            </div>
          </div>
        ) : (
          /* Card with master checkbox, ticket count, and category checkboxes */
          <Card className="w-full mt-4 sm:mt-5">
            <CardContent className="pt-4 sm:pt-6">
              {/* Master Checkbox and Ticket Count, Centered Horizontally */}
              <div className="flex justify-center items-center mb-3 sm:mb-4 space-x-4">
                <div className="flex items-center">
                  <Checkbox
                    checked={masterChecked}
                    onCheckedChange={handleMasterCheckboxChange}
                    className="mr-2 border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                    ref={(el) => {
                      if (el) {
                        el.indeterminate = masterIndeterminate;
                      }
                    }}
                  />
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">
                    ყველას მონიშვნა/მოხსნა
                  </span>
                </div>
                <span className="text-green-500 font-semibold text-sm sm:text-base">
                  {checkedVehicles}/{totalVehicles} {selectedGadjet}
                </span>
              </div>

              {/* Category Checkboxes: Single column on mobile, two columns on tablet and desktop */}
              <div className="flex flex-col md:flex-row w-full gap-3 md:gap-4">
                {/* Left Column (or first part of single column on mobile) */}
                <div className="flex-1">
                  {questionCategories
                    .slice(0, Math.ceil(questionCategories.length / 2))
                    .map((category, index) => (
                      <div key={category.id} className="flex items-center mb-2">
                        <Checkbox
                          checked={categoryCheckboxes[index]}
                          onCheckedChange={(checked) =>
                            handleCategoryCheckboxChange(
                              index,
                              checked as boolean
                            )
                          }
                          className="mr-2 border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                        />
                        <span className="text-gray-700 text-sm sm:text-base break-words">
                          {category.name} ({vehicleCounts[index]})
                        </span>
                      </div>
                    ))}
                </div>

                {/* Right Column (or second part of single column on mobile) */}
                <div className="flex-1">
                  {questionCategories
                    .slice(Math.ceil(questionCategories.length / 2))
                    .map((category, index) => (
                      <div key={category.id} className="flex items-center mb-2">
                        <Checkbox
                          checked={
                            categoryCheckboxes[
                              index + Math.ceil(questionCategories.length / 2)
                            ]
                          }
                          onCheckedChange={(checked) =>
                            handleCategoryCheckboxChange(
                              index + Math.ceil(questionCategories.length / 2),
                              checked as boolean
                            )
                          }
                          className="mr-2 border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                        />
                        <span className="text-gray-700 text-sm sm:text-base break-words">
                          {category.name} (
                          {
                            vehicleCounts[
                              index + Math.ceil(questionCategories.length / 2)
                            ]
                          }
                          )
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
