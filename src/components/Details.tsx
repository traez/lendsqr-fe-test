"use client";
import { useContext } from "react";
import { useParams } from "next/navigation";
import { StateContext } from "@/lib/StateProvider";
//import { arrayCard } from "@/lib/dataUserInfo";
import DetailsAAA from "./DetailsAAA";
import DetailsBBB from "./DetailsBBB";
import DetailsCCC from "./DetailsCCC";

const Details = () => {
  const params = useParams();
  const usernameP = params.username;
  const { userData } = useContext(StateContext)!;
  const userInfo = userData?.find((user) => user.USERNAME === usernameP);
  //const userInfo = arrayCard.find((user) => user.USERNAME === usernameP);
  //console.log(userInfo);

  return (
    <>
      <section className="details">
        <DetailsAAA />
        <DetailsBBB userInfo={userInfo} />
        <DetailsCCC userInfo={userInfo} />
        <article className="detailsddd">.</article>
      </section>
    </>
  );
};

export default Details;
