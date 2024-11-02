"use client";
import { useContext } from "react";
import { StateContext } from "@/lib/StateProvider";
import Navbar from "./Navbar";
import NavbarModal from "./NavbarModal";
import Top from "./Top";
import Box from "./Box";
import Card from "./Card";
import Bottom from "./Bottom";

const Dashboard = () => {
  const { isModalOpen } = useContext(StateContext)!;

  return (
    <>
      <div className="dashboard">
        <Navbar />
        {!isModalOpen && (
          <>
            <Top />
            <Box />
            <Card />
            <Bottom />
          </>
        )}
      </div>
      {isModalOpen && <NavbarModal />}
    </>
  );
};

export default Dashboard;
