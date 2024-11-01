"use client";
import { createContext, useState, ReactNode } from "react";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

interface StateContextType {
  isModalNavbarOpen: boolean;
  setIsModalNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModalState: () => void;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const [isModalNavbarOpen, setIsModalNavbarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModalState = () => {
    setIsModalNavbarOpen((prev) => !prev);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StateContext.Provider
      value={{
        isModalNavbarOpen,
        setIsModalNavbarOpen,
        isMenuOpen,
        setIsMenuOpen,
        toggleModalState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
