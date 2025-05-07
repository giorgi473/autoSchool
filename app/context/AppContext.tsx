"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AppContextType {
  showWhitePanel: boolean;
  setShowWhitePanel: (value: boolean) => void;
  isClientLoaded: boolean;
  selectedVehicleType: string | null;
  setSelectedVehicleType: (value: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showWhitePanel, setShowWhitePanel] = useState<boolean>(false);
  const [isClientLoaded, setIsClientLoaded] = useState<boolean>(false);
  const [selectedVehicleType, setSelectedVehicleType] = useState<string | null>(
    null
  );

  // ინიციალიზაცია localStorage-დან
  useEffect(() => {
    try {
      const savedPanel = localStorage.getItem("showWhitePanel");
      if (savedPanel) {
        setShowWhitePanel(JSON.parse(savedPanel));
      }
      const savedVehicle = localStorage.getItem("selectedVehicleType");
      if (savedVehicle) {
        setSelectedVehicleType(savedVehicle);
      }
    } catch (error) {
      console.error("localStorage-ის წაკითხვის შეცდომა:", error);
    }
    setIsClientLoaded(true);
  }, []);

  // showWhitePanel-ის და selectedVehicleType-ის შენახვა localStorage-ში
  useEffect(() => {
    if (isClientLoaded) {
      try {
        localStorage.setItem("showWhitePanel", JSON.stringify(showWhitePanel));
        if (selectedVehicleType) {
          localStorage.setItem("selectedVehicleType", selectedVehicleType);
        } else {
          localStorage.removeItem("selectedVehicleType");
        }
      } catch (error) {
        console.error("localStorage-ის ჩაწერის შეცდომა:", error);
      }
    }
  }, [showWhitePanel, selectedVehicleType, isClientLoaded]);

  return (
    <AppContext.Provider
      value={{
        showWhitePanel,
        setShowWhitePanel,
        isClientLoaded,
        selectedVehicleType,
        setSelectedVehicleType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
