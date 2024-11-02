"use client";
import { createContext, useState, ReactNode } from "react";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

interface StateContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModalState: () => void;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalState = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <StateContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        toggleModalState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
