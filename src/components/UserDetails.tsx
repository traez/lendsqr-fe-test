"use client";
import { useContext } from "react";
import { StateContext } from "@/lib/StateProvider";
import Navbar from "./Navbar";
import NavbarModal from "./NavbarModal";
import Details from "./Details";

const UserDetails = () => {
  const { isModalOpen } = useContext(StateContext)!;

  return (
    <>
      <div className="userdetails">
        <Navbar />
        {!isModalOpen && (
          <>
            <Details />
          </>
        )}
      </div>
      {isModalOpen && <NavbarModal />}
    </>
  );
};

export default UserDetails;
