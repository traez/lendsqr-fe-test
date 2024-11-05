"use client";
import { useParams } from "next/navigation";
import { arrayCard } from "@/lib/dataUserInfo";

const Details = () => {
  const params = useParams();
  const usernameP = params.username;
  const userInfo = arrayCard.find((user) => user.USERNAME === usernameP);
  console.log(userInfo);

  return (
    <>
      <section className="details">
        <article className="aaa">aaa</article>
        <article className="bbb">bbb</article>
        <article className="ccc">ccc</article>
        <article className="ddd">ddd</article>
      </section>
    </>
  );
};

export default Details;
