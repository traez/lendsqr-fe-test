"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { UserType } from "./dataUserType";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

export interface StateContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModalState: () => void;
  userData: UserType[] | null;
  fetchUserData: () => Promise<void>;
  isLoading: boolean;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState<UserType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleModalState = () => {
    setIsModalOpen((prev) => !prev);
  };

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      } else {
        const response = await fetch(
          "https://api.mockaron.com/mock/lc99wiyhr5/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data.arrayCard);
        localStorage.setItem("userData", JSON.stringify(data.arrayCard));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <StateContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        toggleModalState,
        userData,
        fetchUserData,
        isLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
