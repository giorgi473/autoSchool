"use client";

import Navbar from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { useAppContext } from "@/app/context/AppContext";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showWhitePanel, isClientLoaded } = useAppContext();

  if (!isClientLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center space-x-2">
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
    );
  }
  if (showWhitePanel) {
    return <>{children}</>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
