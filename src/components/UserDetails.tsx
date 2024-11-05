"use client";
import { useParams } from "next/navigation";
import { arrayCard } from "@/lib/dataUserInfo";

const UserDetails = () => {
  const params = useParams();
  const usernameP = params.username;
  const userInfo = arrayCard.find((user) => user.USERNAME === usernameP);
  console.log(userInfo);

  return <div>UserDetails</div>;
};

export default UserDetails;
