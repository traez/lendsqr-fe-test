"use client";
import { useContext } from "react";
import { StateContext } from "@/lib/StateProvider";
import Navbar from "./Navbar";
import NavbarModal from "./NavbarModal";
import Users from "./Users";

const Dashboard = () => {
  const { isModalNavbarOpen } = useContext(StateContext)!;

  return (
    <>
      <Navbar />
      {isModalNavbarOpen ? <NavbarModal /> : <Users />}
    </>
  );
};

export default Dashboard;
